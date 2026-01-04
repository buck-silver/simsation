import { clamp } from '../math/clamp';
import { wrapNumber } from '../math/wrap-number';

/**
 * The possible values to shift the current index to. START and END will shift
 * the index to the first and last index of the Stepper respectively. REMAIN
 * will shift the index to remain with the current step if possible.
 */
export enum StepperShift {
  /**
   * Shifts the current index to remain with the current step if possible.
   */
  REMAIN = 'REMAIN',

  /**
   * Shifts the index to the first index of the Stepper.
   */
  START = 'START',

  /**
   * Shifts the index to the last index of the Stepper.
   */
  END = 'END',
}

export class Stepper<T = any> {
  /**
   * @param steps - The individual steps within the Stepper.
   *
   * @param isLooping - Whether or not the Stepper should be treated as looping.
   * When the Stepper is not looping, the index will be clamped to the limits
   * of the Stepper. When the Stepper is looping, the index will loop
   * accordingly when it overflows or underflows the steps within the Stepper.
   * Defaults to false.
   *
   * @param index - The starting index of the Stepper. It will be clamped or
   * looped accordingly to the Stepper's looping flag. Defaults to 0.
   */
  constructor(steps?: T[], isLooping?: boolean, index?: number) {
    this._steps = steps ?? [];
    this._isLooping = isLooping ?? false;

    // Duplicates adjustIndex logic in case adjustIndex is overridden.
    if (this._steps.length === 0) {
      this._index = 0;
    } else if (this.isLooping) {
      this._index = wrapNumber(index ?? 0, this._steps.length - 1);
    } else {
      this._index = clamp(index ?? 0, this._steps.length - 1);
    }
  }

  //============================================================================
  // Fields and Properties
  //============================================================================
  /**
   * The internal 0 based current index of the Stepper.
   */
  protected _index: number = 0;

  /**
   * The 0 based current index of the Stepper. Defaults to 0.
   *
   * @remarks
   * The 0 based current index of the Stepper. Defaults to 0.
   *
   * When the Stepper is empty, it will be 0.
   *
   * When the Stepper is not looping, it will be clamped to the limits of the
   * Stepper (0 and length - 1).
   *
   * When the Stepper is looping, it will be relatively looped around the limits
   * of the Stepper (0 and length - 1).
   */
  get index(): number {
    return this._index;
  }

  set index(value: number) {
    this._index = this.fitIndex(value);
  }

  /**
   * A flag representing whether or not the Stepper is empty.
   *
   * @returns
   * Returns true or false if the Stepper is empty.
   */
  get isEmpty(): boolean {
    return this._steps.length === 0;
  }

  /**
   * The internal looping flag.
   */
  protected _isLooping: boolean = false;

  /**
   * A flag representing whether or not the Stepper is looping, which determines
   * how the adjusting the index behaves.
   *
   * @default false
   *
   * @remarks
   * This flag determines how adjusting the index behaves.
   *
   * When false, the current index will be clamped to the limits of the Stepper
   * (0 to length - 1).
   *
   * When true, the current index will wrap around the limits of the Stepper
   * (0 to length - 1).
   */
  get isLooping(): boolean {
    return this._isLooping;
  }

  set isLooping(value: boolean) {
    this._isLooping = value;
  }

  /**
   * The last index of the Stepper.
   *
   * @returns
   * When the Stepper is empty, 0 will be returned. When the Stepper is not
   * empty, one less the length of the Stepper will be returned.
   */
  get lastIndex(): number {
    return this._steps.length === 0 ? 0 : this._steps.length - 1;
  }

  /**
   * The length of the Stepper.
   *
   * @returns
   * The number of steps within the Stepper.
   */
  get length(): number {
    return this._steps.length;
  }

  /**
   * The internal steps within the Stepper.
   */
  protected _steps: T[] = [];

  /**
   * The steps within the Stepper.
   *
   * @returns
   * A copy of the steps within the Stepper.
   *
   * @remarks
   * This represents the steps within the Stepper, returning a copy of the
   * steps. When set, it will also reset the current index to 0.
   */
  get steps(): T[] {
    return [...this._steps];
  }

