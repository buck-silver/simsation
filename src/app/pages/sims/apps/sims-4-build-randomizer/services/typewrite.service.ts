import { Injectable, signal, inject, PLATFORM_ID, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SimsRandomizerService, Suggestion } from './randomizer.service';

type WrittenText = {
  value: string;
  reaction: string;
  revealed: string;
};

@Injectable({
  providedIn: 'any',
})
export class TypewriteService {
  private readonly svc = inject(SimsRandomizerService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly durationInMs = 2000;

  private timestamp?: number;
  private animationId = 0;

  readonly isWriting = signal(false);

  readonly text = signal<WrittenText>({
    value: '',
    reaction: '',
    revealed: '',
  });

  readonly onChange = effect(() => {
    const suggestion = this.svc.suggestion();
    
    if (!this.isBrowser) {
      this.setText(suggestion);
      return;
    }

    this.svc.isNavigating
      ? this.setText(suggestion)
      : this.animateText(suggestion);
  });

  private setText(suggestion: Suggestion): void {
    this.invalidateAnimation();
    this.isWriting.set(false);
    this.updateText(suggestion.value, suggestion.reaction, suggestion.value);
  }

  private animateText(suggestion: Suggestion): void {
    this.invalidateAnimation();
    this.updateText(suggestion.value, suggestion.reaction);
    this.isWriting.set(true);
    requestAnimationFrame((time) => this.animate(time, this.animationId));
  }

  private invalidateAnimation(): void {
    this.animationId++;
    this.timestamp = undefined;
  }

  private animate(currentTime: number, animationId: number): void {
    if (animationId !== this.animationId) return;

    if (this.timestamp === undefined) {
      this.timestamp = currentTime;
    }

    const elapsed = currentTime - this.timestamp;
    const isComplete = elapsed >= this.durationInMs;

    if (isComplete) {
      this.completeAnimation();
      return;
    }

    this.updateFrame(elapsed);
    requestAnimationFrame((time) => this.animate(time, animationId));
  }

  private completeAnimation(): void {
    const text = this.text();
    this.setText({ value: text.value, reaction: text.reaction });
  }

  private updateFrame(elapsed: number): void {
    const current = this.text();
    const totalLength = current.value.length;
    const frameDelay = this.durationInMs / totalLength;
    const currentFrame = Math.min(
      Math.floor(elapsed / frameDelay),
      totalLength
    );

    const revealed = current.value.substring(0, currentFrame);
    const hidden = current.revealed.substring(currentFrame);
    const updated = revealed + hidden;

    if (current.revealed !== updated) {
      this.updateText(current.value, current.reaction, updated);
    }
  }

  private updateText(value: string, reaction: string, revealed?: string): void {
    this.text.set({
      value,
      reaction,
      revealed: revealed ?? value.replace(/([\S])/g, '\xa0'),
    });
  }
}
