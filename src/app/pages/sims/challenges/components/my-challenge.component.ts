import { Component, input } from '@angular/core';
import { PageModule } from '../../../../core/page/page.module';
import { PageDirective } from '../../../../core/page/components/page.directive';
import { NavTableComponent } from '../../../../core/navigation/components/nav-table.component';
import { CHALLENGES_ROUTES } from '../challenges.routes';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'my-challenge',
  imports: [PageModule, MatButtonModule, NavTableComponent],
  hostDirectives: [PageDirective],
  template: `
    <header pageHeader>
      <h1 pageHeading>{{ heading() }}</h1>
    </header>

    <article pageContent>
      <ng-content />

      @if (moreAt()) {
        <a
          matButton="filled"
          style="display: flex; width: fit-content; margin: 1rem auto 0 auto;"
          [href]="moreAt()"
          >See Full Challenge Rules Here</a
        >
      }
    </article>

    <aside pageAside>
      <nav
        table
        [heading]="'All Challenges'"
        [relativeTo]="'../'"
        [routes]="routes"
      ></nav>
    </aside>
  `,
})
export class MyChallengeComponent {
  readonly heading = input.required<string>();
  readonly moreAt = input<string>('');
  readonly routes = CHALLENGES_ROUTES;
}