  set steps(value: T[]) {
    this._steps = value;
    this._index = 0;
  }

  //============================================================================
  // Methods
  //============================================================================
  /**
   * Fits a passed index to be within the limits of the Stepper.
   *
   * @param index - The index to fit.
   *
   * @remarks
   * Fits a passed index to be within the limits of the Stepper.
   *
   * When the Stepper is empty, 0 will be returned.
   *
   * When the Stepper is not looping, the passed index will be clamped to the
   * limits of the Stepper (0 to length - 1).
   *
   * When the Stepper is looping, the passed index will be relatively looped
   * around the limits of the Stepper (0 to length - 1).
   *
   * (Note: This method does not set the current index of the Stepper. It only
   * validates the passed index.)
   */
  protected fitIndex(index: number): number {
    if (this._steps.length === 0) {
      return 0;
    } else if (this._isLooping) {
      return wrapNumber(index, this._steps.length - 1);
    } else {
      return clamp(index, this._steps.length - 1);
    }
  }

  /**
   * Returns a step at a passed index. This is affected by the looping flag.
   *
   * @param index - The index of the step to return.
   *
   * @returns
   * The step at the passed index. When the stepper is empty, undefined will be
   * returned.
   *
   * @remarks
   * Returns a step at the passed index. This is affected by the looping flag.
   *
   * When the Stepper is empty, undefined will be returned.
   *
   * When the Stepper is not empty, the step at the passed index will be
   * returned.
   *
   * When the Stepper is not looping, the passed index will be clamped to the
   * limits of the Stepper (0 to length - 1).
   *
   * When the Stepper is looping, the passed index will relatively loop around
   * the limits of the Stepper (0 to length - 1).
   *
   * (Note: Unlike {@link to}, this method does not set the current index of the
   * Stepper.)
   */
  at(index: number): T | undefined {
    if (this._steps.length === 0) return undefined;
    else {
      index = this.fitIndex(index);
      return this._steps[index];
    }
  }

  /**
   * Returns the step at the current index.
   *
   * @returns
   * The current step.
   *
   * @remarks
   * Returns the step at the current index.
   *
   * When the Stepper is empty, undefined will be returned.
   *
   * When the Stepper is not empty, the step at the current index will be
   * returned.
   */
  atCurrent(): T | undefined {
    if (this._steps.length === 0) return undefined;
    else return this._steps[this._index];
  }

  /**
   * Returns the first step.
   *
   * @returns
   * The first step.
   *
   * @remarks
   * Returns the first step.
   *
   * When the Stepper is empty, undefined will be returned.
   *
   * When the Stepper is not empty, the first step will be returned.
   *
   * (Note: Unlike {@link toFirst}, this method does not set the current index.)
   */
  atFirst(): T | undefined {
    if (this._steps.length === 0) return undefined;
    else return this._steps[0];
  }

  /**
   * Returns the last step.
   *
   * @returns
   * The last step.
   *
   * @remarks
   * Returns the last step.
   *
   * When the Stepper is empty, undefined will be returned.
   *
   * When the Stepper is not empty, the last step will be returned.
   *
   * (Note: Unlike {@link toLast}, this method does not set the current index.)
   */
  atLast(): T | undefined {
    if (this._steps.length === 0) return undefined;
    else return this._steps[this._steps.length ? this._steps.length - 1 : 0];
  }

  /**
   * Returns the next step.
   *
   * @returns
   * The next step.
   *
   * @remarks
   * Returns the next step.
   *
   * When the Stepper is empty, undefined will be returned.
   *
   * When the Stepper is not empty, the next step will be returned.
   *
   * When the Stepper is not empty, and the next step is out of limits, and
   * the Stepper is looping, the first step will be returned.
   *
   * When the Stepper is not empty, and the next step is out of limits, and
   * the Stepper is not looping, undefined will be returned.
   *
   * (Note: Unlike {@link toNext}, this method does not set the current index.)
   */
  atNext(): T | undefined {
    // When Stepper is empty, return undefined.
    if (this._steps.length === 0) return undefined;

    // Get the index of the next step.
    const idx = this._index + 1;

    // When Stepper is not empty, and the next step is out of limits ...
    if (idx > this._steps.length - 1) {
      // When Stepper is looping, return the first step.
      if (this._isLooping) {
        return this._steps[0];
      }
      // When Stepper is not looping, return undefined.
      else {
        return undefined;
      }
    }
    // When Stepper is not empty, and the next step is within limits, return the
    // next step.
    else {
      return this._steps[idx];
    }
  }

