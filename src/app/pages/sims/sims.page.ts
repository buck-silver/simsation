import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageDirective } from '../../core/page/components/page.directive';
import { PageModule } from '../../core/page/page.module';
import { ContentModule } from '../../core/content/content.module';
import { MyCardComponent } from '../../common/my-card/my-card.component';

@Component({
  selector: 'sims-page',
  imports: [PageModule, ContentModule, RouterModule, MyCardComponent],
  hostDirectives: [PageDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header pageHeader>
      <h1 pageHeading>Sims</h1>
    </header>
    <article pageContent>
      <section intro>
        Explore Sims achievements, apps, challenges, shells, and worlds. Choose
        a section below to get started!
      </section>
      <section class="grid">
        <a
          myCard
          routerLink="apps"
          [icon]="'📱'"
          [title]="'Apps'"
          [description]="'Discover Sims-related tools and utilities.'"
          [category]="'Tools'"
        ></a>
        <a
          myCard
          [routerLink]="'achievements'"
          [icon]="'🏆'"
          [title]="'Achievements'"
          [description]="'Track and celebrate your Sims milestones.'"
          [category]="'Milestones'"
        ></a>
        <a
          myCard
          routerLink="challenges"
          [icon]="'🎯'"
          [title]="'Challenges'"
          [description]="'Find and join fun Sims challenges.'"
          [category]="'Fun'"
        ></a>
        <a
          myCard
          routerLink="shells"
          [icon]="'🏠'"
          [title]="'Shells'"
          [description]="'Browse creative Sims shell builds.'"
          [category]="'Creative'"
        ></a>
        <a
          myCard
          routerLink="worlds"
          [icon]="'🌍'"
          [title]="'Worlds'"
          [description]="'Explore Sims worlds and neighborhoods.'"
          [category]="'Locations'"
        ></a>
      </section>
    </article>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }
  `,
})
export default class SimsPage {}
