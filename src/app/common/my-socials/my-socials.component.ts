import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ShellThemeComponent } from '../../core/shell/components/shell-theme.component';
import { RouterLink } from "@angular/router";

@Component({
  imports: [MatButtonModule, ShellThemeComponent, RouterLink],
  selector: 'footer[my-socials]',
  template: `
    <address aria-label="contact details">
      <!-- Home Button -->
      <a
        matButton="filled"
        routerLink="/"
        aria-label="homepage link"
        class="home-callback"
      >
        Made with 💖 by Simsation
      </a>

      <!-- Build Gallery -->
      <p>Sims Gallery ID: Simsation_Builds</p>
    </address>

    <small class="copyright"> &copy;&nbsp;Simsation.ca</small>

    <shell-theme />
  `,
  styles: `
    :host {
      box-sizing: border-box;
      display: block;
      padding: 1rem 1rem 0 1rem;
      margin: 0;
      text-align: center;
      background-color: var(--mat-sys-surface-container-low);
    }

    address {
      width: fit-content;
      padding: 0;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;
    }

    .copyright {
      padding: 0;
      margin: 0;
      text-align: center;
      opacity: 0.5;
    }
  `,
})
export class MySocialsComponent {}
