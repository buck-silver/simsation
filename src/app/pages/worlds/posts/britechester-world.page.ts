import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'britechester-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Britechester (Discover University)">
      <ul>
        <li>From the Discover University Expansion Pack.</li>
        <li>Based on England.</li>
        <li>13 Lots Total.</li>
        <li>Home to the Fletcher, Pleasant, and Elderberry families, and the Best of Friends household.</li>
        <li>Home to 2 University Campuses.</li>
      </ul>

      <my-world-showcase
        world="Britechester"
        srcUnlabelled="content/worlds/15 - Britechester - Discover University - Unlabelled.webp"
        srcLabelled="content/worlds/15 - Britechester - Discover University - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/15 - Britechester - Discover University - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/15 - Britechester - Discover University - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class BritechesterWorld {
  lots: LotData[] = [
    { type: 'University Housing', name: 'Briny Tower', size: '30x20', bulldozedPrice: 2500, family: 'Fletcher', sqft: 600 },
    { type: 'University Housing', name: 'Drake Hall', size: '30x20', bulldozedPrice: 2500, family: 'n/a', sqft: 600 },
    { type: 'University Housing', name: 'Tidal Tower', size: '30x20', bulldozedPrice: 2500, family: 'n/a', sqft: 600 },
    { type: 'University Housing', name: 'Wyvern Hall', size: '30x20', bulldozedPrice: 2500, family: 'Best of Friends', sqft: 600 },
    { type: 'Ubrite Commons', name: "Darby's Den", size: '30x20', bulldozedPrice: 1500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Darkwing House', size: '30x20', bulldozedPrice: 1500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Maritime Manor', size: '30x20', bulldozedPrice: 1500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Honeydew Fields', size: '20x15', bulldozedPrice: 1000, family: 'n/a', sqft: 300 },
    { type: 'Residential', name: 'Mossy Lane', size: '20x15', bulldozedPrice: 1000, family: 'Pleasant', sqft: 300 },
    { type: 'Residential', name: 'Spring Steppes', size: '20x15', bulldozedPrice: 1000, family: 'Elderberry', sqft: 300 },
    { type: 'Library', name: 'Laurel Library', size: '50x40', bulldozedPrice: 2000, family: 'n/a', sqft: 2000 },
    { type: 'Foxbury Commons', name: "Larry's Lagoon", size: '40x30', bulldozedPrice: 2500, family: 'n/a', sqft: 1200 },
    { type: 'Bar', name: "Pepper's Pub", size: '20x20', bulldozedPrice: 1000, family: 'n/a', sqft: 400 },
  ];
}
