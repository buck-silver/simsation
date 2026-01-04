import { NgModule } from '@angular/core';
import { ContentIntroComponent } from './content-intro.component';
import {
  ContentCreditsComponent,
  ContentCreditsItemComponent,
} from './content-credits.component';

const RESOURCES = [
  ContentCreditsComponent,
  ContentCreditsItemComponent,
  ContentIntroComponent,
];

@NgModule({
  imports: RESOURCES,
  exports: RESOURCES,
})
export class ContentModule {}
