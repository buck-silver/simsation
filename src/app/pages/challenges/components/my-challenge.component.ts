import { Component, input } from '@angular/core';
import { PageModule } from '../../../core/page/page.module';
import { PageDirective } from '../../../core/page/components/page.directive';
import { NavTableComponent } from '../../../core/navigation/components/nav-table.component';
import { CHALLENGES_ROUTES } from '../challenges.routes';

@Component({
  selector: 'my-challenge',
  imports: [PageModule, NavTableComponent],
  hostDirectives: [PageDirective],
  template: `
    <header pageHeader>
      <h1 pageHeading>{{ heading() }}</h1>
    </header>

    <article pageContent>
      <ng-content />
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
  readonly routes = CHALLENGES_ROUTES;
}
