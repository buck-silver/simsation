import { Component } from '@angular/core';

@Component({
  selector: 'page-aside, [pageAside]',
  host: {
    class: 'page-aside',
  },
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      grid-area: page-aside;
      position: relative;
      box-sizing: border-box;
      padding: 1rem;
      width: 100%;
      border-radius: var(--mat-sys-corner-medium);
      background-color: var(--mat-sys-surface);
      color: var(--mat-sys-on-surface);
    }

    @container (width > 80rem) {
      :host {
        width: 20rem;
      }
    }
  `,
})
export class PageAsideComponent {}
