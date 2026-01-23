import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'windenburg-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Windenburg (Get Together)">
      <ul>
        <li>From the Get Together Expansion Pack.</li>
        <li>Based on parts of Germany and Europe in general, with historical and modern architecture.</li>
        <li>27 Lots Total.</li>
        <li>Home to the Behr, Villareal, Bjergsen, Fyres, and Munch families, and the Free Spirits, Bro, and Partihaus households.</li>
        <li>3 Special Lots: The Bluffs, Ancient Ruins and the Von Haunt Estate.</li>
      </ul>

      <my-world-showcase
        world="Windenburg"
        srcUnlabelled="content/worlds/6 - Windenburg - Get Together - Unlabelled.webp"
        srcLabelled="content/worlds/6 - Windenburg - Get Together - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/6 - Windenburg - Get Together - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/6 - Windenburg - Get Together - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class WindenburgWorld {
  lots: LotData[] = [
    { type: 'Residential', name: 'Coorinberg Cottage', size: '40x30', bulldozedPrice: 3000, family: 'Munch', sqft: 1200 },
    { type: 'Residential', name: 'The Lighthouse', size: '40x30', bulldozedPrice: 3000, family: 'Bjergsen', sqft: 1200 },
    { type: 'Residential', name: 'The Summer Home', size: '40x30', bulldozedPrice: 3000, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Dresden House', size: '64x64', bulldozedPrice: 12000, family: 'Fyres', sqft: 4096 },
    { type: 'Residential', name: 'Von Windenburg Estate', size: '64x64', bulldozedPrice: 12000, family: 'Villareal', sqft: 4096 },
    { type: 'Residential', name: 'Dock Den', size: '30x20', bulldozedPrice: 2000, family: 'Bro', sqft: 600 },
    { type: 'Residential', name: 'Factory One', size: '30x20', bulldozedPrice: 2000, family: 'Partihaus', sqft: 600 },
    { type: 'Residential', name: 'Pier Palace', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: "Proprietor's Square", size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Rustic Residence', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Waterlock Redoubt', size: '30x20', bulldozedPrice: 2000, family: 'Behr', sqft: 600 },
    { type: 'Residential', name: 'Cottage Am See', size: '20x20', bulldozedPrice: 1500, family: 'Free Spirits', sqft: 400 },
    { type: 'Residential', name: 'Havisham House', size: '20x20', bulldozedPrice: 1500, family: 'n/a', sqft: 400 },
    { type: 'Residential', name: 'Mid-Nowhere', size: '20x20', bulldozedPrice: 1500, family: 'n/a', sqft: 400 },
    { type: 'Pool', name: 'Bathe de Rill', size: '40x30', bulldozedPrice: 3000, family: 'n/a', sqft: 1200 },
    { type: 'Park', name: 'Hare Square', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Nightclub', name: 'Discotheque Pan Europa', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Nightclub', name: 'The Narwhal Arms', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Library', name: 'Quad Manor', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Island Bluff', name: 'The Bluffs', size: '30x30', bulldozedPrice: 'Not for sale', family: 'n/a', sqft: 'n/a' },
    { type: 'Gym', name: 'Harbor Quarter Gym', size: '30x30', bulldozedPrice: 2500, family: 'n/a', sqft: 900 },
    { type: 'Chalet Gardens', name: 'Von Haunt Estate', size: '40x30', bulldozedPrice: 'Not for sale', family: 'n/a', sqft: 'n/a' },
    { type: 'Café', name: 'Hare and Hedgehog', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Café', name: 'South Square Coffee', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Bar', name: 'Old Quarter Inn', size: '20x20', bulldozedPrice: 1500, family: 'n/a', sqft: 400 },
    { type: 'Bar', name: 'The Shrieking Llama', size: '20x20', bulldozedPrice: 1500, family: 'n/a', sqft: 400 },
    { type: 'Ancient Ruins', name: 'Ancient Ruins', size: '20x15', bulldozedPrice: 'Not for sale', family: 'n/a', sqft: 'n/a' },
  ];
}
