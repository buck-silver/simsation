import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { BuildBudgetService } from '../services/build-budget.service';
import {
  BuildOccupancyService,
} from '../services/build-occupancy.service';
import {
  BuildSpecialService,
} from '../services/build-special.service';

@Component({
  imports: [MatDividerModule, MatExpansionModule, MatSliderModule, FormsModule],
  selector: 'suggestion-settings',
  template: `
    <mat-expansion-panel>
      <mat-expansion-panel-header>
        <mat-panel-title> Suggestion Settings </mat-panel-title>
      </mat-expansion-panel-header>
      <mat-divider></mat-divider>

      <section class="interval-setting">
        <h3>Range of Special Rooms or Items</h3>
        <p class="interval-info">
          Between
          <span class="interval-value">{{ specials.min() }}</span>
          and
          <span class="interval-value">{{ specials.max() }}</span>
          Specials
        </p>
        <mat-slider
          thumbLabel="thumbLabel"
          [min]="specials.MIN_BOUND"
          [max]="specials.MAX_BOUND"
          [step]="1"
          tickInterval="1"
          class="interval-slider"
        >
          <input
            matSliderStartThumb
            [ngModel]="specials.min()"
            (ngModelChange)="specials.setLower($event)"
          />
          <input
            matSliderEndThumb
            [ngModel]="specials.max()"
            (ngModelChange)="specials.setUpper($event)"
          />
        </mat-slider>
      </section>

      <mat-divider></mat-divider>

      <section class="interval-setting">
        <h3>Range of Sims</h3>
        <p class="interval-info">
          Between
          <span class="interval-value">{{ occupancy.min() }}</span>
          and
          <span class="interval-value">{{ occupancy.max() }}</span>
          Sims
        </p>
        <mat-slider
          thumbLabel="thumbLabel"
          [min]="occupancy.MIN_BOUND"
          [max]="occupancy.MAX_BOUND"
          [step]="1"
          tickInterval="1"
          class="interval-slider"
        >
          <input
            matSliderStartThumb
            [ngModel]="occupancy.min()"
            (ngModelChange)="occupancy.setLower($event)"
          />
          <input
            matSliderEndThumb
            [ngModel]="occupancy.max()"
            (ngModelChange)="occupancy.setUpper($event)"
          />
        </mat-slider>
      </section>

      <mat-divider></mat-divider>

      <section class="interval-setting">
        <h3>Range of Simoleons</h3>
        <p class="interval-info">
          Between
          <span class="interval-value">{{ budget.min() }}K</span>
          and
          <span class="interval-value">{{ budget.max() }}K</span>
          Simoleons
        </p>
        <mat-slider
          thumbLabel="thumbLabel"
          [min]="budget.MIN_BOUND"
          [max]="budget.MAX_BOUND"
          [step]="5"
          tickInterval="1"
          class="interval-slider"
        >
          <input
            matSliderStartThumb
            [ngModel]="budget.min()"
            (ngModelChange)="budget.setLower($event)"
          />
          <input
            matSliderEndThumb
            [ngModel]="budget.max()"
            (ngModelChange)="budget.setUpper($event)"
          />
        </mat-slider>
      </section>
    </mat-expansion-panel>
  `,
  styles: `
    :host {
      display: block;
      margin-bottom: 0.5rem;
    }

    .interval-info {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      font-size: 1em;
      line-height: 2.75em;
      padding: 0.25rem 0;
    }

    .interval-value {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.25em 0.25em;
      font-weight: bold;
      text-align: center;
      width: 2.75em;
      height: 2.75em;
      border-radius: 2.75em;
      background-color: var(--mat-sys-primary);
      color: var(--mat-sys-on-primary);
    }

    .interval-slider {
      box-sizing: border-box;
      width: 100%;
    }
  `,
})
export class SuggestionSettingsComponent {
  specials = inject(BuildSpecialService);
  occupancy = inject(BuildOccupancyService);
  budget = inject(BuildBudgetService);
}
