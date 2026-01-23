import { Component, inject } from '@angular/core';
import { RoomComponent } from './room.component';
import { SimsRoomColorRandomizerService } from './sims-room-color-randomizer.service';

@Component({
  imports: [RoomComponent],
  selector: 'floor-plan',
  templateUrl: './floor-plan.component.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }

    .yard {
      font-weight: bold;
    }

    .yard:hover {
      cursor: pointer;
    }

    .yard-bg {
      fill-opacity: 1;
      stroke: #000;
      stroke-width: 0.5;
      stroke-linecap: butt;
      stroke-linejoin: miter;
      stroke-opacity: 1;
    }

    .fill-transition {
      transition: ease fill 0.25s;
    }
  `,
})
export class FloorPlanComponent {
  service = inject(SimsRoomColorRandomizerService);
}
