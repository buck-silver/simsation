import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageDirective } from '../../core/page/components/page.directive';
import { PageModule } from '../../core/page/page.module';
import { NavTableComponent } from '../../core/navigation/components/nav-table.component';
import { CHALLENGES_ROUTES } from './challenges.routes';
import { ContentModule } from '../../core/content/content.module';

type ChallengeCard = {
  title: string;
  path: string;
  description: string;
  icon: string;
  category: 'Legacy' | 'Story' | 'Lifestyle' | 'Chaos';
  featured?: boolean;
}

@Component({
  selector: 'challenges-page',
  imports: [PageModule, ContentModule, NavTableComponent, RouterModule],
  hostDirectives: [PageDirective],
  template: `
    <header pageHeader>
      <h1 pageHeading>Gameplay Challenges</h1>
    </header>
    <article pageContent>
      <section intro>
        <p class="intro-text">
          Looking to spice up your Sims gameplay? Whether you're a seasoned
          Simmer or just dipping your toes into the chaos, gameplay challenges
          are the perfect way to shake things up, test your creativity, and
          maybe even discover a new favorite way to play.
        </p>
      </section>

      <!-- Featured Challenges -->
      <section class="featured-section">
        <h2 class="section-heading">🌟 Featured Challenges</h2>
        <div class="card-grid">
          @for (challenge of featuredChallenges(); track challenge.path) {
            <a [routerLink]="challenge.path" class="challenge-card featured">
              <div class="card-icon">{{ challenge.icon }}</div>
              <h3 class="card-title">{{ challenge.title }}</h3>
              <p class="card-description">{{ challenge.description }}</p>
              <div class="card-meta">
                <span class="category">{{ challenge.category }}</span>
              </div>
            </a>
          }
        </div>
      </section>

      <!-- Legacy & Dynasty Challenges -->
      <section class="category-section">
        <h2 class="section-heading">🏰 Legacy & Dynasty</h2>
        <p class="category-desc">
          Build a multi-generational empire. These challenges test your long-term
          planning and storytelling skills across 10+ generations.
        </p>
        <div class="card-grid">
          @for (challenge of legacyChallenges(); track challenge.path) {
            <a [routerLink]="challenge.path" class="challenge-card">
              <div class="card-icon">{{ challenge.icon }}</div>
              <h3 class="card-title">{{ challenge.title }}</h3>
              <p class="card-description">{{ challenge.description }}</p>
              <div class="card-meta">
                <span class="category">{{ challenge.category }}</span>
              </div>
            </a>
          }
        </div>
      </section>

      <!-- Story Challenges -->
      <section class="category-section">
        <h2 class="section-heading">📖 Story & Theme</h2>
        <p class="category-desc">
          Immersive storytelling experiences with unique themes and scenarios.
          Perfect for creating dramatic narratives.
        </p>
        <div class="card-grid">
          @for (challenge of storyChallenges(); track challenge.path) {
            <a [routerLink]="challenge.path" class="challenge-card">
              <div class="card-icon">{{ challenge.icon }}</div>
              <h3 class="card-title">{{ challenge.title }}</h3>
              <p class="card-description">{{ challenge.description }}</p>
              <div class="card-meta">
                <span class="category">{{ challenge.category }}</span>
              </div>
            </a>
          }
        </div>
      </section>

      <!-- Lifestyle Challenges -->
      <section class="category-section">
        <h2 class="section-heading">🏡 Lifestyle & Survival</h2>
        <p class="category-desc">
          Test your resourcefulness and adaptability. From rags to riches or
          completely off the grid.
        </p>
        <div class="card-grid">
          @for (challenge of lifestyleChallenges(); track challenge.path) {
            <a [routerLink]="challenge.path" class="challenge-card">
              <div class="card-icon">{{ challenge.icon }}</div>
              <h3 class="card-title">{{ challenge.title }}</h3>
              <p class="card-description">{{ challenge.description }}</p>
              <div class="card-meta">
                <span class="category">{{ challenge.category }}</span>
              </div>
            </a>
          }
        </div>
      </section>

      <!-- Chaos Challenges -->
      <section class="category-section">
        <h2 class="section-heading">🎲 Chaos & Mayhem</h2>
        <p class="category-desc">
          Embrace the madness! These challenges will push your limits and make
          you question your life choices.
        </p>
        <div class="card-grid">
          @for (challenge of chaosChallenges(); track challenge.path) {
            <a [routerLink]="challenge.path" class="challenge-card">
              <div class="card-icon">{{ challenge.icon }}</div>
              <h3 class="card-title">{{ challenge.title }}</h3>
              <p class="card-description">{{ challenge.description }}</p>
              <div class="card-meta">
                <span class="category">{{ challenge.category }}</span>
              </div>
            </a>
          }
        </div>
      </section>

      <!-- Browse All -->
      <section class="browse-all">
        <h2 class="section-heading">📋 Browse All Challenges</h2>
        <nav
          table
          [routes]="routes"
          [relativeTo]="'./'"
        ></nav>
      </section>
    </article>
  `,
  styles: `
    .intro-text {
      text-align: center;
      font-size: 1.25rem;
      line-height: 1.6;
      color: var(--mat-sys-on-surface-variant);
    }

    .section-heading {
      font-size: 1.75rem;
      font-weight: 600;
      margin: 0 0 1rem;
      color: var(--mat-sys-on-surface);
    }

    .featured-section {
      margin-bottom: 4rem;
    }

    .category-section {
      margin-bottom: 4rem;
    }

    .category-desc {
      color: var(--mat-sys-on-surface-variant);
      margin: 0 0 1.5rem;
      font-size: 1rem;
      line-height: 1.5;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .challenge-card {
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      border-radius: var(--mat-sys-corner-large);
      background-color: var(--mat-sys-surface-container-low);
      border: 1px solid var(--mat-sys-outline-variant);
      text-decoration: none;
      color: inherit;
      transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;

      &:hover {
        background-color: var(--mat-sys-surface-container);
        border-color: var(--mat-sys-primary);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      &.featured {
        background: linear-gradient(
          135deg,
          var(--mat-sys-primary-container) 0%,
          var(--mat-sys-surface-container-low) 100%
        );
        border: 2px solid var(--mat-sys-primary);
      }
    }

    .card-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      line-height: 1;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0 0 0.5rem;
      color: var(--mat-sys-on-surface);
    }

    .card-description {
      font-size: 0.875rem;
      line-height: 1.5;
      margin: 0 0 1rem;
      color: var(--mat-sys-on-surface-variant);
      flex-grow: 1;
    }

    .card-meta {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .category {
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: var(--mat-sys-corner-full);
      font-weight: 500;
      background-color: var(--mat-sys-tertiary-container);
      color: var(--mat-sys-on-tertiary-container);
    }

    .browse-all {
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 1px solid var(--mat-sys-outline-variant);
    }
  `,
})
export default class ChallengesPage {
  readonly routes = CHALLENGES_ROUTES;

