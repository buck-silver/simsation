import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PageModule } from '../../../core/page/page.module';
import { PageDirective } from '../../../core/page/components/page.directive';
import { SimsLogoDirective } from '../../../common/sims/sims-logo.component';
import { ContentModule } from '../../../core/content/content.module';

@Component({
  selector: 'sims-room-pack-randomizer-landing-page',
  imports: [
    PageModule,
    ContentModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    SimsLogoDirective,
  ],
  hostDirectives: [PageDirective],
  template: `
    <header pageHeader>
      <h1 pageHeading>Every Room is a Different Pack</h1>
    </header>
    <article pageContent>
      <!-- Intro Section -->
      <section intro>
        <p class="intro-p">
          Challenge yourself to build a home where each room uses items from a
          different expansion pack. This app randomly assigns a pack to each
          room in your house, pushing you to think creatively and use content
          you might have forgotten about.
        </p>
      </section>

      <!-- Game Selection Cards -->
      <section class="game-grid">
        <mat-card
          class="game-card"
          appearance="outlined"
          [routerLink]="'./sims-4'"
        >
          <mat-card-header>
            <img mat-card-image simsLogo [version]="'4'" class="game-logo" />
          </mat-card-header>
          <mat-card-content>
            <p class="game-year">2014</p>
            <p class="game-description">
              The latest generation with tons of packs to mix and match.
            </p>
          </mat-card-content>
          <mat-card-actions align="end">
            <a mat-flat-button color="accent" [routerLink]="'./sims-4'">
              Choose Game
            </a>
          </mat-card-actions>
        </mat-card>

        <mat-card
          class="game-card"
          appearance="outlined"
          [routerLink]="'./sims-3'"
        >
          <mat-card-header>
            <img mat-card-image simsLogo [version]="'3'" class="game-logo" />
          </mat-card-header>
          <mat-card-content>
            <p class="game-year">2009</p>
            <p class="game-description">
              Open-world gameplay with an impressive expansion collection.
            </p>
          </mat-card-content>
          <mat-card-actions align="end">
            <a mat-flat-button color="accent" [routerLink]="'./sims-3'">
              Choose Game
            </a>
          </mat-card-actions>
        </mat-card>

        <mat-card
          class="game-card"
          appearance="outlined"
          [routerLink]="'./sims-2'"
        >
          <mat-card-header>
            <img mat-card-image simsLogo [version]="'2'" class="game-logo" />
          </mat-card-header>
          <mat-card-content>
            <p class="game-year">2004</p>
            <p class="game-description">
              A classic with memorable packs and beloved gameplay.
            </p>
          </mat-card-content>
          <mat-card-actions align="end">
            <a mat-flat-button color="accent" [routerLink]="'./sims-2'">
              Choose Game
            </a>
          </mat-card-actions>
        </mat-card>

        <mat-card
          class="game-card"
          appearance="outlined"
          [routerLink]="'./sims-1'"
        >
          <mat-card-header>
            <img mat-card-image simsLogo [version]="'1'" class="game-logo" />
          </mat-card-header>
          <mat-card-content>
            <p class="game-year">2000</p>
            <p class="game-description">
              Where it all began — nostalgic charm with iconic expansions.
            </p>
          </mat-card-content>
          <mat-card-actions align="end">
            <a mat-flat-button color="accent" [routerLink]="'./sims-1'">
              Choose Game
            </a>
          </mat-card-actions>
        </mat-card>
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

    .game-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .game-card {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
      }

      mat-card-header {
        height: 115px;
      }

      .game-logo {
        margin: auto;
        max-width: 200px;
        height: 84px;
        object-fit: contain;
      }

      mat-card-content {
        flex-grow: 1;
        padding: 1rem 1.5rem;
        text-align: center;

        .game-year {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--mat-sys-primary);
          margin: 0 0 0.5rem;
        }

        .game-description {
          margin: 0;
          line-height: 1.5;
          color: var(--mat-sys-on-surface-variant);
        }
      }

      mat-card-actions {
        a {
          width: 100%;
        }
      }
    }

    @media (max-width: 768px) {
      .game-grid {
        grid-template-columns: 1fr;
      }

      .hero-text {
        font-size: 1rem;
      }

      .game-logo {
        max-width: 160px;
        height: 70px;
      }
    }
  `,
})
export class SimsRoomPackRandomizerLandingPage {}
