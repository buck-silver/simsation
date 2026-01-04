import {
  DestroyRef,
  Injectable,
  afterNextRender,
  inject,
  signal,
  type WritableSignal,
} from '@angular/core';
import { filter, fromEventPattern } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/operators';
import { Event, NavigationStart, Router } from '@angular/router';
import type { MatDrawerMode } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class ShellLayoutService {
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  menuOpened: WritableSignal<boolean> = signal<boolean>(false);
  mode: WritableSignal<MatDrawerMode> = signal<MatDrawerMode>('over');

  constructor() {
    afterNextRender(() => {
      this.init();
      this.watchLayoutWidth();
      this.watchRouterEvents();
    });
  }

  private init() {
    const query = window.matchMedia('(max-width: 1279.9px)');
    this.mode.set(query.matches ? 'over' : 'side');
    this.menuOpened.set(query.matches ? false : true);
  }

  private watchLayoutWidth() {
    const query = window.matchMedia('(max-width: 1279.9px)');
    fromEventPattern(
      (handler) => query.addEventListener('change', handler),
      (handler) => query.removeEventListener('change', handler),
      (e) => this.mode.set(e.matches ? 'over' : 'side')
    )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  private watchRouterEvents() {
    this.router.events
      .pipe(
        filter(
          (e: Event): e is NavigationStart => e instanceof NavigationStart
        ),
        tap((e) => {
          if (this.mode() === 'over') {
            this.menuOpened.set(false);
          }
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