  /**
   * Returns the previous step.
   *
   * @returns
   * The previous step.
   *
   * @remarks
   * Returns the previous step.
   *
   * When the Stepper is empty, undefined will be returned.
   *
   * When the Stepper is not empty, the previous step will be returned.
   *
   * When the Stepper is not empty, and the previous step is out of limits,
   * and the Stepper is looping, the last step will be returned.
   *
   * When the Stepper is not empty, and the previous step is out of limits,
   * and the Stepper is not looping, undefined will be returned.
   *
   * (Note: Unlike {@link toPrevious}, this method does not set the current
   * index.)
   */
  atPrevious(): T | undefined {
    // When Stepper is empty, return undefined.
    if (this._steps.length === 0) return undefined;

    // Get the index of the previous step.
    const idx = this._index - 1;

    // When Stepper is not empty, and the previous step is out of limits ...
    if (idx < 0) {
      // When Stepper is looping, return the last step.
      if (this._isLooping) {
        return this._steps[this._steps.length - 1];
      }
      // When Stepper is not looping, return undefined.
      else {
        return undefined;
      }
    }
    // When Stepper is not empty, and the previous step is within limits, return
    // the previous step.
    else {
      return this._steps[idx];
    }
  }

  /**
   * Returns whether or not the Stepper has a next step.
   *
   * @returns
   * True or false if the Stepper has a next step.
   *
   * @remarks
   * Returns whether or not the Stepper has a next step.
   *
   * When the Stepper is empty, false will be returned.
   *
   * When the Stepper is not empty, and the Stepper is looping, true will be
   * returned.
   *
   * When the Stepper is not empty, and the Stepper is not looping, and the
   * current index is at the last step, false will be returned.
   */
  hasNext(): boolean {
    if (this._steps.length === 0) return false;
    else if (this._isLooping) return true;
    else return this._index < this._steps.length - 1;
  }

  /**
   * Returns whether or not the Stepper has a previous step.
   *
   * @returns
   * True or false if the Stepper has a previous step.
   *
   * @remarks
   * Returns whether or not the Stepper has a previous step.
   *
   * When the Stepper is empty, false will be returned.
   *
   * When the Stepper is not empty, and the Stepper is looping, true will be
   * returned.
   *
   * When the Stepper is not empty, and the Stepper is not looping, and the
   * current index is at the first step, false will be returned.
   */
  hasPrevious(): boolean {
    if (this._steps.length === 0) return false;
    else if (this._isLooping) return true;
    else return this._index > 0;
  }

  /**
   * Clears the steps from the Stepper.
   *
   * @remarks
   * Clears the steps from the Stepper and will reset the index to 0.
   */
  clear(): void {
    this._steps = [];
    this._index = 0;
  }

  /**
   * Inserts a step at the passed index and returns the new length of the
   * Stepper.
   *
   * @param step - The step to insert.
   *
   * @param index - The optional index to insert the step at. It is clamped
   * inclusively to the limits of 0 and length. Defaults to the current index.
   *
   * @param shiftIndex - The optional flag to shift the current index. Defaults
   * to undefined. Defaults to REMAIN.
   *
   * @returns
   * The new length of the Stepper.
   *
   * @remarks
   * Inserts a step at the passed index and returns the new length of the
   * Stepper.
   *
   * This method will clamp the passed index inclusively to the limits of 0 and
   * length. This means that when the passed index is less than 0, the step will
   * be added at index 0. When the passed index is greater than the length of
   * the Stepper, the step will be added at the end of the Stepper.
   *
   * This method also shifts the remaining steps from after the passed index to
   * the right by 1.
   *
   * When shiftIndex is either REMAIN or undefined, the current index will be
   * shifted to remain with the current step.
   *
   * When shiftIndex is equal to either START or END, the current index will be
   * set to the start or end of the Stepper respectively.
   */
  insert(step: T, index?: number, shiftIndex?: StepperShift): number {
    index = clamp(index ?? this._index, 0, this._steps.length);
    this._steps.splice(index, 0, step);
    if (shiftIndex === StepperShift.START) {
      this._index = 0;
    } else if (shiftIndex === StepperShift.END) {
      this._index = this._steps.length - 1;
    } else if (this._index >= index) {
      this._index++;
    }
    return this._steps.length;
  }

