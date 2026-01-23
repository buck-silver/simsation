import { afterNextRender, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AddRoomDialog } from './add-room.dialog';
import { RoomListService } from './room-list.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AssetPipe } from '../../../../core/pipes/asset.pipe';

@Component({
  selector: 'room-list',
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    AssetPipe,
  ],
  template: `
    <section class="common-controls">
      <button matButton="tonal" (click)="openAddRoomDialog()">
        <mat-icon>add</mat-icon>
        Add Room
      </button>
      <button matButton="tonal" (click)="removeAll()">
        <mat-icon>delete_sweep</mat-icon>
        Remove All
      </button>
    </section>

    <ul class="room-list">
      @let rooms = svc.rooms();
      @if (rooms.length === 0) {
        <li class="empty-state">
          <mat-icon class="empty-state-icon">home_work</mat-icon>
          <p>No rooms yet. Add a room to get started.</p>
          <button matButton="tonal" (click)="openAddRoomDialog()">
            <mat-icon>add</mat-icon>
            Add Room
          </button>
        </li>
      }
      @for (room of rooms; track $index; let i = $index) {
        <li class="room-item" [class.locked]="room.locked">
          <button
            class="room-icon-button"
            [disabled]="room.locked"
            (click)="randomize(i)"
            [matTooltip]="
              room.locked ? 'Unlock to randomize' : 'Randomize ' + room.name
            "
            [matTooltipShowDelay]="tooltipDelay"
          >
            <img
              class="room-icon"
              [src]="room.pack.icon | asset"
              [alt]="room.pack.name"
              crossorigin="anonymous"
            />
          </button>

          <span class="room-pack">
            {{ room.pack.name }}
          </span>

          <input
            type="text"
            class="room-name"
            [disabled]="room.locked"
            [(ngModel)]="room.name"
            (blur)="onRoomNameChange(i, room.name)"
            (keydown.enter)="$any($event.target).blur()"
            [attr.aria-label]="'Room name'"
            placeholder="Room name"
          />

          <button
            matIconButton
            class="room-lock"
            (click)="toggleLock(i)"
            [matTooltip]="room.locked ? 'Unlock' : 'Lock'"
            [matTooltipShowDelay]="tooltipDelay"
          >
            <mat-icon>{{ room.locked ? 'lock' : 'lock_open' }}</mat-icon>
          </button>

          <button
            matIconButton
            class="room-delete"
            (click)="remove(i)"
            matTooltip="Remove"
            [matTooltipShowDelay]="tooltipDelay"
          >
            <mat-icon>delete</mat-icon>
          </button>
        </li>
      }
    </ul>
  `,
  styles: `
    :host {
      display: block;
      margin-bottom: 1rem;
    }

    .common-controls {
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 0;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem 1rem;
      color: var(--mat-sys-on-surface-variant);
      gap: 1rem;

      .empty-state-icon {
        font-size: 4rem;
        width: 4rem;
        height: 4rem;
        margin-bottom: 1rem;
        opacity: 0.5;
      }

      p {
        margin: 0;
        font: var(--mat-sys-body-large);
        letter-spacing: var(--mat-sys-body-large-tracking);
      }
    }

    .room-list {
      list-style: none;
      padding: 0;
      margin: 0;
      border: 1px solid var(--mat-sys-outline);
      border-radius: var(--mat-sys-corner-large);
      overflow: hidden;
    }

    .room-item {
      display: grid;
      grid-template-columns: auto auto 1fr auto auto;
      grid-template-rows: auto auto;
      grid-template-areas:
        'icon pack .    lock delete'
        'icon name name lock delete';
      align-items: center;
      padding: 0.5rem 1rem;
      border-bottom: 1px solid var(--mat-sys-outline);
      transition: background-color 0.2s ease;
      gap: 0rem 1rem;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background-color: var(--mat-sys-surface-container-high);
      }

      &.locked {
        background-color: var(--mat-sys-surface-container-low);

        .room-name {
          opacity: 0.6;
        }
      }
    }

    .room-icon-button {
      grid-area: icon;
      padding: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      border-radius: var(--mat-sys-corner-small);
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;

      &:hover:not(:disabled) {
        transform: scale(1.05);
        box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.2);
      }

      &:active:not(:disabled) {
        transform: scale(0.95);
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
      }

      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--mat-sys-primary);
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      &:hover:not(:disabled)::after {
        opacity: 0.1;
      }
    }

    .room-icon {
      display: block;
      width: 3rem;
      height: 3rem;
      border-radius: var(--mat-sys-corner-extra-small);
      object-fit: cover;
    }

    .room-pack {
      grid-area: pack;
      padding: 0 0 0 0.25rem;
      font: var(--mat-sys-body-large);
      letter-spacing: var(--mat-sys-body-large-tracking);
      font-weight: var(--mat-sys-label-large-weight-prominent);
      color: var(--mat-sys-on-surface-variant);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .room-name {
      grid-area: name;
      width: 100%;
      font: var(--mat-sys-body-medium);
      letter-spacing: var(--mat-sys-body-medium-tracking);
      color: var(--mat-sys-on-surface);
      background: transparent;
      border: 1px solid transparent;
      padding: 0.25rem;
      outline: none;
      transition: all 0.2s ease;

      &:hover:not(:focus):not(:disabled) {
        border-bottom: 1px solid var(--mat-sys-on-surface-variant);
      }

      &:focus {
        border-color: var(--mat-sys-primary);
        border-radius: var(--mat-sys-corner-extra-small);
        background-color: var(--mat-sys-secondary-container);
        color: var(--mat-sys-on-secondary-container);
      }
    }

    .room-lock {
      grid-area: lock;
    }
    .room-delete {
      grid-area: delete;
    }
    .room-lock,
    .room-delete {
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .room-item:hover .room-lock,
    .room-item:hover .room-delete,
    .room-item.locked .room-lock,
    .room-lock:focus-visible,
    .room-delete:focus-visible {
      opacity: 1;
    }

    @media (hover: none) {
      .room-lock,
      .room-delete {
        opacity: 1;
      }
    }
  `,
})
export class RoomListComponent {
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  protected readonly svc = inject(RoomListService);
  protected readonly tooltipDelay = 500;
  private readonly HINT_KEY = 'room-randomizer-hint-shown';

  constructor() {
    afterNextRender(() => {
      if (!localStorage.getItem(this.HINT_KEY)) {
        this.showHint();
        localStorage.setItem(this.HINT_KEY, 'true');
      }
    });
  }

  private showHint(): void {
    this.snackBar.open(
      'Click pack icons to randomize, room names to edit!',
      'Got it',
      {
        duration: 10000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      }
    );
  }

  protected openAddRoomDialog(): void {
    this.dialog
      .open(AddRoomDialog)
      .afterClosed()
      .subscribe((name) => name?.trim() && this.svc.add(name.trim()));
  }

  protected onRoomNameChange(index: number, name: string): void {
    const trimmed = name?.trim();
    if (trimmed) {
      this.svc.rename(index, trimmed);
    } else {
      this.svc.rooms.update((rooms) => [...rooms]);
    }
  }

  protected randomize(index: number): void {
    this.svc.randOne(index);
  }

  protected toggleLock(index: number): void {
    this.svc.toggleRoomLock(index);
  }

  protected remove(index: number): void {
    this.svc.remove(index);
  }

  protected removeAll(): void {
    this.svc.removeAll();
  }
}
