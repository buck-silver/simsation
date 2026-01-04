import { Component } from '@angular/core';

@Component({
  selector: 'shell-menu',
  template: `
    <ng-content select="shell-menu-header, header]"></ng-content>
    <ng-content select="shell-menu-nav, nav]"></ng-content>
    <ng-content select="shell-menu-footer footer]"></ng-content>
  `,
  host: {
    role: 'navigation',
  },
  styles: `
    :host {
      box-sizing: border-box;
      position: relative;
      width: 100%;
      min-height: 100%;
      display: grid;
      grid-template:
        [shell-menu-header] auto
        [shell-menu-body] 1fr
        [shell-menu-footer] auto
        / [shell-menu] 1fr;
    }
  `,
})
export class ShellMenuComponent {}
