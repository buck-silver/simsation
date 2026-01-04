import {
  afterNextRender,
  DestroyRef,
  effect,
  inject,
  Injectable,
  Injector,
  signal,
  type WritableSignal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEventPattern } from 'rxjs';

const themes = ['theme.dark', 'theme.light'] as const;

type Theme = (typeof themes)[number];

@Injectable({
  providedIn: 'root',
})
export class ShellThemeService {
  private readonly injector = inject(Injector);
  private readonly destroyRef = inject(DestroyRef);
  private defaultTheme: Theme = 'theme.dark';
  private useSystemTheme: boolean = true;
  private systemTheme: WritableSignal<Theme> = signal(this.defaultTheme);
  currentTheme: WritableSignal<Theme> = signal(this.defaultTheme);

  constructor() {
    afterNextRender(() => {
      this.initThemes();
      this.watchSystemTheme();
      this.watchCurrentTheme();
    });
  }

  private initThemes() {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    this.systemTheme.set(query.matches ? 'theme.dark' : 'theme.light');
    this.currentTheme.set(this.loadTheme());
  }

  private watchSystemTheme() {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    fromEventPattern(
      (handler) => query.addEventListener('change', handler),
      (handler) => query.removeEventListener('change', handler),
      (e) => this.onSystemThemeChange(e)
    )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  private watchCurrentTheme() {
    effect(() => this.onCurrentThemeChange(), { injector: this.injector });
  }

  private onSystemThemeChange(e: MediaQueryListEvent) {
    this.systemTheme.set(e.matches ? 'theme.dark' : 'theme.light');
    if (this.useSystemTheme) this.currentTheme.set(this.systemTheme());
  }

  private onCurrentThemeChange() {
    const style = document.getElementById('theme');

    if (!style) {
      console.error(
        `Could not set theme. Document does not have an element with id="theme"`
      );
      return;
    }

    const theme = this.currentTheme();

    if (style.getAttribute('href') !== `${theme}.css`) {
      style.setAttribute('href', `${theme}.css`);
      this.saveTheme(theme);
      console.log(`Set to ${theme}`);
    }
  }

  private loadTheme(): Theme {
    const theme = localStorage.getItem('theme');
    return (theme as Theme) ?? this.systemTheme();
  }

  private saveTheme(theme: Theme) {
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    this.useSystemTheme = false;
    const theme =
      this.currentTheme() === 'theme.dark' ? 'theme.light' : 'theme.dark';
    this.currentTheme.set(theme);
  }
}
