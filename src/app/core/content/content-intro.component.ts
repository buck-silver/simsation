import { Component } from '@angular/core';

@Component({
  selector: 'content-intro, section[intro]',
  template: `<ng-content></ng-content>`,
  styles: `
    :host {
      display: block;
      box-sizing: border-box;
      padding: 1rem;
      margin: 0 0 3rem 0;
      width: 100%;
      color: var(--mat-sys-on-primary-container);
      background: var(--mat-sys-primary-container);
      border: 2px solid var(--mat-sys-primary);
      border-radius: var(--mat-sys-corner-medium);
    }
  `,
})
export class ContentIntroComponent {}
