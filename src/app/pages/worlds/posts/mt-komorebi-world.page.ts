import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'mt-komorebi-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Mt. Komorebi (Snowy Escape)">
      <ul>
        <li>From the Snowy Escape Expansion Pack.</li>
        <li>Based on two Japanese islands, Honshū and Hokkaido.</li>
        <li>14 Lots Total.</li>
        <li>Home to the Nishidake, Akiyama, and Ito families.</li>
        <li>Home to 3 pop-up festivals: Light, Snow, and Youth.</li>
        <li>Access to the Secret Lot called the Mt. Komorebi Peak.</li>
      </ul>

      <my-world-showcase
        world="Mt. Komorebi"
        srcUnlabelled="content/worlds/17 - Mt. Komorebi - Snowy Escape - Unlabelled.webp"
        srcLabelled="content/worlds/17 - Mt. Komorebi - Snowy Escape - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/17 - Mt. Komorebi - Snowy Escape - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/17 - Mt. Komorebi - Snowy Escape - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class MtKomorebiWorld {
  lots: LotData[] = [
    { type: 'Residential', name: '2-4-3 Wakabamori', size: '20x15', bulldozedPrice: 800, family: 'n/a', sqft: 300 },
    { type: 'Residential', name: '6-4-1 Hanamigawa', size: '20x15', bulldozedPrice: 800, family: 'n/a', sqft: 300 },
    { type: 'Residential', name: '5-6-1 Shinrinyoku', size: '20x15', bulldozedPrice: 1000, family: 'Nishidake', sqft: 300 },
    { type: 'Residential', name: '5-3-1 Shinrinyoku', size: '30x20', bulldozedPrice: 2500, family: 'Akiyama', sqft: 600 },
    { type: 'Residential', name: '2-5-1 Wakabamori', size: '50x50', bulldozedPrice: 14500, family: 'Ito', sqft: 2500 },
    { type: 'Residential', name: '2-4-1 Wakabamori', size: '20x15', bulldozedPrice: 2000, family: 'n/a', sqft: 300 },
    { type: 'Residential', name: 'Kiyomatsu Point', size: '50x50', bulldozedPrice: 30000, family: 'n/a', sqft: 2500 },
    { type: 'Rental', name: '2-4-2 Wakabamori', size: '30x20', bulldozedPrice: 3300, family: 'n/a', sqft: 600 },
    { type: 'Rental', name: '5-1-1 Kiyomatsu', size: '30x20', bulldozedPrice: 7000, family: 'n/a', sqft: 600 },
    { type: 'Rental', name: '5-1-2 Kiyomatsu', size: '30x20', bulldozedPrice: 7000, family: 'n/a', sqft: 600 },
    { type: 'Park', name: 'Hanamigawa Koen', size: '30x20', bulldozedPrice: 2500, family: 'n/a', sqft: 600 },
    { type: 'Onsen Bathhouse', name: 'Sutefani Onsen Bathhouse', size: '30x20', bulldozedPrice: 7000, family: 'n/a', sqft: 600 },
    { type: 'Lounge', name: 'Hazakura Lounge', size: '30x20', bulldozedPrice: 3500, family: 'n/a', sqft: 600 },
    { type: 'Bar', name: 'Izakaya Ippai', size: '30x20', bulldozedPrice: 2500, family: 'n/a', sqft: 600 },
  ];
}
