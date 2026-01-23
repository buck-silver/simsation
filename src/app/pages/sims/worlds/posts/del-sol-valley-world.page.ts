import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'del-sol-valley-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Del Sol Valley (Get Famous)">
      <ul>
        <li>From the Get Famous Expansion Pack.</li>
        <li>Based on Los Angeles, California.</li>
        <li>11 Lots Total.</li>
        <li>Home to the Jeong, Bailey-Moon, and Ward families.</li>
        <li>Mansions with no toilets.</li>
        <li>Cheapest real estate in any world, at the low low price of FREE! Seriously, check out the chart below.</li>
      </ul>

      <my-world-showcase
        world="Del Sol Valley"
        srcUnlabelled="content/worlds/11 - Del Sol Valley - Get Famous - Unlabelled.webp"
        srcLabelled="content/worlds/11 - Del Sol Valley - Get Famous - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/11 - Del Sol Valley - Get Famous - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/11 - Del Sol Valley - Get Famous - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class DelSolValleyWorld {
  lots: LotData[] = [
    { type: 'Residential', name: 'Inner Circle', size: '40x30', bulldozedPrice: 2400, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Vacuous Green', size: '50x40', bulldozedPrice: 4000, family: 'n/a', sqft: 2000 },
    { type: 'Residential', name: 'Upland Place', size: '40x30', bulldozedPrice: 2500, family: 'Jeong', sqft: 1200 },
    { type: 'Residential', name: 'Chateau Peak', size: '64x64', bulldozedPrice: 35000, family: 'n/a', sqft: 4096 },
    { type: 'Residential', name: 'Bailey-Moon Manor', size: '50x40', bulldozedPrice: 30000, family: 'Bailey-Moon', sqft: 2000 },
    { type: 'Residential', name: 'The Ward Den', size: '50x40', bulldozedPrice: 30000, family: 'Ward', sqft: 2000 },
    { type: 'Park', name: 'Ward Park', size: '20x20', bulldozedPrice: 0, family: 'n/a', sqft: 400 },
    { type: 'Museum', name: 'Plumbob Pictures Museum', size: '40x30', bulldozedPrice: 0, family: 'n/a', sqft: 1200 },
    { type: 'Lounge', name: 'Orchid A Go Go', size: '30x30', bulldozedPrice: 0, family: 'n/a', sqft: 900 },
    { type: 'Lounge', name: 'Studio PBP', size: '40x30', bulldozedPrice: 0, family: 'n/a', sqft: 1200 },
    { type: 'Gym', name: 'Pectoral Fitness', size: '30x30', bulldozedPrice: 0, family: 'n/a', sqft: 900 },
  ];
}
