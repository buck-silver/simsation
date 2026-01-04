import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SimsRandomizerService } from '../services/sims-randomizer.service';

@Component({
  selector: 'suggestion-actions',
  imports: [MatButtonModule, MatIconModule],
  template: `
    <button
      mat-mini-fab
      (click)="svc.previous()"
      aria-label="Previous suggestion"
      [disabled]="!svc.hasPrevious()"
    >
      <mat-icon>undo</mat-icon>
    </button>
    <button mat-fab (click)="svc.suggest()" aria-label="Make a new suggestion">
      <mat-icon>casino</mat-icon>
    </button>
    <button
      mat-mini-fab
      (click)="svc.next()"
      aria-label="Next suggestion"
      [disabled]="!svc.hasNext()"
    >
      <mat-icon>redo</mat-icon>
    </button>
  `,
  styles: `
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 1rem 0;

      button {
        margin: 0 0.5rem;
      }
    }
  `,
})
export class SuggestionActionsComponent {
  svc = inject(SimsRandomizerService);
}
