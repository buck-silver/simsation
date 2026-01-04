import { Component, input } from '@angular/core';

@Component({
  selector: 'content-credits, section[credits]',
  template: `
    @if (heading()) {
      <h2>{{ heading() }}</h2>
    } @else {
      <h2>Creators and contributors</h2>
    }
    <ng-content [select]="'credits-list, ul[credits-list]'">
      <ng-content [select]="'li[credit]'"></ng-content>
    </ng-content>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ContentCreditsComponent {
  readonly heading = input<string>('');
}

@Component({
  selector: 'credit, li[credit]',
  template: `
    @if (href()) {
      <a class="link" [href]="href()" target="_blank">{{ to() }}</a>
    } @else {
      <span>{{ to() }}</span>
    }
    @if (note()) {
      <span class="separator">—</span>
      <span>{{ note() }}</span>
    }
  `,
  styles: [
    `
      .separator {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    `,
  ],
})
export class ContentCreditsItemComponent {
  readonly to = input.required<string>();
  readonly href = input<string>('');
  readonly note = input<string>('');
}
