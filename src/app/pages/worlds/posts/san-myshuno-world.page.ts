import { Component } from '@angular/core';
import { MyWorldModule } from '../components/my-world.module';
import { LotData } from '../components/my-lots-table.component';

@Component({
  selector: 'san-myshuno-world',
  imports: [MyWorldModule],
  template: `
    <my-world heading="San Myshuno (City Living)">
      <ul>
        <li>From the City Living Expansion Pack.</li>
        <li>Based on a variety of modern cities from around the world including Shanghai, Tokyo, Vancouver, San Francisco, Hong Kong, New York, and Sydney. It also features elements of Indian, Chinese, Japanese and Moroccan cultures.</li>
        <li>9 Lots Total and 21 Apartments.</li>
        <li>Home to the Feng, Rasoya, Bheeda, Jang, Benali, Pizzazz, and Lobo families, and the Karaoke Legends household.</li>
        <li>Home to 4 pop-up festivals: Spice, Romance, Humor & Hijinks, and GeekCon.</li>
      </ul>

      <my-world-showcase
        world="San Myshuno"
        srcUnlabelled="content/worlds/7 - San Myshuno - City Living - Unlabelled.webp"
        srcLabelled="content/worlds/7 - San Myshuno - City Living - Labelled.webp"
        srcUnlabelledBulldozed="content/worlds/7 - San Myshuno - City Living - Unlabelled Bulldozed.webp"
        srcLabelledBulldozed="content/worlds/7 - San Myshuno - City Living - Labelled Bulldozed.webp"
      />

      <my-lots-table [data]="lots" />
    </my-world>
  `,
})
export default class SanMyshunoWorld {
  lots: LotData[] = [
    { type: 'Residential', name: 'The Old Salt House', size: '30x30', bulldozedPrice: 9000, family: 'n/a', sqft: 900 },
    { type: 'Penthouse', name: 'Fountainview Penthouse', size: '30x20', bulldozedPrice: 13832, family: 'n/a', sqft: 600 },
    { type: 'Penthouse', name: '#1 Torendi Tower Penthouse', size: '40x30', bulldozedPrice: 31514, family: 'n/a', sqft: 1200 },
    { type: 'Lounge', name: 'Stargazer Lounge', size: '40x30', bulldozedPrice: 33000, family: 'n/a', sqft: 1200 },
    { type: 'Karaoke Bar', name: 'Waterside Warble', size: '30x30', bulldozedPrice: 9000, family: 'n/a', sqft: 900 },
    { type: 'Karaoke Bar', name: 'Planet Honey Pop!', size: '30x20', bulldozedPrice: 15000, family: 'n/a', sqft: 600 },
    { type: 'Gym', name: 'Skye Fitness', size: '30x20', bulldozedPrice: 17000, family: 'n/a', sqft: 600 },
    { type: 'Center Park', name: 'Myshuno Meadows', size: '64x64', bulldozedPrice: 'Not for Sale', family: 'n/a', sqft: 'n/a' },
    { type: 'Arts Center', name: 'Casbah Gallery', size: '40x30', bulldozedPrice: 30000, family: 'n/a', sqft: 1200 },
    { type: 'Apartment', name: '#1010 Alto Apartments', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 15500, rent: 3500 },
    { type: 'Apartment', name: '#1020 Alto Apartments', size: 'n/a', bulldozedPrice: 'n/a', family: 'Lobo', sqft: 'n/a', deposit: 12500, rent: 2500 },
    { type: 'Apartment', name: '#121 Hakim House', size: 'n/a', bulldozedPrice: 'n/a', family: 'Jang', sqft: 'n/a', deposit: 4800, rent: 1200 },
    { type: 'Apartment', name: '#122 Hakim House', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 5600, rent: 1400 },
    { type: 'Apartment', name: '#1310 21 Chic Street', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 1000, rent: 500 },
    { type: 'Apartment', name: '#1312 21 Chic Street', size: 'n/a', bulldozedPrice: 'n/a', family: 'Pizzazz', sqft: 'n/a', deposit: 600, rent: 400 },
    { type: 'Apartment', name: '#1313 21 Chic Street', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 600, rent: 300 },
    { type: 'Apartment', name: '#17 Culpepper House', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 800, rent: 400 },
    { type: 'Apartment', name: '#18 Culpepper House', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 1000, rent: 600 },
    { type: 'Apartment', name: '#19 Culpepper House', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 550, rent: 600 },
    { type: 'Apartment', name: '#20 Culpepper House', size: 'n/a', bulldozedPrice: 'n/a', family: 'Rasoya', sqft: 'n/a', deposit: 4800, rent: 1200 },
    { type: 'Apartment', name: '#701 ZenView', size: 'n/a', bulldozedPrice: 'n/a', family: 'Karaoke Legends', sqft: 'n/a', deposit: 2100, rent: 700 },
    { type: 'Apartment', name: '#702 ZenView', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 4800, rent: 1200 },
    { type: 'Apartment', name: '#888 Spire Apartments', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 37500, rent: 7500 },
    { type: 'Apartment', name: '#910 Medina Studios', size: 'n/a', bulldozedPrice: 'n/a', family: 'Benali', sqft: 'n/a', deposit: 500, rent: 400 },
    { type: 'Apartment', name: '#920 Medina Studios', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 800, rent: 1000 },
    { type: 'Apartment', name: '#930 Medina Studios', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 1000, rent: 1200 },
    { type: 'Apartment', name: '2A Jasmine Suites', size: 'n/a', bulldozedPrice: 'n/a', family: 'Bheeda', sqft: 'n/a', deposit: 800, rent: 400 },
    { type: 'Apartment', name: '2B Jasmine Suites', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 1000, rent: 500 },
    { type: 'Apartment', name: 'IX Landgraab', size: 'n/a', bulldozedPrice: 'n/a', family: 'Feng', sqft: 'n/a', deposit: 16500, rent: 3750 },
    { type: 'Apartment', name: 'VIII Landgraab', size: 'n/a', bulldozedPrice: 'n/a', family: 'n/a', sqft: 'n/a', deposit: 25000, rent: 5000 },
  ];
}
