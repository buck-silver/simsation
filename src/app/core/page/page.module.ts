import { NgModule } from '@angular/core';
import { PageAdComponent } from './components/page-ad.component';
import { PageAsideComponent } from './components/page-aside.component';
import { PageContentComponent } from './components/page-content.component';
import { PageControlsComponent } from './components/page-controls.component';
import { PageFooterComponent } from './components/page-footer.component';
import { PageHeaderComponent } from './components/page-header.component';
// import { PageHeroComponent } from './components/page-hero.component';
import { PageHeadingDirective } from './components/page-heading.directive';
import { PageDirective } from './components/page.directive';

const RESOURCES = [
  PageAdComponent,
  PageAsideComponent,
  PageContentComponent,
  PageControlsComponent,
  PageFooterComponent,
  PageHeaderComponent,
  // PageHeroComponent,
  PageHeadingDirective,
  PageDirective,
];

@NgModule({
  imports: RESOURCES,
  exports: RESOURCES,
})
export class PageModule {}
