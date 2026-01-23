import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'evergreen-harbor-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Evergreen Harbor (Eco Lifestyle)">
      <ul>
        <li>From the Eco Lifestyle Expansion Pack.</li>
        <li>Based on modern/industrial coastal towns in the Northwestern US.</li>
        <li>11 Lots Total and 4 Apartments.</li>
        <li>Home to the Harris, Tinker, and Greenberg families, and the Sterling Rico household.</li>
        <li>Watch this world transform depending on your Eco Footprint.</li>
      </ul>

      <my-world-showcase
        world="Evergreen Harbor"
        srcUnlabelled="content/worlds/16 - Evergreen Harbor - Eco Lifestyle - Unlabelled.webp"
        srcLabelled="content/worlds/16 - Evergreen Harbor - Eco Lifestyle - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/16 - Evergreen Harbor - Eco Lifestyle - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/16 - Evergreen Harbor - Eco Lifestyle - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class EvergreenHarborWorld {
  lots: LotData[] = [
    { type: 'Residential', name: 'The Shipping Views', size: '30x20', bulldozedPrice: 750, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Rockridge Springs', size: '30x20', bulldozedPrice: 1000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Canal Corner', size: '20x15', bulldozedPrice: 750, family: 'n/a', sqft: 300 },
    { type: 'Residential', name: 'Miner Mansion', size: '30x20', bulldozedPrice: 2500, family: 'Harris', sqft: 600 },
    { type: 'Residential', name: 'The Portsmouth Promenade', size: '30x20', bulldozedPrice: 2500, family: 'Greenburg', sqft: 600 },
    { type: 'Residential', name: 'The Old Mill', size: '30x20', bulldozedPrice: 3000, family: 'Sterling Rico', sqft: 600 },
    { type: 'Residential', name: 'Pigulock Manor', size: '30x20', bulldozedPrice: 4000, family: 'Tinker', sqft: 600 },
    { type: 'Community Space', name: 'Sprucewood Square', size: '40x30', bulldozedPrice: 4500, family: 'n/a', sqft: 1200 },
    { type: 'Community Space', name: 'The Quarry Building', size: '40x30', bulldozedPrice: 4500, family: 'n/a', sqft: 1200 },
    { type: 'Community Space', name: 'The Waterfront', size: '40x30', bulldozedPrice: 4500, family: 'n/a', sqft: 1200 },
    { type: 'Bar', name: 'The Caboose', size: '30x20', bulldozedPrice: 2500, family: 'n/a', sqft: 600 },
    { type: 'Apartment', name: 'Pinecrest Apartment #402', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 1000, rent: 600 },
    { type: 'Apartment', name: 'Pinecrest Apartment #404', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 4800, rent: 1200 },
    { type: 'Apartment', name: 'Stonestreet Apartment #3', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 750, rent: 500 },
    { type: 'Apartment', name: 'Stonestreet Apartment #4', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 750, rent: 500 },
  ];
}
