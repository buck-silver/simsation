import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageDirective } from '../../core/page/components/page.directive';
import { PageModule } from '../../core/page/page.module';
import { ContentModule } from '../../core/content/content.module';

@Component({
  selector: 'sims-page',
  imports: [
    PageModule,
    ContentModule,
    RouterModule
  ],
  hostDirectives: [PageDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header pageHeader>
      <h1 pageHeading>Sims</h1>
    </header>
    <article pageContent>
      <section intro>
        This is the sims page
      </section>
    </article>
  `,
  styles: ``,
})
export default class SimsPage {
  
}