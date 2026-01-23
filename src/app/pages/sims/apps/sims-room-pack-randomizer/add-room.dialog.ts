import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'add-room-dialog',
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  template: `
    <h2 mat-dialog-title>Add New Room</h2>
    <mat-dialog-content>
      <p>Please enter a name to add to the room list</p>
      <mat-form-field appearance="outline">
        <mat-label>Room Name</mat-label>
        <input matInput #name autocomplete="off" />
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close cdkFocusInitial>Cancel</button>
      <button mat-raised-button color="primary" [mat-dialog-close]="name.value">Add Room</button>
    </mat-dialog-actions>
  `,
  styles: `
    mat-dialog-content {
      padding: 1.25rem 1.5rem;
      min-width: 25rem;

      p {
        margin: 0 0 1rem 0;
      }

      mat-form-field {
        width: 100%;
      }
    }

    mat-dialog-actions {
      padding: 0.5rem 1rem;
      justify-content: flex-end;
      gap: 0.5rem;
    }
  `,
})
export class AddRoomDialog {
  dialogRef = inject<MatDialogRef<AddRoomDialog>>(MatDialogRef);
}
