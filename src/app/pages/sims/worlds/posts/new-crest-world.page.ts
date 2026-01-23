import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'new-crest-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Newcrest (Base Game)">
      <ul>
        <li>Base Game World.</li>
        <li>Based on various generic suburban locations in the US.</li>
        <li>15 Lots Total.</li>
        <li>This is a completely blank world, and does not have any families living in it.</li>
      </ul>

      <my-world-showcase
        world="Newcrest"
        srcUnlabelled="content/worlds/3 - Newcrest - Base Game - Unlabelled.webp"
        srcLabelled="content/worlds/3 - Newcrest - Base Game - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/3 - Newcrest - Base Game - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/3 - Newcrest - Base Game - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class NewCrestWorld {
  lots: LotData[] = [
    { type: 'Residential', name: 'Avarice Acres', size: '40x30', bulldozedPrice: 3000, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Midtown Meadows', size: '40x30', bulldozedPrice: 3000, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: "Optimist's Outlook", size: '40x30', bulldozedPrice: 3000, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Rippling Flats', size: '40x30', bulldozedPrice: 3000, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Tranquil Crescent', size: '30x30', bulldozedPrice: 2500, family: 'n/a', sqft: 900 },
    { type: 'Residential', name: 'Sandy Run', size: '40x20', bulldozedPrice: 2500, family: 'n/a', sqft: 800 },
    { type: 'Residential', name: 'Asphalt Abodes', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Beech Byway', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Civic Cliffs', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Cookout Lookout', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Fern Park', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Hillside Highlands', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Twin Oracle Point', size: '50x40', bulldozedPrice: 8500, family: 'n/a', sqft: 2000 },
    { type: 'Residential', name: 'Comfy Cubby', size: '20x15', bulldozedPrice: 1500, family: 'n/a', sqft: 300 },
    { type: 'Residential', name: 'Oak Alcove', size: '20x15', bulldozedPrice: 1500, family: 'n/a', sqft: 300 },
  ];
}
