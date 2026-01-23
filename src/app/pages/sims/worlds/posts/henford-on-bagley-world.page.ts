import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'henford-on-bagley-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Henford-on-Bagley (Cottage Living)">
      <ul>
        <li>From the Cottage Living Expansion Pack.</li>
        <li>Based on the English Countryside.</li>
        <li>12 Lots Total.</li>
        <li>Home to the Watson, Scott, and Moody & McMillan families, and the A New Start household.</li>
        <li>Home to the Finchwick Fair.</li>
      </ul>

      <my-world-showcase
        world="Henford-on-Bagley"
        srcUnlabelled="content/worlds/18 - Henford-on-Bagley - Cottage Living - Unlabelled.webp"
        srcLabelled="content/worlds/18 - Henford-on-Bagley - Cottage Living - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/18 - Henford-on-Bagley - Cottage Living - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/18 - Henford-on-Bagley - Cottage Living - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class HenfordOnBagleyWorld {
  lots: LotData[] = [
    { type: 'Residential', name: '2 Olde Mill Lane', size: '50x40', bulldozedPrice: 5200, family: 'n/a', sqft: 2000 },
    { type: 'Residential', name: '3 Olde Mill Lane', size: '50x40', bulldozedPrice: 5200, family: 'n/a', sqft: 2000 },
    { type: 'Residential', name: 'Olde Mill Hill', size: '64x64', bulldozedPrice: 11000, family: 'The Watson Family', sqft: 4096 },
    { type: 'Residential', name: '14 Nettle Lane', size: '40x30', bulldozedPrice: 3500, family: 'Moody & McMillan', sqft: 1200 },
    { type: 'Residential', name: '4 Olde Mill Lane', size: '30x20', bulldozedPrice: 1800, family: 'A New Start', sqft: 600 },
    { type: 'Residential', name: '5 Cobblebottom Street', size: '30x20', bulldozedPrice: 1850, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Cordelia’s Secret Cottage', size: '30x20', bulldozedPrice: 1925, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: '3 Cobblebottom Street', size: '20x20', bulldozedPrice: 1400, family: 'Scott', sqft: 400 },
    { type: 'Residential', name: '1 Cobblebottom Street', size: '20x15', bulldozedPrice: 1200, family: 'n/a', sqft: 300 },
    { type: 'Rental', name: '13 Nettle Lane', size: '30x20', bulldozedPrice: 2250, family: 'n/a', sqft: 600 },
    { type: 'National Park', name: 'Isle of Volpe Park', size: '50x40', bulldozedPrice: 5750, family: 'n/a', sqft: 2000 },
    { type: 'Bar', name: "The Gnome's Arms", size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
  ];
}
