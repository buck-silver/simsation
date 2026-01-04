import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'sulani-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Sulani (Island Living)">
      <ul>
        <li>From the Island Living Expansion Pack.</li>
        <li>Based on Polynesian and Hawaiian Islands.</li>
        <li>14 Lots Total.</li>
        <li>Home to the Kealoha, Hoapili, Kahananui, and Ngata families.</li>
        <li>Swim with dolphins, play in the waterfall, explore a cave and live near a volcano or live on a beach.</li>
      </ul>

      <my-world-showcase
        world="Sulani"
        srcUnlabelled="content/worlds/13 - Sulani - Island Living - Unlabelled.webp"
        srcLabelled="content/worlds/13 - Sulani - Island Living - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/13 - Sulani - Island Living - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/13 - Sulani - Island Living - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class SulaniWorld {
  lots: LotData[] = [
    { type: 'Residential', name: "Admiral's Wreckage", size: '50x50', bulldozedPrice: 8000, family: 'n/a', sqft: 2500 },
    { type: 'Residential', name: "Journey's End", size: '40x30', bulldozedPrice: 4500, family: 'Kahananui', sqft: 1200 },
    { type: 'Residential', name: "Chieftain's Villa", size: '40x30', bulldozedPrice: 5000, family: 'Hoapili', sqft: 1200 },
    { type: 'Residential', name: 'Reef Finery', size: '40x30', bulldozedPrice: 5000, family: 'Ngata', sqft: 1200 },
    { type: 'Residential', name: 'Sapphire Shores', size: '50x50', bulldozedPrice: 11200, family: 'n/a', sqft: 2500 },
    { type: 'Residential', name: 'Kin-Ship', size: '30x30', bulldozedPrice: 4500, family: 'Kealoha', sqft: 900 },
    { type: 'Residential', name: 'Tangled Flat', size: '20x20', bulldozedPrice: 2200, family: 'n/a', sqft: 400 },
    { type: 'Residential', name: 'Key Point', size: '40x30', bulldozedPrice: 7000, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Lagoon Look', size: '30x20', bulldozedPrice: 4000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Pier Perfection', size: '30x20', bulldozedPrice: 4200, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Caldera Camp', size: '30x20', bulldozedPrice: 5000, family: 'n/a', sqft: 600 },
    { type: 'Beach', name: 'Sand Simolean Beach', size: '40x30', bulldozedPrice: 4800, family: 'n/a', sqft: 1200 },
    { type: 'Beach', name: "Ohan'ali Beach", size: '30x30', bulldozedPrice: 4500, family: 'n/a', sqft: 900 },
    { type: 'Bar', name: 'The Sand Bar', size: '30x20', bulldozedPrice: 3500, family: 'n/a', sqft: 600 },
  ];
}
