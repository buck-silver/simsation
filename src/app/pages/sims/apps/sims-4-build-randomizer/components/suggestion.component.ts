import {
  Component,
  inject,
} from '@angular/core';
import { TypewriteService } from '../services/typewrite.service';
import { SimsRandomizerService } from '../services/randomizer.service';

@Component({
  selector: 'suggestion',
  host: { class: 'mat-elevation-z4' },
  template: `
    @if (typewriter.text(); as text) {
      <p class="suggestion-text">
        {{ text.revealed }}
      </p>
      <p
        [class]="
          'reaction' + (!typewriter.isWriting() ? ' pulse reaction-pop' : '')
        "
      >
        {{ typewriter.isWriting() ? '🤔' : text.reaction }}
      </p>
    }
  `,
  styles: `
    :host {
      display: block;
      position: relative;
      box-sizing: border-box;
      width: 100%;
      min-height: 20rem;
      border-radius: var(--mat-sys-corner-large);
      margin: 0 0 1rem 0;
      padding: 1rem;
      box-shadow: var(--mat-sys-level1);
      background-color: var(--mat-sys-primary-container);
      color: var(--mat-sys-on-primary-container);
    }
    
    .suggestion-text {
      margin: 1rem 0;
      font-family: 'Nanum Gothic Coding', monospace;
      font-size: 2rem;
      line-height: 2rem;
      white-space: pre-line;
    }

    .reaction {
      position: absolute;
      right: 0;
      bottom: 1rem;
      font-size: 2rem;
      padding: 0;
      margin: 0;
      transition: font-size ease 0.1s;
    }

    .reaction-pop {
      font-size: 3rem;
    }

    .pulse {
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0% {
        transform: scale(0.9);
      }

      50% {
        transform: scale(1);
      }

      100% {
        transform: scale(0.9);
      }
    }
  `,
})
export class SuggestionComponent {
  typewriter = inject(TypewriteService);
  randomizer = inject(SimsRandomizerService);
}
