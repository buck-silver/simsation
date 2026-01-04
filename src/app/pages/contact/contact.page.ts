import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PageModule } from '../../core/page/page.module';
import { PageDirective } from '../../core/page/components/page.directive';

@Component({
  selector: 'contact-page',
  imports: [PageModule, MatButtonModule, MatIconModule],
  hostDirectives: [PageDirective],
  template: `
    <header pageHeader>
      <h1 pageHeading>Get in Touch</h1>
    </header>
    <article pageContent class="contact-page">
      <div class="contact-content">
        <p class="intro">
          Questions? Ideas? Just want to chat about The Sims?
        </p>
        
        <p class="main-message">
          I'd love to hear from you! The best way to reach me is through Reddit,
          where I'm most active in the Sims community.
        </p>

        <div class="cta-section">
          <a
            matButton="outlined"
            href="https://www.reddit.com/user/Simsation_Nation/"
            target="_blank"
            rel="noopener noreferrer"
            class="reddit-button"
            aria-label="Visit my Reddit profile"
          >
            <mat-icon>forum</mat-icon>
            <span>Message me on Reddit</span>
          </a>
          <p class="username">u/Simsation_Nation</p>
        </div>

        <p class="closing">
          Whether you've found a bug, have a feature request, or just want to
          share your latest Sims chaos — I'm all ears! 🎮
        </p>
      </div>
    </article>
  `,
  styles: `
    .contact-page {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 60vh;
    }

    .contact-content {
      max-width: 600px;
      text-align: center;
      padding: 2rem;
    }

    .intro {
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      color: var(--mat-sys-on-surface);
    }

    .main-message {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2.5rem;
      color: var(--mat-sys-on-surface-variant);
    }

    .cta-section {
      margin: 3rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .reddit-button {
      font-size: 1.1rem;
      padding: 0.75rem 2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: transform 0.2s ease;
    }

    .reddit-button mat-icon {
      font-size: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
    }

    .username {
      font-family: monospace;
      font-size: 1rem;
      opacity: 0.7;
      margin: 0;
    }

    .closing {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--mat-sys-on-surface-variant);
      font-style: italic;
      margin-top: 2.5rem;
    }

    @media (max-width: 600px) {
      .contact-content {
        padding: 1rem;
      }

      .intro {
        font-size: 1.1rem;
      }

      .main-message {
        font-size: 1rem;
      }

      .reddit-button {
        font-size: 1rem;
        padding: 0.5rem 1.5rem;
      }
    }
  `,
})
export default class ContactPage {}
