import { NgModule } from '@angular/core';
import { PageModule } from '../../../../core/page/page.module';
import { ContentModule } from '../../../../core/content/content.module';
import { MyChallengeComponent } from './my-challenge.component';

const resources = [
  PageModule,
  ContentModule,
  MyChallengeComponent,
];

@NgModule({
  imports: resources,
  exports: resources,
})
export class MyChallengeModule {}
