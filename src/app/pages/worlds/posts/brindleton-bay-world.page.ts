import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'brindleton-bay-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="Brindleton Bay (Cats & Dogs)">
      <ul>
        <li>From the Cats & Dogs Expansion Pack.</li>
        <li>Based on various New England seafront towns.</li>
        <li>16 Lots Total.</li>
        <li>Home to the Lynx, Delgato, and Hecking families.</li>
        <li>Stray cats and dogs wander the world, and can be befriended and adopted.</li>
      </ul>

      <my-world-showcase
        world="Brindleton Bay"
        srcUnlabelled="content/worlds/9 - Brindleton Bay - Cats & Dogs - Unlabelled.webp"
        srcLabelled="content/worlds/9 - Brindleton Bay - Cats & Dogs - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/9 - Brindleton Bay - Cats & Dogs - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/9 - Brindleton Bay - Cats & Dogs - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class BrindletonBayWorld {
  lots: LotData[] = [
    { type: 'Vet', name: 'Brindleton Pawspital', size: '40x30', bulldozedPrice: 3000, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: ",It's A Good House", size: '40x40', bulldozedPrice: 3500, family: 'Hecking', sqft: 1600 },
    { type: 'Residential', name: 'Chateau Frise', size: '40x40', bulldozedPrice: 4000, family: 'Delgato', sqft: 1600 },
    { type: 'Residential', name: "Tail's End", size: '40x30', bulldozedPrice: 3000, family: 'n/a', sqft: 1200 },
    { type: 'Residential', name: 'Domus Familiarus', size: '30x30', bulldozedPrice: 2500, family: 'n/a', sqft: 900 },
    { type: 'Residential', name: "Hound's Head", size: '64x64', bulldozedPrice: 12000, family: 'n/a', sqft: 4096 },
    { type: 'Residential', name: 'Catscratch Cottage', size: '20x15', bulldozedPrice: 1000, family: 'Lynx', sqft: 300 },
    { type: 'Residential', name: "Dachshund's Creek", size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Hindquarter Hideaway', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Sporting Space', size: '30x20', bulldozedPrice: 2000, family: 'n/a', sqft: 600 },
    { type: 'Residential', name: 'Bedlington Boathouse', size: '20x20', bulldozedPrice: 1500, family: 'n/a', sqft: 400 },
    { type: 'Residential', name: 'Ragdoll Refurb', size: '20x20', bulldozedPrice: 1500, family: 'n/a', sqft: 400 },
    { type: 'Park', name: 'Pupperstone Park', size: '40x30', bulldozedPrice: 3000, family: 'n/a', sqft: 1200 },
    { type: 'Museum', name: 'Deadgrass Discoveries', size: '30x30', bulldozedPrice: 2500, family: 'n/a', sqft: 900 },
    { type: 'Lounge', name: 'Club Calico', size: '40x30', bulldozedPrice: 3000, family: 'n/a', sqft: 1200 },
    { type: 'Bar', name: 'Salty Paws Saloon', size: '20x15', bulldozedPrice: 1000, family: 'n/a', sqft: 300 },
  ];
}
