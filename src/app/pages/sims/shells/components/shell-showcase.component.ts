import { Component, input } from '@angular/core';
import { AssetPipe } from '../../../../core/pipes/asset.pipe';

@Component({
  selector: 'shell-showcase',
  imports: [AssetPipe],
  template: `
    <img
      class="shell-img"
      [src]="src() | asset"
      [alt]="alt()"
      crossorigin="anonymous"
    />

    @if (title()) {
      <h3 class="shell-title">{{ title() }}</h3>
    }

    @if (tags()) {
      <p class="shell-tags">{{ tags() }}</p>
    }
  `,
  styles: `
    :host {
      width: 100%;
      height: 100%;
      display: block;
      box-sizing: border-box;
      background-color: var(--mat-sys-secondary-container);
      color: var(--mat-sys-on-secondary-container);
    }

    .shell-title {
      padding: 0.25rem 1rem;
    }

    .shell-img {
      width: 100%;
      height: auto;
    }

    .shell-tags {
      padding: 0.25rem 1rem;
    }
  `,
})
export default class ShellShowcaseComponent {
  src = input<string>('');
  alt = input<string>('');
  title = input<string>('');
  tags = input<string>('');
}
