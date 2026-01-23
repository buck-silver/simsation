import { Injectable, inject, signal } from '@angular/core';
import { SimsBuildBudgetService } from './build-budget.service';
import { SimsBuildColorService } from './build-color.service';
import { SimsBuildLotTraitService } from './build-lot-trait.service';
import { SimsBuildReactionService } from './build-reaction.service';
import { SimsBuildOccupancyService } from './build-occupancy.service';
import { SimsBuildSpecialService } from './build-special.service';
import { SimsArchitectureService } from './build-architecture.service';
import { SimsBuildWorldService } from './build-world.service';
import { Stepper, StepperShift } from '../../../../../../lib/utils/stepper';

export type Suggestion = {
  value: string;
  reaction: string;
};

@Injectable({
  providedIn: 'any',
})
export class SimsRandomizerService {
  private stepper: Stepper<Suggestion> = new Stepper();
  private buildArchitecture = inject(SimsArchitectureService);
  private buildBudget = inject(SimsBuildBudgetService);
  private buildColor = inject(SimsBuildColorService);
  private buildLotTrait = inject(SimsBuildLotTraitService);
  private buildOccupancy = inject(SimsBuildOccupancyService);
  private buildReaction = inject(SimsBuildReactionService);
  private buildSpecial = inject(SimsBuildSpecialService);
  private buildWorld = inject(SimsBuildWorldService);

  private _isNavigating: boolean = false;
  get isNavigating(): boolean {
    return this._isNavigating;
  }

  readonly suggestion = signal<Suggestion>({
    value:
      'Welcome to the Sims 4 Build Randomizer! Click the casino icon to get a random build suggestion.',
    reaction: '👍',
  });

  hasNext = () => this.stepper.hasNext();

  hasPrevious = () => this.stepper.hasPrevious();

  next() {
    if (!this.stepper.hasNext()) return;
    const suggestion = this.stepper.toNext() as Suggestion;
    this._isNavigating = true;
    this.suggestion.set(suggestion);
  }

  previous() {
    if (!this.stepper.hasPrevious()) return;
    const suggestion = this.stepper.toPrevious() as Suggestion;
    this._isNavigating = true;
    this.suggestion.set(suggestion);
  }

  suggest() {
    const suggestion: Suggestion = {
      value: this.getBuild(),
      reaction: this.buildReaction.suggest(),
    };

    if (this.stepper.hasNext()) this.stepper.truncate();

    this.stepper.push([suggestion], false, StepperShift.END);
    this._isNavigating = false;
    this.suggestion.set(suggestion);
  }

  private getBuild(): string {
    const color = this.buildColor.suggest();
    const architecture = this.buildArchitecture.suggest(!color);
    const world = this.buildWorld.suggest();
    const lotTrait = this.buildLotTrait.suggest();
    const sims = this.buildOccupancy.suggest();
    const budget = this.buildBudget.suggest();
    const specials = this.buildSpecial.suggest();
    return `Build${color}${architecture}${world}${lotTrait}${sims}${budget}.${specials}`;
  }
}
