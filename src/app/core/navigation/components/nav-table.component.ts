import {
  Component,
  input,
  ViewChild,
  computed,
  afterRenderEffect,
} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';

@Component({
  selector: 'nav[table]',
  imports: [RouterModule, MatTableModule, MatSortModule],
  template: `
    @if (heading()) {
      <h2>{{ heading() }}</h2>
    }

    <table class="nav-table" mat-table [dataSource]="source()" matSort>
      <ng-container matColumnDef="title">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
        <td mat-cell *matCellDef="let route">
          <a
            class="nav-link link"
            [routerLink]="relativeTo() + route.path"
            routerLinkActive="matched-path"
          >
            {{ route.title }}
          </a>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `,
  styles: `
    h2 {
      font-size: var(--mat-sys-title-large-size);
    }

    .nav-table {
      a {
        margin-left: -0.5rem;
      }
    }

    .nav-link {
      text-decoration: none;
    }
  `,
})
export class NavTableComponent {
  readonly heading = input<string>();

  readonly relativeTo = input<string>('/');

  readonly routes = input.required<Routes>();

  @ViewChild(MatSort) sort!: MatSort;

  readonly displayedColumns = ['title'];

  readonly source = computed(
    () => new MatTableDataSource(this.routes().filter((route) => !!route.path))
  );

  constructor() {
    afterRenderEffect(() => {
      this.source().sort = this.sort;
    });
  }
}
