import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'tartosa-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Tartosa (My Wedding Stories)">
      <ul>
        <li>From the My Wedding Stories Game Pack.</li>
        <li>Based on various locations in the Mediterranean.</li>
        <li>9 Lots Total.</li>
        <li>Home to the Markovic and Laurent families.</li>
        <li>Prepare for your wedding day by visiting Porto Luminoso's various shops and market stalls to plan your Formal Outfit and purchase a Wedding Cake and Bouquet.</li>
      </ul>

      <my-world-showcase
        world="Tartosa"
        srcUnlabelled="content/worlds/19 - Tartosa - My Wedding Stories - Unlabelled.webp"
        srcLabelled="content/worlds/19 - Tartosa - My Wedding Stories - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/19 - Tartosa - My Wedding Stories - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/19 - Tartosa - My Wedding Stories - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class TartosaWorld {
  lots: LotData[] = [
    { type: 'Wedding Venue', name: 'La Coppia Serena', size: '50x40', bulldozedPrice: 6000, family: 'n/a', sqft: 2000 },
    { type: 'Residential', name: 'Piccola Luce', size: '20x20', bulldozedPrice: 1000, family: 'n/a', sqft: 400 },
    { type: 'Residential', name: 'Via Romanza', size: '30x30', bulldozedPrice: 2500, family: 'n/a', sqft: 900 },
    { type: 'Residential', name: 'Thebe Estate', size: '50x50', bulldozedPrice: 8000, family: 'Laurent', sqft: 2500 },
    { type: 'Residential', name: 'Rifugio dei Pirati', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'The Old Wood Nectary', size: '40x30', bulldozedPrice: 4000, family: 'Markovic', sqft: 1200 },
    { type: 'Residential', name: "Baia dell'amore", size: '40x20', bulldozedPrice: 3000, family: 'n/a', sqft: 800 },
    { type: 'Rental', name: 'Villa Vigna', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Lounge', name: "Celebrazioni d'Amore", size: '50x40', bulldozedPrice: 6000, family: 'n/a', sqft: 2000 },
  ];
}
