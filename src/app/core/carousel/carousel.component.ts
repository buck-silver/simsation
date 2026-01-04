import {
  afterNextRender,
  Component,
  ElementRef,
  signal,
  ViewChild,
  type WritableSignal,
} from '@angular/core';
import { IteratePipe } from '../pipes/iterate.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [IteratePipe, MatButtonModule, MatIcon],
  selector: 'carousel',
  styles: `
    :host {
      display: block;
      box-sizing: border-box;
      position: relative;
      width: 100%;
      min-height: 15rem;
      padding: 1rem 3rem 3rem 3rem;
    }
    .carousel-content {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      box-shadow: var(--mat-sys-level1);
      overflow: hidden;
    }
    .carousel-track {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease-in-out;
    }
    .carousel-track ::ng-deep > * {
      flex: 0 0 100%;
      width: 100%;
      height: 100%;
    }
    .carousel-controls {
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-template-rows: 1fr auto;
      align-items: center;
      justify-items: center;
      grid-template-areas:
        'prev .......... next'
        'prev indicators next';
    }
    .carousel-controls .next {
      pointer-events: auto;
      grid-area: next;
    }
    .carousel-controls .prev {
      pointer-events: auto;
      grid-area: prev;
    }
    .carousel-indicators {
      grid-area: indicators;
      pointer-events: auto;
      display: flex;
      height: fit-content;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
    }
    .carousel-indicators .indicator {
      transition: background-color 0.3s ease;
    }
    .carousel-indicators .indicator.active {
      background-color: var(--mat-sys-primary);
      color: var(--mat-sys-on-primary);
    }
  `,
  template: `
    <div class="carousel-content">
      <div
        #track
        class="carousel-track"
        [style.transform]="'translateX(-' + currentIndex() * 100 + '%)'"
      >
        <ng-content></ng-content>
      </div>
    </div>

    <div class="carousel-controls">
      <button
        matMiniFab
        class="prev"
        (click)="prev()"
        [disabled]="length() === 0"
        aria-label="Previous slide"
      >
        <mat-icon>chevron_left</mat-icon>
      </button>
      <div class="carousel-indicators">
        @for (item of length() | iterate; track $index) {
          <button
            class="indicator"
            matMiniFab
            [class.active]="$index === currentIndex()"
            (click)="currentIndex.set($index)"
          >
            {{ $index + 1 }}
          </button>
        }
      </div>
      <button
        matMiniFab
        class="next"
        (click)="next()"
        [disabled]="length() === 0"
        aria-label="Next slide"
      >
        <mat-icon>chevron_right</mat-icon>
      </button>
    </div>
  `,
})
export class CarouselComponent {
  @ViewChild('track', { static: true }) track!: ElementRef;

  currentIndex: WritableSignal<number> = signal<number>(0);

  length: WritableSignal<number> = signal<number>(0);

  constructor() {
    afterNextRender(() => {
      this.length.set(this.track.nativeElement.children.length);
    });
  }

  next() {
    if (this.length() > 0) {
      this.currentIndex.set((this.currentIndex() + 1) % this.length());
    }
  }

  prev() {
    if (this.length() > 0) {
      this.currentIndex.set(
        (this.currentIndex() - 1 + this.length()) % this.length()
      );
    }
  }
}
