import { Component } from '@angular/core';

@Component({
  selector: 'page-controls, [pageControls]',
  host: {
    class: 'page-controls',
  },
  template: `
    <div class="page-controls-container">
      <ng-content></ng-content>
    </div>
  `,
  styles: `
    @use '@angular/material' as mat;

    :host {
      grid-area: page-controls;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: sticky;
      bottom: 2rem;
      z-index: 2;
      pointer-events: none;
    }

    @container (width > 80rem) {
      :host {
        bottom: 2rem;
      }
    }

    .page-controls-container {
      pointer-events: all;
      padding: 0.5rem 2rem 0.5rem 2rem;
      width: fit-content;
      height: 3.5rem;
      border-radius: var(--mat-sys-corner-large);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--mat-sys-primary);
      color: var(--mat-sys-on-primary);
      box-shadow: var(--mat-sys-level5);
    }
  `,
})
export class PageControlsComponent {}
