import { NgModule } from '@angular/core';
import { PageModule } from '../../../../core/page/page.module';
import { MyWorldComponent } from './my-world.component';
import { MyLotsTableComponent } from './my-lots-table.component';
import { MyWorldShowcaseComponent } from './my-world-showcase.component';

const resources = [
  PageModule,
  MyWorldComponent,
  MyLotsTableComponent,
  MyWorldShowcaseComponent,
];

@NgModule({
  imports: resources,
  exports: resources,
})
export class MyWorldModule {}
