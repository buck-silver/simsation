import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageModule } from '../../../core/page/page.module';
import { PageDirective } from '../../../core/page/components/page.directive';
import { MyActionButtonComponent } from '../../../common/my-action-button/my-action-button.component';
import { SimsLogoComponent } from '../../../common/sims/sims-logo.component';
import { SimsAchievementComponent } from './sims-achievement.component';
import type { SimsAchievement } from '../../../common/sims/types/sims-achievement';
import { randFromArray } from '../../../../lib/math/rand-from-array';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'sims4-achievements-page',
  imports: [
    CommonModule,
    PageModule,
    MyActionButtonComponent,
    SimsLogoComponent,
    SimsAchievementComponent,
  ],
  hostDirectives: [PageDirective],
  template: `
    <header pageHeader>
      <sims-logo [version]="'4'" />
      <h1 pageHeading>Achievements</h1>
    </header>
    <article pageContent class="achievements">
      <ul class="achievement-list">
        @for (achievement of achievements(); track achievement) {
          <li
            sims-achievement
            [data]="achievement"
            [class.showcase]="achievement.name === showcase()?.name"
          ></li>
        }
      </ul>
    </article>
    <page-controls>
      <my-action-button
        (onClick)="randAchievement()"
        aria-label="Select Random Achievement"
        tooltip="Select Random Achievement"
      />
    </page-controls>
  `,
  styles: `
    .achievement-list {
      margin: 0;
      padding: 0;
      border: 1px solid;
      border-color: var(--mat-sys-outline) var(--mat-sys-outline);
      border-radius: var(--mat-sys-corner-medium);

      li {
        border-bottom: 1px solid var(--mat-sys-outline);
      }
      li:last-child {
        border: none;
      }
    }
  `,
})
export class SimsAchievementsPage {
  private route = inject(ActivatedRoute);

  private data = toSignal(this.route.data);

  achievements = computed(
    () => (this.data()?.['achievements'] ?? []) as SimsAchievement[]
  );
  
  showcase = signal<SimsAchievement | null>(null);

  randAchievement() {
    const achievement = randFromArray(this.achievements());
    if (achievement) {
      this.showcase.set(achievement);
      this.scrollTo(achievement);
    }
  }

  scrollTo(achievement: SimsAchievement) {
    document.getElementById(`a-${achievement.name}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'start',
    });
  }
}
