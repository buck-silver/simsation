import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PageDirective } from '../../../core/page/components/page.directive';
import { PageModule } from '../../../core/page/page.module';
import { ContentModule } from '../../../core/content/content.module';

type AppCard = {
  title: string;
  description: string;
  emoji?: string;
  route: string;
  tag: string;
}

@Component({
  selector: 'apps-page',
  imports: [
    PageModule,
    ContentModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  hostDirectives: [PageDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header pageHeader>
      <h1 pageHeading>Apps</h1>
    </header>
    <article pageContent>
      <!-- Hero Section -->
      <section intro>
        <p class="intro-p">
          Break out of your building rut and spark new ideas with randomized
          challenges, colorful chaos, and pack-inspired creativity. These apps
          are your secret weapon against boring gameplay.
        </p>
      </section>

      <!-- App Cards Grid -->
      <section class="apps-grid">
        @for (app of apps; track app.route) {
          <mat-card
            class="app-card"
            [appearance]="'outlined'"
            [routerLink]="app.route"
          >
            <mat-card-header>
              <span mat-card-avatar class="app-emoji">
                {{ app.emoji ?? '⭐' }}
              </span>
              <mat-card-title>{{ app.title }}</mat-card-title>
              <mat-card-subtitle>
                <span class="app-tag">{{ app.tag }}</span>
              </mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>{{ app.description }}</p>
            </mat-card-content>
            <mat-card-actions align="end">
              <a matButton="tonal" [routerLink]="app.route">
                Try It Now
                <mat-icon iconPositionEnd>arrow_forward</mat-icon>
              </a>
            </mat-card-actions>
          </mat-card>
        }
      </section>

      <!-- Why Use These Apps -->
      <section class="why-section">
        <h2>Why Use These Apps?</h2>
        <div class="reasons-grid">
          <div class="reason">
            <mat-icon class="reason-icon">psychology</mat-icon>
            <h3>Beat Builder's Block</h3>
            <p>
              Stop staring at an empty lot. Let randomization spark your next
              masterpiece.
            </p>
          </div>
          <div class="reason">
            <mat-icon class="reason-icon">emoji_events</mat-icon>
            <h3>Fresh Challenges</h3>
            <p>
              Whether you're a completionist or casual player, discover new
              goals to chase.
            </p>
          </div>
          <div class="reason">
            <mat-icon class="reason-icon">palette</mat-icon>
            <h3>Creative Constraints</h3>
            <p>
              Limitations breed creativity. See what happens when you work with
              unexpected rules.
            </p>
          </div>
          <div class="reason">
            <mat-icon class="reason-icon">explore</mat-icon>
            <h3>Rediscover Your Packs</h3>
            <p>
              Dust off forgotten items and find new ways to use content you
              already own.
            </p>
          </div>
          <div class="reason">
            <mat-icon class="reason-icon">celebration</mat-icon>
            <h3>Just Have Fun</h3>
            <p>
              Sometimes the best gameplay is unpredictable. Embrace the chaos
              and enjoy the ride.
            </p>
          </div>
          <div class="reason">
            <mat-icon class="reason-icon">auto_awesome</mat-icon>
            <h3>Break Your Routine</h3>
            <p>
              Step outside your comfort zone and try something completely
              different from your usual style.
            </p>
          </div>
        </div>
      </section>
    </article>
  `,
  styles: `
    .intro-p {
      text-align: center;
      font-size: 1.25rem;
      line-height: 1.6;
      margin: 0;
    }

    .apps-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 4rem;
    }

    .app-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      cursor: pointer;
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
      }
    }

    .app-emoji {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      width: 3rem;
      height: 3rem;
    }

    .app-tag {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: var(--mat-sys-tertiary-container);
      color: var(--mat-sys-on-tertiary-container);
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    mat-card-actions {
      a {
        width: 100%;
      }
    }

    .why-section {
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 1px solid var(--mat-sys-outline-variant);

      h2 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 2rem;
        color: var(--mat-sys-on-surface);
      }
    }

    .reasons-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 2rem;
    }

    .reason {
      text-align: center;
      padding: 1.5rem;
      background: var(--mat-sys-surface-container-low);
      border-radius: 8px;

      .reason-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        margin: 0 auto 1rem;
        color: var(--mat-sys-tertiary);
      }

      h3 {
        font-size: 1.125rem;
        margin: 0 0 0.5rem;
        color: var(--mat-sys-on-surface);
      }

      p {
        margin: 0;
        font-size: 0.9rem;
        line-height: 1.5;
        color: var(--mat-sys-on-surface-variant);
      }
    }

    @media (max-width: 768px) {
      .apps-grid {
        grid-template-columns: 1fr;
      }

      .hero-text {
        font-size: 1rem;
      }

      .reasons-grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export default class AppsPage {
  readonly apps: AppCard[] = [
    {
      title: 'Random Build Generator',
      description:
        'Serves up randomized suggestions for lot type, style, budget, and more. Perfect for sparking ideas and pushing your creative limits.',
      emoji: '🏠',
      route: './sims/build-randomizer',
      tag: 'Building',
    },
    {
      title: 'Random Sims 4 Achievement',
      description:
        'Randomly selects achievements for you to chase — from quirky to challenging. Keeps your gameplay fresh and focused.',
      emoji: '🏆',
      route: './sims/achievements',
      tag: 'Gameplay',
    },
    {
      title: 'Every Room Different Color',
      description:
        'Design a home where each room follows a completely different color scheme. A visual adventure with wild, wonderful colors.',
      emoji: '🎨',
      route: './sims/room-color-randomizer',
      tag: 'Building',
    },
    {
      title: 'Every Room Different Pack',
      description:
        'Build a house where each room uses a different pack. Rediscover forgotten items and get creative with unexpected combinations.',
      emoji: '🧩',
      route: './sims/room-pack-randomizer',
      tag: 'Building',
    },
  ];
}
