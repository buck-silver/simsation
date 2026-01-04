import { Component } from '@angular/core';

@Component({
  selector: 'page-content, [pageContent]',
  host: {
    class: 'page-content',
  },
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      grid-area: page-content;
      position: relative;
      box-sizing: border-box;
      padding: 1rem;
      width: 100%;
      max-width: 60rem;
      border-radius: var(--mat-sys-corner-medium);
      background-color: var(--mat-sys-surface);
      color: var(--mat-sys-on-surface);
    }
  `,
})
export class PageContentComponent {}