  /**
   * Removes an amount of steps at the start or end of the Stepper, and returns
   * them. This may shift the current index under certain conditions.
   *
   * @param amount - The optional amount of steps to remove. Defaults to 1. It
   * is clamped inclusively to the limits of 0 and length.
   *
   * @param fromStart - The optional flag to remove steps from either the start
   * or end of the Stepper Defaults to false. When true, it will remove from the
   * start of the Stepper. When false, it will remove from the end of the
   * Stepper.
   *
   * @param shiftIndex - The optional flag to shift the current index. Defaults
   * to REMAIN.
   *
   * @returns
   * An array of the removed steps.
   *
   * @remarks
   * Removes an amount of steps at the start or end of the Stepper, and returns
   * them. This may shift the current index under certain conditions. The amount
   * of steps removed is clamped inclusively to the limits of 0 and length. The
   * default amount is 1.
   *
   * When fromStart is false, it will remove steps from the end of the Stepper.
   * This is the default behavior.
   *
   * When fromStart is true, it will remove from steps the start of the Stepper.
   *
   * When shiftIndex is either REMAIN or undefined, the current index will be
   * shifted to remain with the current step.
   *
   * When shiftIndex is equal to either START or END, the current index will be
   * set to the start or end of the Stepper respectively.
   *
   * (Note: This removes steps from either the start or end of the Stepper. If
   * you wanted to remove steps from an arbitrary index use {@link remove}
   * instead.)
   *
   * (Note 2: This method is not affected by the isLooping flag.)
   */
  pull(
    amount: number = 1,
    fromStart: boolean = false,
    shiftIndex?: StepperShift
  ): T[] {
    // Clamp the amount to the limits of 0 and length.
    amount = clamp(amount, 0, this._steps.length);

    // Remove the steps from the start or end of the Stepper.
    const steps = this._steps.splice(
      fromStart ? 0 : this._steps.length - amount,
      amount
    );

    // Shift the index to the start of the Stepper.
    if (shiftIndex === StepperShift.START) {
      this._index = 0;
    }
    // Shift the index to the end of the Stepper.
    else if (shiftIndex === StepperShift.END) {
      this._index = this.lastIndex;
    }
    // Default shifting behavior: Shift the index to remain with the current
    // step. Clamps the index to the limits of 0 and length in case the current
    // step was removed.
    else {
      this._index = clamp(
        fromStart ? this._index - amount : this._index,
        0,
        this.lastIndex
      );
    }

    return steps;
  }

