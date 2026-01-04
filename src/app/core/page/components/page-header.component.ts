import { Component } from '@angular/core';

@Component({
  selector: 'page-header, [pageHeader]',
  host: {
    class: 'page-header',
  },
  template: `
    <div class="page-header-contents">
      <ng-content></ng-content>
    </div>
  `,
  styles: `
    :host {
      grid-area: page-header;
      box-sizing: border-box;
      width: 100%;
      min-height: 15rem;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 var(--mat-sys-corner-medium) var(--mat-sys-corner-medium);
      background-color: var(--mat-sys-surface);
      color: var(--mat-sys-on-surface);
    }

    .page-header-contents {
      height: 100%;
      max-width: 60rem;
      padding: 1rem 1rem 2rem 1rem;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
})
export class PageHeaderComponent {}
