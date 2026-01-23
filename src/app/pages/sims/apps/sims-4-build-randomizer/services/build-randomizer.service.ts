import { Injectable, inject, signal } from '@angular/core';
import { BuildBudgetService } from './build-budget.service';
import { BuildColorService } from './build-color.service';
import { BuildLotTraitService } from './build-lot-trait.service';
import { BuildReactionService } from './build-reaction.service';
import { BuildOccupancyService } from './build-occupancy.service';
import { BuildSpecialService } from './build-special.service';
import { BuildArchitectureService } from './build-architecture.service';
import { BuildWorldService } from './build-world.service';
import { Stepper, StepperShift } from '../../../../../../lib/utils/stepper';

export type Suggestion = {
  value: string;
  reaction: string;
};

@Injectable({
  providedIn: 'any',
})
export class BuildRandomizerService {
  private stepper: Stepper<Suggestion> = new Stepper();
  private buildArchitecture = inject(BuildArchitectureService);
  private buildBudget = inject(BuildBudgetService);
  private buildColor = inject(BuildColorService);
  private buildLotTrait = inject(BuildLotTraitService);
  private buildOccupancy = inject(BuildOccupancyService);
  private buildReaction = inject(BuildReactionService);
  private buildSpecial = inject(BuildSpecialService);
  private buildWorld = inject(BuildWorldService);

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