  /**
   * Adds steps to the start or end of the Stepper, and returns the new length.
   *
   * @param steps - The steps to add.
   *
   * @param fromStart - The optional flag to add the steps to the start of the
   * Stepper. Defaults to false. When true, it will add the steps to the start
   * of the Stepper. When false, it will add the steps to the end of the
   * Stepper.
   *
   * @param shiftIndex - The optional flag to shift the current index. Defaults
   * to REMAIN.
   *
   * @returns
   * The new length of the Stepper.
   *
   * @remarks
   * Adds steps to the start or end of the Stepper, and returns the new length.
   * When adding steps to the start of the stepper, this may shift the current
   * index to the right by the amount of steps added. The default behavior is to
   * add the steps to the end of the Stepper.
   *
   * When fromStart is false, it will add steps to the end of the Stepper. This
   * is the default behavior.
   *
   * When fromStart is true, it will add steps to the start of the Stepper.
   *
   * When shiftIndex is either REMAIN or undefined, the current index will be
   * shifted to remain with the current step.
   *
   * When shiftIndex is equal to either START or END, the current index will be
   * set to the start or end of the Stepper respectively.
   *
   * (Note 1: This adds steps to either the start or end of the Stepper. If you
   * wanted to add steps to an arbitrary index use {@link insert} instead.)
   *
   * (Note 2: This method is not affected by the isLooping flag.)
   */
  push(
    steps: T[],
    fromStart: boolean = false,
    shiftIndex?: StepperShift
  ): number {
    // Add the steps to the start or end of the Stepper.
    if (fromStart) {
      this._steps.unshift(...steps);
    } else {
      this._steps.push(...steps);
    }

    // Shift the index to the start of the Stepper.
    if (shiftIndex === StepperShift.START) {
      this._index = 0;
    }
    // Shift the index to the end of the Stepper.
    else if (shiftIndex === StepperShift.END) {
      this._index = this.lastIndex;
    }
    // Default shifting behavior: When pushing to the start of the stepper,
    // shift the index to the right by the amount of steps added to the start.
    else if (fromStart) {
      this._index = this._index + steps.length;
    }
    // Otherwise, do not shift the index when adding to the end of the Stepper.

    return this._steps.length;
  }

  /**
   * Removes a step at the passed index and returns it.
   *
   * @param index - The optional index of the step to remove. It is clamped
   * inclusively to the limits of 0 and length - 1. Defaults to the current
   * index.
   *
   * @param shiftIndex - The optional flag to shift the current index. Defaults
   * to REMAIN.
   *
   * @returns
   * The step that was removed.
   *
   * @remarks
   * Removes a step at the passed index and returns it. When the Stepper is
   * empty, undefined will be returned.
   *
   * When shiftIndex is either REMAIN or undefined, the current index will be
   * shifted to remain with the current step. If the current step was removed,
   * the current index will remain unchanged. If the current index would no
   * longer be valid, it will be clamped to the limits of the Stepper (0 and
   * length - 1).
   *
   * When shiftIndex is equal to either START or END, the current index will be
   * set to the start or end of the Stepper respectively.
   */
  remove(index?: number, shiftIndex?: StepperShift): T | undefined {
    // When steps is empty, return undefined
    if (this._steps.length === 0) {
      return undefined;
    }

    // Clamp the passed index to the limits of the Stepper
    index = clamp(index ?? this._index, 0, this._steps.length - 1);

    // Remove the requested step
    const step = this._steps.splice(index, 1)[0];

    // Shift the index to the start of the Stepper.
    if (shiftIndex === StepperShift.START) {
      this._index = 0;
    }
    // Shift the index to the end of the Stepper.
    else if (shiftIndex === StepperShift.END) {
      this._index = this.lastIndex;
    }
    // Shift the index to remain with the current step. Clamps the index to the
    // limits of 0 and length in case the current step was the first or last
    // step.
    else if (index < this._index) {
      this._index = clamp(this._index - 1, 0, this.lastIndex);
    }

    return step;
  }

  /**
   * Sets a step at the passed index, and returns the replaced step.
   *
   * @param step - The step to set.
   *
   * @param index - The optional index to set the step at. It is clamped
   * inclusively to the limits of 0 and length. Defaults to the current index.
   *
   * @returns
   * The replaced step if it exists, otherwise undefined.
   *
   * When the passed index is equal to the length of the Stepper, the step will
   * be added to the end of the Stepper.
   */
  set(step: T, index?: number): T | undefined {
    const idx = clamp(index ?? this._index, 0, this._steps.length);
    const replaced = this._steps[idx];
    this._steps[idx] = step;
    return replaced;
  }

