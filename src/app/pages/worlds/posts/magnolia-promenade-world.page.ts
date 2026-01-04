import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'magnolia-promenade-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Magnolia Promenade (Get to Work)">
      <ul>
        <li>From the Get to Work Expansion Pack.</li>
        <li>Appears to be an extension of Willow Creek.</li>
        <li>4 Lots Total.</li>
        <li>This world is meant to be for Retail Lots, although they could be changed to anything. It does not have any families living in it.</li>
      </ul>

      <my-world-showcase
        world="Magnolia Promenade"
        srcUnlabelled="content/worlds/5 - Magnolia Promenade - Get to Work - Unlabelled.webp"
        srcLabelled="content/worlds/5 - Magnolia Promenade - Get to Work - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/5 - Magnolia Promenade - Get to Work - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/5 - Magnolia Promenade - Get to Work - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class MagnoliaPromenadeWorld {
  lots: LotData[] = [
    { type: 'Retail', name: "Paddywack's Emporium", size: '20x20', bulldozedPrice: 2000, family: 'n/a', sqft: 400 },
    { type: 'Retail', name: 'JF & S Clothiers', size: '20x20', bulldozedPrice: 2500, family: 'n/a', sqft: 400 },
    { type: 'Retail', name: 'The Roadstead', size: '40x30', bulldozedPrice: 8000, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Preeminent Domain', size: '30x20', bulldozedPrice: 3000, family: 'n/a', sqft: 600 },
  ];
}
