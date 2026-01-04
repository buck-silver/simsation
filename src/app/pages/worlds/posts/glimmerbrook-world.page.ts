import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'glimmerbrook-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Glimmerbrook (Realm of Magic)">
      <ul>
        <li>From the Realm of Magic Game Pack.</li>
        <li>Based on a generic secluded woodland forest area.</li>
        <li>5 Lots Total.</li>
        <li>Home to the Charm family, and the Amicable Acolytes household.</li>
        <li>Access to the Secret World called The Magic Realm.</li>
      </ul>

      <my-world-showcase
        world="Glimmerbrook"
        srcUnlabelled="content/worlds/14 - Glimmerbrook - Realm of Magic - Unlabelled.webp"
        srcLabelled="content/worlds/14 - Glimmerbrook - Realm of Magic - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/14 - Glimmerbrook - Realm of Magic - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/14 - Glimmerbrook - Realm of Magic - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class GlimmerbrookWorld {
  lots: LotData[] = [
    { type: 'Residential', name: 'Brooks Bridge Borough', size: '30x20', bulldozedPrice: 1750, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Glimmerbrook Watch', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Rock Ridge Canyon', size: '40x30', bulldozedPrice: 4000, family: 'Charm Family', sqft: 1200 },
    { type: 'Residential', name: 'Creek Side Corner', size: '30x20', bulldozedPrice: 2500, family: 'Amicable Acolytes', sqft: 600 },
    { type: 'Bar', name: 'Elixirs and Brews', size: '30x20', bulldozedPrice: 3000, family: 'n/a', sqft: 600 },
  ];
}
