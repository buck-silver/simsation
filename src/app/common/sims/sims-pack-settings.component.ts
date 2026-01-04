import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SIMS_PACK_STORE } from './sims-pack-cache-token';

@Component({
  selector: 'sims-pack-settings',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
  ],
  template: `
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title>Pack Settings</mat-panel-title>
      </mat-expansion-panel-header>
      <section class="categories">
        @for (pack of packs.mappedByType() | keyvalue; track pack.key) {
          <section class="category">
            <div class="category-label">
              <button mat-icon-button [matMenuTriggerFor]="menu">
                <mat-icon>more_vert</mat-icon>
              </button>
              <mat-menu #menu="matMenu">
                <button
                  mat-menu-item
                  (click)="packs.toggleByType(pack.key, true)"
                >
                  <mat-icon>check</mat-icon>
                  Enable all
                </button>
                <button
                  mat-menu-item
                  (click)="packs.toggleByType(pack.key, false)"
                >
                  <mat-icon>clear</mat-icon>
                  Disable all
                </button>
              </mat-menu>
              <h3>{{ pack.key }}</h3>
            </div>
            <mat-divider></mat-divider>
            <section class="pack-grid">
              @for (pack of pack.value; track pack.name) {
                <mat-checkbox
                  class="pack-toggle"
                  [checked]="pack.enabled"
                  (change)="packs.toggleByPack(pack)"
                  color="primary"
                  >{{ pack.name }}</mat-checkbox
                >
              }
            </section>
          </section>
        }
      </section>
    </mat-expansion-panel>
  `,
  styles: `
    .categories {
      margin: 0;
      padding: 0;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .category {
      width: 100%;
      display: block;
      flex-shrink: 0;
      margin: 1.5rem 0;
    }

    .category-label {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      padding: 0;
      margin: 0;

      h3 {
        padding: 0;
        margin: 0;
      }
    }

    .pack-grid {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-rows: 2rem;
    }

    .pack-toggle {
      margin: 0.5em 1em;
    }
  `,
})
export class SimsPackSettingsComponent {
  packs = inject(SIMS_PACK_STORE);
}
