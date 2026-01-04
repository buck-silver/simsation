import { Component } from '@angular/core';
import { PageModule } from '../../core/page/page.module';
import { PageDirective } from '../../core/page/components/page.directive';
import { WORLDS_ROUTES } from './worlds.routes';
import { NavTableComponent } from "../../../app/core/navigation/components/nav-table.component";

@Component({
  selector: 'worlds-page',
  imports: [PageModule, NavTableComponent],
  hostDirectives: [PageDirective],
  template: `
    <header pageHeader>
      <h1 pageHeading>Worlds</h1>
    </header>
    <article pageContent>
      <p>
        Whether you're planning your next build, launching a new save file, or
        just curious about the layout of your favorite Sims worlds, this is your
        go-to hub for world maps.
      </p>

      <ul>
        <li>Plan your builds with layout in mind.</li>
        <li>Choose the perfect world for your story or challenge.</li>
        <li>Compare lot sizes and locations.</li>
        <li>Find the best worlds for specific gameplay styles.</li>
        <li>Get inspired by the terrain and vibe of each world.</li>
      </ul>

      <p>
        Whether you're a builder, storyteller, or chaos-loving Simmer, these
        maps help you navigate your Sims universe with style. Ready to explore?
      </p>

      <p>
        Check out my fully labelled lot maps with the Original Lots or Fully
        Bulldozed! I also have unlabelled versions of these maps that you can
        use too!
      </p>

      <nav
        table
        [heading]="'All Worlds'"
        [routes]="routes"
        [relativeTo]="'./'"
      ></nav>
    </article>
  `,
})
export default class WorldsPage {
  readonly routes = WORLDS_ROUTES;
}
