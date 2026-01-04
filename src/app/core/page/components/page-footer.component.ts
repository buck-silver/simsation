import { Component } from '@angular/core';

@Component({
  selector: 'page-footer, [pageFooter]',
  host: {
    class: 'page-footer',
  },
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      grid-area: page-footer;
      box-sizing: border-box;
      width: 100%;
      padding: 1rem;
      border-radius: var(--mat-sys-corner-medium) var(--mat-sys-corner-medium) 0 0;
      background-color: var(--mat-sys-surface);
      color: var(--mat-sys-on-surface);
    }
  `,
})
export class PageFooterComponent {}
