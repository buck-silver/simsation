import { Injectable } from '@angular/core';
import { randFromArray } from '../../../../lib/math/rand-from-array';

type RoomColor = {
  name: string;
  bg: string;
  fg: string;
}

type FloorPlan = {
  exterior: RoomColor;
  kitchen: RoomColor;
  living: RoomColor;
  dining: RoomColor;
  master: RoomColor;
  ensuite: RoomColor;
  kids1: RoomColor;
  kids2: RoomColor;
  guest: RoomColor;
  bath: RoomColor;
  laundry: RoomColor;
  hall: RoomColor;
  yard: RoomColor;
}

@Injectable({
  providedIn: 'root',
})
export class SimsRoomColorRandomizerService {
  private colors: RoomColor[] = [
    { name: 'Red',         bg: 'url(#p-red)',         fg: '#fff' },
    { name: 'Pink',        bg: 'url(#p-pink)',        fg: '#000' },
    { name: 'Orange',      bg: 'url(#p-orange)',      fg: '#000' },
    { name: 'Yellow',      bg: 'url(#p-yellow)',      fg: '#000' },
    { name: 'Green',       bg: 'url(#p-green)',       fg: '#fff' },
    { name: 'Blue',        bg: 'url(#p-blue)',        fg: '#fff' },
    { name: 'Purple',      bg: 'url(#p-purple)',      fg: '#fff' },
    { name: 'White',       bg: 'url(#p-white)',       fg: '#000' },
    { name: 'Grey',        bg: 'url(#p-grey)',        fg: '#fff' },
    { name: 'Black',       bg: `url(#p-black);`,      fg: '#fff' },
    { name: 'Light Brown', bg: 'url(#p-light-brown)', fg: '#fff' },
    { name: 'Dark Brown',  bg: 'url(#p-dark-brown)',  fg: '#fff' },
  ];

  floorPlan: FloorPlan = {
    exterior: { name: 'On Brand',   bg: '#9575cd', fg: '#fff' },
    kitchen:  { name: 'On Brand',   bg: '#9575cd', fg: '#fff' },
    living:   { name: 'On Brand',   bg: '#9575cd', fg: '#fff' },
    dining:   { name: 'On Brand',   bg: '#9575cd', fg: '#fff' },
    master:   { name: 'On Brand',   bg: '#9575cd', fg: '#fff' },
    ensuite:  { name: 'On Brand',   bg: '#9575cd', fg: '#fff' },
    kids1:    { name: 'On Brand',   bg: '#9575cd', fg: '#fff' },
    kids2:    { name: 'On Brand',   bg: '#9575cd', fg: '#fff' },
    guest:    { name: 'On Brand',   bg: '#9575cd', fg: '#fff' },
    bath:     { name: 'On Brand',   bg: '#9575cd', fg: '#fff' },
    laundry:  { name: 'On Brand',   bg: '#9575cd', fg: '#fff' },
    hall:     { name: 'On Brand',   bg: '#9575cd', fg: '#fff' },
    yard:     { name: 'On Brand 2', bg: '#cbbae7', fg: '#000' },
  };

  randAll() {
    // When people say to me, "Using 'for in' loops is insane! No one does that,
    // it's terrible practice!" I like to remember one of my favorite quotes:
    //
    // "You're not going to be happy unless you're going Mach 2 with your hair
    // on fire."
    //
    //                                                 - Charlie (Top Gun, 1986)
    const fp = this.floorPlan;
    for (const room in fp) {
      fp[room as keyof FloorPlan] = this.getRandColor();
    }
    this.floorPlan = fp;
  }

  rand(room: string) {
    const fp = this.floorPlan;
    if (this.floorPlan[room as keyof FloorPlan]) {
      fp[room as keyof FloorPlan] = this.getRandColor();
    }
    this.floorPlan = fp;
  }

  getRandColor(): RoomColor {
    return randFromArray(this.colors);
  }
}
