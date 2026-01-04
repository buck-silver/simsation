import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'selvadorada-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Selvadorada (Jungle Adventure)">
      <ul>
        <li>From the Jungle Adventure Game Pack.</li>
        <li>Based on jungle areas of Latin America.</li>
        <li>7 Lots Total.</li>
        <li>This is a Destination World, and does not have any families living in it.</li>
        <li>Access to the Secret Lot/Area called the Jungle District.</li>
      </ul>

      <my-world-showcase
        world="Selvadorada"
        srcUnlabelled="content/worlds/10 - Selvadorada - Jungle Adventure - Unlabelled.webp"
        srcLabelled="content/worlds/10 - Selvadorada - Jungle Adventure - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/10 - Selvadorada - Jungle Adventure - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/10 - Selvadorada - Jungle Adventure - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class SelvadoradaWorld {
  lots: LotData[] = [
    { type: 'Rental', name: 'Belomisia Field Station', size: '30x20', bulldozedRent: 2 },
    { type: 'Rental', name: 'Hillview Hideaway', size: '20x15', bulldozedRent: 2 },
    { type: 'Rental', name: 'Jungle Bungalow', size: '30x30', bulldozedRent: 3 },
    { type: 'Rental', name: 'Selvadorada Villa', size: '30x20', bulldozedRent: 2 },
    { type: 'National Park', name: 'Belomisia Trailhead', size: '40x20', bulldozedRent: 4 },
    { type: 'Museum', name: 'Alam Museum of Archaeology', size: '64x64', bulldozedRent: 20 },
    { type: 'Bar', name: 'Cantina "El Arbol Del Jaguar"', size: '40x30', bulldozedRent: 2 },
  ];
}
