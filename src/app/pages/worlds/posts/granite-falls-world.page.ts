import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'granite-falls-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Granite Falls (Outdoor Retreat)">
      <ul>
        <li>From the Outdoor Retreat Game Pack.</li>
        <li>Based on rural Washington State.</li>
        <li>6 Lots Total.</li>
        <li>This is a Destination World, and does not have any families living in it.</li>
        <li>Access to the Secret Lot called the Hermit's House.</li>
      </ul>

      <my-world-showcase
        world="Granite Falls"
        srcUnlabelled="content/worlds/4 - Granite Falls - Outdoor Retreat - Unlabelled.webp"
        srcLabelled="content/worlds/4 - Granite Falls - Outdoor Retreat - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/4 - Granite Falls - Outdoor Retreat - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="assets/content/worlds/4 - Granite Falls - Outdoor Retreat - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class GraniteFallsWorld {
  lots: LotData[] = [
    { type: 'Rental', name: 'Campground', size: '30x20', bulldozedRent: 16 },
    { type: 'Rental', name: 'Forest Hideaway', size: '40x30', bulldozedRent: 21 },
    { type: 'Rental', name: 'Green Getaway', size: '30x20', bulldozedRent: 16 },
    { type: 'Rental', name: 'Lakeside Retreat', size: '40x30', bulldozedRent: 21 },
    { type: 'Rental', name: 'Riverside Retreat', size: '30x20', bulldozedRent: 16 },
    { type: 'National Park', name: 'Granite Falls Forest', size: '50x50', bulldozedRent: 'Not for Sale' },
  ];
}
