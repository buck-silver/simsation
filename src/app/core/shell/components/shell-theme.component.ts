import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShellThemeService } from '../services/shell-theme.service';

@Component({
  imports: [MatButtonModule, MatIconModule],
  selector: 'shell-theme',
  template: `
    <button
      mat-icon-button
      (click)="theme.toggleTheme()"
      [attr.aria-label]="
        theme.currentTheme() === 'theme.dark'
          ? 'toggle light theme'
          : 'toggle dark theme'
      "
    >
      <mat-icon>
        {{ theme.currentTheme() === 'theme.dark' ? 'light_mode' : 'dark_mode' }}
      </mat-icon>
    </button>
  `,
  styles: `
    :host {
      height: 3rem;
      width: 100%;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
})
export class ShellThemeComponent {
  theme = inject(ShellThemeService);
}