  readonly challenges = signal<ChallengeCard[]>([
    {
      title: 'Legacy Challenge',
      path: 'legacy-challenge',
      description: 'Build a 10-generation dynasty from a single founder. The classic challenge that started it all.',
      icon: '👑',
      category: 'Legacy',
      featured: true,
    },
    {
      title: '100 Baby Challenge',
      path: 'one-hundred-baby-challenge',
      description: 'One matriarch. One hundred babies. No baby daddy repeats. Pure chaos.',
      icon: '👶',
      category: 'Chaos',
      featured: true,
    },
    {
      title: 'Not So Berry',
      path: 'not-so-berry-challenge',
      description: 'A colorful 10-generation legacy with unique career and trait requirements for each heir.',
      icon: '🌈',
      category: 'Legacy',
      featured: true,
    },
    {
      title: 'Rags to Riches Mega',
      path: 'rags-to-riches-mega-challenge',
      description: 'Start with nothing and build an empire. Every simoleon earned through blood, sweat, and tears.',
      icon: '💎',
      category: 'Lifestyle',
      featured: true,
    },
    {
      title: 'Not So Berry 2',
      path: 'not-so-berry-2-challenge',
      description: 'The sequel to the beloved colorful legacy challenge with all-new rules and requirements.',
      icon: '🌈',
      category: 'Legacy',
    },
    {
      title: 'Career Legacy',
      path: 'career-legacy-challenge',
      description: 'Each generation must master a different career path. Can your family conquer them all?',
      icon: '💼',
      category: 'Legacy',
    },
    {
      title: 'Bunker Legacy',
      path: 'bunker-legacy-challenge',
      description: 'Survive underground for generations. A claustrophobic twist on the classic legacy.',
      icon: '🔒',
      category: 'Legacy',
    },
    {
      title: 'Vampire Dynasty',
      path: 'vampire-dynasty-challenge',
      description: 'Build an immortal vampire empire across the ages. Embrace the dark side.',
      icon: '🧛',
      category: 'Legacy',
    },
    {
      title: 'A Different Kind of Jam',
      path: 'a-different-kind-of-jam',
      description: 'Live through a quirky 10 generation legacy where each generation is themed around a different fruit.',
      icon: '🍓',
      category: 'Legacy',
    },
    {
      title: 'Decades Challenge',
      path: 'decades-challenge',
      description: 'Play through history, one decade at a time, with era-appropriate restrictions.',
      icon: '📻',
      category: 'Story',
    },
    {
      title: 'Black Widow',
      path: 'black-widow-challenge',
      description: 'Seduce, marry, and... eliminate. How many spouses can you bury?',
      icon: '🕷️',
      category: 'Story',
      featured: true,
    },
    {
      title: 'Asylum Challenge',
      path: 'asylum-challenge',
      description: 'Eight Sims. One house. Total chaos. Can your Sim maintain sanity and achieve their goals?',
      icon: '🏥',
      category: 'Chaos',
    },
    {
      title: 'ISBI Challenge',
      path: 'isbi-challenge',
      description: "I'm Surrounded By Idiots. Control only one Sim while the rest wreak havoc.",
      icon: '🤪',
      category: 'Chaos',
    },
    {
      title: 'Off the Grid',
      path: 'off-the-grid-challenge',
      description: 'Disconnect from modern conveniences and live sustainably. No power, no problem... right?',
      icon: '🌲',
      category: 'Lifestyle',
      featured: true,
    },
    {
      title: 'Cowplant Farm',
      path: 'cowplant-farm-challenge',
      description: 'Build a thriving farm of deadly cowplants. What could possibly go wrong?',
      icon: '🐮',
      category: 'Lifestyle',
    },
    {
      title: 'Cult or Commune',
      path: 'cult-or-commune-challenge',
      description: 'Start a commune... or is it a cult? Build a self-sustaining community with interesting dynamics.',
      icon: '👨‍👩‍👧‍👦',
      category: 'Story',
    },
  ]);

  readonly featuredChallenges = signal<ChallengeCard[]>(
    this.challenges().filter((c) => c.featured)
  );

  readonly legacyChallenges = signal<ChallengeCard[]>(
    this.challenges().filter((c) => c.category === 'Legacy')
  );

  readonly storyChallenges = signal<ChallengeCard[]>(
    this.challenges().filter((c) => c.category === 'Story')
  );

  readonly lifestyleChallenges = signal<ChallengeCard[]>(
    this.challenges().filter((c) => c.category === 'Lifestyle')
  );

  readonly chaosChallenges = signal<ChallengeCard[]>(
    this.challenges().filter((c) => c.category === 'Chaos')
  );
}
