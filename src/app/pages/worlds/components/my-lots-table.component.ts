import { computed, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export type LotData = {
  type: string;
  name: string;
  size: string;
  bulldozedPrice?: number | string;
  family?: string;
  sqft?: number | string;
  deposit?: number | string;
  rent?: number | string;
  bulldozedRent?: number | string;
};

@Component({
  selector: 'my-lots-table',
  imports: [CurrencyPipe, MatTableModule],
  template: `
    <p>
      Below is all the data for Lot Type, Name, Size, Bulldozed Price, Family,
      and Price per Lot Size.
    </p>

    <table mat-table [dataSource]="data()">
      <!-- Type Column -->
      <ng-container matColumnDef="type">
        <th mat-header-cell *matHeaderCellDef>Lot Type</th>
        <td mat-cell *matCellDef="let lot">{{ lot.type }}</td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef>Name</th>
        <td mat-cell *matCellDef="let lot">{{ lot.name }}</td>
      </ng-container>

      <!-- Size Column -->
      <ng-container matColumnDef="size">
        <th mat-header-cell *matHeaderCellDef>Size</th>
        <td mat-cell *matCellDef="let lot">{{ lot.size }}</td>
      </ng-container>

      <!-- Bulldozed Price Column -->
      <ng-container matColumnDef="bulldozedPrice">
        <th mat-header-cell *matHeaderCellDef>Bulldozed Price</th>
        <td mat-cell *matCellDef="let lot">
          {{
            typeof lot.bulldozedPrice === 'number'
              ? (lot.bulldozedPrice | currency: 'USD' : 'symbol' : '1.0-0')
              : lot.bulldozedPrice
          }}
        </td>
      </ng-container>

      <!-- Family Column -->
      <ng-container matColumnDef="family">
        <th mat-header-cell *matHeaderCellDef>Family</th>
        <td mat-cell *matCellDef="let lot">{{ lot.family }}</td>
      </ng-container>

      <!-- Sqft Column -->
      <ng-container matColumnDef="sqft">
        <th mat-header-cell *matHeaderCellDef>Sqft.</th>
        <td mat-cell *matCellDef="let lot">{{ lot.sqft }}</td>
      </ng-container>

      <!-- Deposit Column -->
      <ng-container matColumnDef="deposit">
        <th mat-header-cell *matHeaderCellDef>Deposit</th>
        <td mat-cell *matCellDef="let lot">
          {{
            typeof lot.deposit === 'number'
              ? (lot.deposit | currency: 'USD' : 'symbol' : '1.0-0')
              : lot.deposit
          }}
        </td>
      </ng-container>

      <!-- Rent Column -->
      <ng-container matColumnDef="rent">
        <th mat-header-cell *matHeaderCellDef>Rent/Week</th>
        <td mat-cell *matCellDef="let lot">
          {{
            typeof lot.rent === 'number'
              ? (lot.rent | currency: 'USD' : 'symbol' : '1.0-0')
              : lot.rent
          }}
        </td>
      </ng-container>

      <!-- Bulldozed Rent Column -->
      <ng-container matColumnDef="bulldozedRent">
        <th mat-header-cell *matHeaderCellDef>Bulldozed Rental Price/Day</th>
        <td mat-cell *matCellDef="let lot">
          {{
            typeof lot.bulldozedRent === 'number'
              ? (lot.bulldozedRent | currency: 'USD' : 'symbol' : '1.0-0')
              : lot.bulldozedRent
          }}
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedCols()"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedCols()"></tr>
    </table>
  `,
})
export class MyLotsTableComponent {
  data = input.required<LotData[]>();

  private readonly optionalCols = [
    { key: 'bulldozedPrice', check: (lot: LotData) => lot.bulldozedPrice != null },
    { key: 'family', check: (lot: LotData) => lot.family != null },
    { key: 'sqft', check: (lot: LotData) => lot.sqft != null },
    { key: 'deposit', check: (lot: LotData) => lot.deposit != null },
    { key: 'rent', check: (lot: LotData) => lot.rent != null },
    { key: 'bulldozedRent', check: (lot: LotData) => lot.bulldozedRent != null },
  ] as const;

  displayedCols = computed(() => {
    const columns = ['type', 'name', 'size'];
    const dataItems = this.data();

    for (const col of this.optionalCols) {
      if (dataItems.some(col.check)) {
        columns.push(col.key);
      }
    }

    return columns;
  });
}
