import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'forgotten-hollow-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Forgotten Hollow (Vampires)">
      <ul>
        <li>From the Vampires Game Pack.</li>
        <li>Based on Victorian and old Transylvanian architecture.</li>
        <li>5 Lots Total.</li>
        <li>Home to the Vatore and Straud families.</li>
        <li>Rare plants like Plasmafruit and the Sixam Mosquito Trap can only be found here.</li>
      </ul>

      <my-world-showcase
        world="Forgotten Hollow"
        srcUnlabelled="content/worlds/8 - Forgotten Hollow - Vampires - Unlabelled.webp"
        srcLabelled="content/worlds/8 - Forgotten Hollow - Vampires - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/8 - Forgotten Hollow - Vampires - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/8 - Forgotten Hollow - Vampires - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class ForgottenHollowWorld {
  lots: LotData[] = [
    { type: 'Residential', name: 'Straud Mansion', size: '40x30', bulldozedPrice: 2500, family: 'Count Vladislaus Straud IV', sqft: 1200 },
    { type: 'Residential', name: 'Fledermaus Bend', size: '30x30', bulldozedPrice: 2000, family: 'n/a', sqft: 900 },
    { type: 'Residential', name: 'Wolfsbane Mansion', size: '30x30', bulldozedPrice: 2000, family: 'Vatore', sqft: 900 },
    { type: 'Residential', name: 'Garliclauter Place', size: '30x20', bulldozedPrice: 1500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Widowshild Townhome', size: '30x20', bulldozedPrice: 1500, family: 'n/a', sqft: 600 },
  ];
}
