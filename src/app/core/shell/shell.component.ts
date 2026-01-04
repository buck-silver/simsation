import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ShellLayoutService } from './services/shell-layout.service';

@Component({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSidenavModule,
  ],
  selector: 'shell',
  template: `
    @if (loading()) {
      <mat-progress-bar mode="indeterminate" id="shell-loading" />
    }

    <ng-template #menuToggle>
      <button
        matRipple
        (click)="menu.toggle()"
        id="shell-menu-toggle"
        aria-label="toggle main navigation"
      >
        <mat-icon> {{ menu.opened ? 'menu_open' : 'menu' }} </mat-icon>
      </button>
    </ng-template>

    <mat-sidenav-container id="shell-container">
      <mat-sidenav
        #menu
        fixedInViewport
        [mode]="layout.mode()"
        [(opened)]="layout.menuOpened"
        id="shell-menu"
        role="navigation"
        aria-label="main"
      >
        @if (layout.mode() === 'over') {
          <ng-container *ngTemplateOutlet="menuToggle" />
        }
        <ng-content select="shell-menu" />
      </mat-sidenav> 
      <mat-sidenav-content id="shell-main">
        <ng-container *ngTemplateOutlet="menuToggle" />
        <ng-content />
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: `
    @use 'sass:math';
    @use '@angular/material' as mat;

    mat-sidenav {
      border: none;
    }

    $btn-height: 3rem;

    #shell-menu-toggle {
      box-sizing: border-box;
      box-shadow: var(--mat-sys-level5);
      background-color: var(--mat-sys-primary-container);
      color: var(--mat-sys-on-primary-container);
      flex-shrink: 0;
      overflow: hidden;
      height: $btn-height;
      width: $btn-height;
      margin: 0;
      padding: 0;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      cursor: pointer;
    }

    #shell-container {
      box-sizing: border-box;
      position: relative;
      height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 0;
    }

    #shell-main {
      box-sizing: border-box;
      container-name: shell-main;
      container-type: size;
      position: relative;
      min-height: 100%;
      background-color: var(--mat-sys-surface-container-lowest);

      #shell-menu-toggle {
        position: sticky;
        top: 0;
        left: 0;
        border-radius: 0 0 var(--mat-sys-corner-large) 0 !important;
      }
    }

    #shell-menu {
      #shell-menu-toggle {
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0 0 0 var(--mat-sys-corner-large) !important;
      }
    }

    #shell-loading {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;
      height: 3px;
    }
  `,
})
export class ShellComponent {
  private readonly router = inject(Router);
  readonly layout = inject(ShellLayoutService);
  readonly loading = signal(false);

  constructor() {
    effect(() => {
      const subscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading.set(true);
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.loading.set(false);
        }
      });

      return () => subscription.unsubscribe();
    });
  }
}
