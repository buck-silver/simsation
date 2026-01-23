import { Component, input } from '@angular/core';
import { CarouselComponent } from '../../../../core/carousel/carousel.component';
import { AssetPipe } from '../../../../core/pipes/asset.pipe';

@Component({
  selector: 'my-world-showcase',
  imports: [CarouselComponent, AssetPipe],
  template: `
    <p>
      I have labelled the world map with the Lot Name, Size & Bulldozed Price if
      it can be purchased or rented.
    </p>

    <carousel>
      <img
        [src]="srcUnlabelled() | asset"
        [alt]="'Unlabelled map of ' + world()"
        crossorigin="anonymous"
      />
      <img
        [src]="srcLabelled() | asset"
        [alt]="'Labelled map of ' + world()"
        crossorigin="anonymous"
      />
      <img
        [src]="srcUnlabelledBulldozed() | asset"
        [alt]="'Unlabelled map of ' + world() + ' showing bulldozed lots'"
        crossorigin="anonymous"
      />
      <img
        [src]="srcLabelledBulldozed() | asset"
        [alt]="'Labelled map of ' + world() + ' showing bulldozed lots'"
        crossorigin="anonymous"
      />
    </carousel>
  `,
})
export class MyWorldShowcaseComponent {
  world = input.required<string>();
  srcUnlabelled = input.required<string>();
  srcLabelled = input.required<string>();
  srcLabelledBulldozed = input.required<string>();
  srcUnlabelledBulldozed = input.required<string>();
}
