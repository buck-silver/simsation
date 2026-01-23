import { Injectable, inject, signal, type WritableSignal } from '@angular/core';
import type { SimsPack } from '../../../common/sims/types/sims-pack';
import { SIMS_PACK_STORE } from '../../../common/sims/sims-pack-cache-token';

type RoomData = {
  name: string;
  locked: boolean;
  pack: SimsPack;
};

@Injectable({
  providedIn: 'any',
})
export class RoomListService {
  private store = inject(SIMS_PACK_STORE);

  rooms: WritableSignal<RoomData[]> = signal<RoomData[]>([
    { name: 'Exterior', locked: false, pack: this.randPack() },
    { name: 'Kitchen', locked: false, pack: this.randPack() },
    { name: 'Living Room', locked: false, pack: this.randPack() },
    { name: 'Dining Room', locked: false, pack: this.randPack() },
    { name: 'Main Bedroom', locked: false, pack: this.randPack() },
    { name: 'Ensuite', locked: false, pack: this.randPack() },
    { name: 'Kids 1', locked: false, pack: this.randPack() },
    { name: 'Kids 2', locked: false, pack: this.randPack() },
    { name: 'Office', locked: false, pack: this.randPack() },
    { name: 'Bathroom', locked: false, pack: this.randPack() },
    { name: 'Laundry', locked: false, pack: this.randPack() },
    { name: 'Hallway', locked: false, pack: this.randPack() },
    { name: 'Yard', locked: false, pack: this.randPack() },
  ]);

  add(name: string) {
    this.rooms.update((r) => [
      ...r,
      {
        name,
        locked: false,
        pack: this.randPack(),
      },
    ]);
  }

  remove(idx: number) {
    this.rooms.update((r) => r.filter((_, i) => i !== idx));
  }

  removeAll() {
    this.rooms.set([]);
  }

  rename(idx: number, name: string) {
    this.rooms.update((r) =>
      r.map((room, i) => (i === idx ? { ...room, name } : room))
    );
  }

  toggleRoomLock(idx: number) {
    this.rooms.update((r) =>
      r.map((room, i) => (i === idx ? { ...room, locked: !room.locked } : room))
    );
  }

  randAll() {
    this.rooms.update((r) =>
      r.map((room) =>
        room.locked ? room : { ...room, pack: this.randPack() }
      )
    );
  }

  randOne(idx: number) {
    this.rooms.update((r) =>
      r.map((room, i) => {
        if (i !== idx || room.locked) return room;
        return { ...room, pack: this.randPack() };
      })
    );
  }

  private randPack(): SimsPack {
    return (
      this.store.randOne() ?? {
        name: '',
        icon: '',
        type: '',
        enabled: true,
      }
    );
  }
}
