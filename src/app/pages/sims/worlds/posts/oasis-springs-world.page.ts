import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'oasis-springs-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Oasis Springs (Base Game)">
      <ul>
        <li>Base Game World</li>
        <li>Based on various desert locations in the Southwestern US.</li>
        <li>21 Lots Total.</li>
        <li>Home to the Caliente/Lothario, Landgraab, and Zest families, and the Roomies household.</li>
        <li>Access to the Secret Lot called Forgotten Grotto.</li>
      </ul>

      <my-world-showcase
        world="Oasis Springs"
        srcUnlabelled="content/worlds/2 - Oasis Springs - Base Game - Unlabelled.webp"
        srcLabelled="content/worlds/2 - Oasis Springs - Base Game - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/2 - Oasis Springs - Base Game - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/2 - Oasis Springs - Base Game - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class OasisSpringsWorld {
  lots: LotData[] = [
    { type: 'Residential', name: 'Slipshod Mesquite', size: '40x30', bulldozedPrice: 2000, family: 'Zest', sqft: 1200 },
    { type: 'Residential', name: 'Pebble Burrow', size: '30x20', bulldozedPrice: 1500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Cacti Casa', size: '40x30', bulldozedPrice: 3500, family: 'Roomies', sqft: 1200 },
    { type: 'Residential', name: 'Sandtrap Flat', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Affluista Mansion', size: '50x50', bulldozedPrice: 10000, family: 'Landgraab', sqft: 2500 },
    { type: 'Residential', name: 'Arid Ridge', size: '40x30', bulldozedPrice: 5500, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Agave Abode', size: '20x15', bulldozedPrice: 1500, family: 'n/a', sqft: 300 },
    { type: 'Residential', name: 'Nookstone', size: '20x15', bulldozedPrice: 1500, family: 'n/a', sqft: 300 },
    { type: 'Residential', name: 'Rio Verde', size: '40x30', bulldozedPrice: 6500, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Dusty Turf', size: '30x20', bulldozedPrice: 3500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Springscape', size: '30x20', bulldozedPrice: 3500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Vista Quarry', size: '30x20', bulldozedPrice: 3500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Yuma Heights', size: '40x30', bulldozedPrice: 8500, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Granada Place', size: '30x20', bulldozedPrice: 5500, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Sultry Springside', size: '30x20', bulldozedPrice: 5500, family: 'Caliente', sqft: 600 },
    { type: 'Residential', name: 'Raffia Quinta', size: '20x15', bulldozedPrice: 3500, family: 'n/a', sqft: 300 },
    { type: 'Park', name: 'Desert Bloom', size: '50x50', bulldozedPrice: 25000, family: 'n/a', sqft: 2500 },
    { type: 'Museum', name: 'The Futures Past', size: '30x20', bulldozedPrice: 4000, family: 'n/a', sqft: 600 },
    { type: 'Lounge', name: 'The Solar Flare', size: '30x20', bulldozedPrice: 4000, family: 'n/a', sqft: 600 },
    { type: 'Gym', name: 'Burners & Builders', size: '40x30', bulldozedPrice: 4000, family: 'n/a', sqft: 1200 },
    { type: 'Bar', name: 'Rattlesnake Juice', size: '30x20', bulldozedPrice: 4000, family: 'n/a', sqft: 600 },
  ];
}
