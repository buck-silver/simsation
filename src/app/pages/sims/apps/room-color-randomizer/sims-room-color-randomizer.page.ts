import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PageModule } from '../../../../core/page/page.module';
import { PageDirective } from '../../../../core/page/components/page.directive';
import { SimsLogoComponent } from '../../../../common/sims/sims-logo.component';
import { MyActionButtonComponent } from '../../../../common/my-action-button/my-action-button.component';
import { SimsRoomColorRandomizerService } from './sims-room-color-randomizer.service';
import { FloorPlanComponent } from './floor-plan.component';

@Component({
  selector: 'sims-room-color-randomizer-page',
  imports: [
    PageModule,
    FloorPlanComponent,
    MatButtonModule,
    MatIconModule,
    MyActionButtonComponent,
    SimsLogoComponent,
  ],
  hostDirectives: [PageDirective],
  template: `
    <header pageHeader>
      <sims-logo />
      <h1 pageHeading>Every Room is a Different Color</h1>
    </header>
    <article pageContent>
      <floor-plan></floor-plan>
    </article>
    <page-controls>
      <my-action-button
        (onClick)="service.randAll()"
        aria-label="Randomize room colors"
        tooltip="Randomize"
      />
    </page-controls>
  `,
})
export class SimsRoomColorRandomizerPage {
  service = inject(SimsRoomColorRandomizerService);
}
