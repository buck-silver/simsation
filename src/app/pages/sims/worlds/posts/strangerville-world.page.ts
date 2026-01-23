import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'strangerville-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="StrangerVille (StrangerVille)">
      <ul>
        <li>From the StrangerVille Game Pack.</li>
        <li>Based on various rural desert towns in the Southwestern US.</li>
        <li>11 Lots Total.</li>
        <li>Home to the Sigworth, Cahill, and Roswell families, and the Eclectic Arts household.</li>
        <li>Access to the Secret Lab and StrangerVille Mystery.</li>
      </ul>

      <my-world-showcase
        world="StrangerVille"
        srcUnlabelled="content/worlds/12 - StrangerVille - StrangerVille - Unlabelled.webp"
        srcLabelled="content/worlds/12 - StrangerVille - StrangerVille - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/12 - StrangerVille - StrangerVille - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/12 - StrangerVille - StrangerVille - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class StrangerVilleWorld {
  lots: LotData[] = [
    { type: 'Residential', name: 'Slip 42', size: '20x15', bulldozedPrice: 450, family: 'n/a', sqft: 300 },
    { type: 'Residential', name: 'Carpophagous Corner', size: '30x20', bulldozedPrice: 1000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Riverside Grove', size: '30x20', bulldozedPrice: 1000, family: 'Sigworth', sqft: 600 },
    { type: 'Residential', name: 'Old Penelope', size: '50x40', bulldozedPrice: 3500, family: 'Cahill', sqft: 2000 },
    { type: 'Residential', name: 'Plateau Place', size: '40x30', bulldozedPrice: 5500, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'StangerVille Overlook', size: '40x30', bulldozedPrice: 5500, family: 'Roswell', sqft: 1200 },
    { type: 'Residential', name: 'Cliff Side Crest', size: '30x20', bulldozedPrice: 4500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Creek Corner Cove', size: '30x20', bulldozedPrice: 4500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Dream Weavers Way', size: '30x20', bulldozedPrice: 4500, family: 'Eclectic Arts Household', sqft: 600 },
    { type: 'Library', name: 'StrangerVille Information Center', size: '20x20', bulldozedPrice: 950, family: 'n/a', sqft: 400 },
    { type: 'Bar', name: '8 Bells', size: '20x20', bulldozedPrice: 900, family: 'n/a', sqft: 400 },
  ];
}