  /**
   * Moves the Stepper to the step at the passed index and returns it.
   *
   * @param index - The index to move the Stepper to. It is clamped to the
   * limits of 0 to length - 1. When the Stepper is looping, it is relatively
   * looped around the limits of the Stepper instead.
   *
   * @returns
   * The step at the passed index.
   *
   * @remarks
   * Moves the Stepper to the step at the passed index and returns it. When the
   * Stepper is empty, undefined will be returned.
   *
   * When the Stepper is looping, the passed index will be looped around the
   * limits of the Stepper. For example, when the Stepper is looping and the
   * passed index is -1, the current index will be set to the last index of the
   * Stepper.
   *
   * When the Stepper is not looping, the passed index will be clamped to the
   * limits of 0 and length - 1. For example, when the Stepper is not looping
   * and the passed index is -1, the current index will be set to 0.
   *
   * (Note: Unlike {@link at}, this method sets the current index to the passed
   * index.)
   */
  to(index: number): T | undefined {
    index = this.fitIndex(index);
    this._index = index;
    return this._steps[this._index];
  }

  /**
   * Moves the Stepper to the first step and returns it.
   *
   * @returns
   * The first step.
   *
   * @remarks
   * Moves the Stepper to the first step and returns it. When the Stepper is
   * empty, undefined will be returned.
   *
   * (Note: Unlike {@link atFirst}, this method sets the current index to 0.)
   */
  toFirst(): T | undefined {
    this._index = 0;
    return this._steps[this._index];
  }

  /**
   * Moves the Stepper to the last step and returns it.
   *
   * @returns
   * The last step.
   *
   * @remarks
   * Moves the Stepper to the last step and returns it. When the Stepper is
   * empty, undefined will be returned.
   *
   * (Note: Unlike {@link atLast}, this method sets the current index to the
   * last index.)
   */
  toLast(): T | undefined {
    this._index = this.steps.length ? this._steps.length - 1 : 0;
    return this._steps[this._index];
  }

  /**
   * Moves the Stepper to the next step and returns it.
   *
   * @returns
   * The next step.
   *
   * @remarks
   * Moves the Stepper to the next step and returns it. When the Stepper is
   * empty, undefined will be returned.
   *
   * When the Stepper is looping, the current index will be looped around the
   * limits of the Stepper. For example, when the Stepper is looping and the
   * current index is the last index of the Stepper, the current index will be
   * set to 0.
   *
   * When the Stepper is not looping, the current index will be clamped to the
   * limits of 0 and length - 1. For example, when the Stepper is not looping
   * and the current index is the last index of the Stepper, the current index
   * will be set to the last index of the Stepper.
   *
   * (Note: Unlike {@link atNext}, this method increments the current index.)
   */
  toNext(): T | undefined {
    const next = this.atNext();
    this._index = this.fitIndex(this._index + 1);
    return next;
  }

  /**
   * Moves the Stepper to the previous step and returns it.
   *
   * @returns
   * The previous step.
   *
   * @remarks
   * Moves the Stepper to the previous step and returns it. When the Stepper is
   * empty, undefined will be returned.
   *
   * When the Stepper is looping, the current index will be looped around the
   * limits of the Stepper. For example, when the Stepper is looping and the
   * current index is 0, the current index will be set to the last index of the
   * Stepper.
   *
   * When the Stepper is not looping, the current index will be clamped to the
   * limits of 0 and length - 1. For example, when the Stepper is not looping
   * and the current index is 0, the current index will be set to 0.
   *
   * (Note: Unlike {@link atPrevious}, this method decrements the current
   * index.)
   */
  toPrevious(): T | undefined {
    const prev = this.atPrevious();
    this._index = this.fitIndex(this._index - 1);
    return prev;
  }

  /**
   * Truncates the Stepper, removing all steps after the passed index.
   *
   * @param index - The optional index to truncate the Stepper from. It is
   * clamped to the limits of 0 to length - 1. Defaults to the current index.
   *
   * @returns
   * The truncated steps.
   *
   * @remarks
   * Truncates the Stepper, removing all steps after the passed index. In the
   * event the current index is truncated, the current index will be shifted to
   * the last index of the Stepper.
   */
  truncate(index?: number): T[] {
    if (this._steps.length === 0) return [];
    const idx = clamp(index ?? this._index, 0, this._steps.length - 1) + 1;
    const truncated = this._steps.splice(idx);
    if (this._index >= idx) {
      this._index = this.lastIndex;
    }
    return truncated;
  }
}
