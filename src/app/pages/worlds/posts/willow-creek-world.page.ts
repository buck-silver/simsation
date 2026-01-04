import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'willow-creek-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Willow Creek (Base Game)">
      <ul>
        <li>Base Game World</li>
        <li>Based on New Orleans, Louisiana</li>
        <li>21 Lots Total.</li>
        <li>Home to the Goth, Pancakes, and Spencer-Kim-Lewis families, and the BFF household.</li>
        <li>Access to the Secret Lot called Sylvan Glade.</li>
      </ul>

      <my-world-showcase
        world="Willow Creek"
        srcUnlabelled="content/worlds/1 - Willow Creek - Base Game - Unlabelled.webp"
        srcLabelled="content/worlds/1 - Willow Creek - Base Game - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/1 - Willow Creek - Base Game - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/1 - Willow Creek - Base Game - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class WillowCreekWorld {
  lots: LotData[] = [
    { type: 'Residential', name: 'Garden Essence', size: '40x30', bulldozedPrice: 2000, family: 'BFF', sqft: 1200 },
    { type: 'Residential', name: 'Brook Bungalow', size: '40x30', bulldozedPrice: 3000, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Bargain Bend', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Daisy Hovel', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Oakenstead', size: '50x50', bulldozedPrice: 10000, family: 'n/a', sqft: 2500 },
    { type: 'Residential', name: 'Pique Hearth', size: '30x20', bulldozedPrice: 2500, family: 'Pancakes', sqft: 600 },
    { type: 'Residential', name: 'Potters Splay', size: '30x20', bulldozedPrice: 2500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Riverside Roost', size: '30x20', bulldozedPrice: 2500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Parkshore', size: '40x30', bulldozedPrice: 5500, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Crick Cabana', size: '20x15', bulldozedPrice: 1500, family: 'n/a', sqft: 300 },
    { type: 'Residential', name: 'Streamlet Single', size: '20x15', bulldozedPrice: 1500, family: 'n/a', sqft: 300 },
    { type: 'Residential', name: 'Umbrage Manor', size: '40x30', bulldozedPrice: 6500, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Rindle Rose', size: '20x15', bulldozedPrice: 2000, family: 'n/a', sqft: 300 },
    { type: 'Residential', name: 'Cypress Terrace', size: '40x30', bulldozedPrice: 8500, family: 'Spencer-Kim-Lewis', sqft: 1200 },
    { type: 'Residential', name: 'Hallow Slough', size: '30x20', bulldozedPrice: 5500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Ophelia Villa', size: '30x20', bulldozedPrice: 5500, family: 'Goth', sqft: 600 },
    { type: 'Park', name: 'Magnolia Blossom', size: '50x50', bulldozedPrice: 25000, family: 'n/a', sqft: 2500 },
    { type: 'Nightclub', name: 'The Blue Velvet', size: '30x20', bulldozedPrice: 4000, family: 'n/a', sqft: 600 },
    { type: 'Museum', name: 'Municipal Muses', size: '40x30', bulldozedPrice: 4000, family: 'n/a', sqft: 1200 },
    { type: 'Library', name: 'Willow Creek Archive', size: '30x20', bulldozedPrice: 4000, family: 'n/a', sqft: 600 },
    { type: 'Gym', name: 'Movers & Shakers', size: '30x20', bulldozedPrice: 4000, family: 'n/a', sqft: 600 },
  ];
}
