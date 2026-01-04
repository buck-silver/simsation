import { Component } from '@angular/core';
import { SquishComponent } from './squish.component';

@Component({
  selector: 'shell-banner, header[shell-banner]',
  imports: [SquishComponent],
  template: `
    <squish [horizontal]="false">
      <ng-content></ng-content>
    </squish>
  `,
  styles: `
    :host {
      box-sizing: border-box;
      position: sticky;
      overflow: hidden;
      padding: 0;
      margin: 0;
      width: 100%;
      top: -12rem;
      height: 15rem;
      z-index: 1;
      box-shadow: var(--mat-sys-level1);
    }
  `,
  host: {
    role: 'banner',
  },
})
export class ShellBannerComponent {}
