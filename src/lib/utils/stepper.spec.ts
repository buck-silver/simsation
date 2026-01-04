import { Stepper, StepperShift } from './stepper';

describe('Stepper', () => {
  let stepper: Stepper<string>;

  beforeEach(() => {
    stepper = new Stepper<string>();
  });

  //============================================================================
  // Fields and Properties
  //============================================================================
  describe('index', () => {
    it('should be 0 when constructed with no arguments', () => {
      expect(stepper.index).toEqual(0);
    });

    it('should be 0 when constructed with an empty array', () => {
      stepper = new Stepper<string>([]);
      expect(stepper.index).toEqual(0);
    });

    it('should be 0 when constructed with an array with at least one item', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.index).toEqual(0);
    });

    it('should be 0 when constructed with an empty array and a isLooping flag', () => {
      stepper = new Stepper<string>([], true);
      expect(stepper.index).toEqual(0);

      stepper = new Stepper<string>([], false);
      expect(stepper.index).toEqual(0);
    });

    it('should be 0 when constructed with an empty array and an index', () => {
      stepper = new Stepper<string>([], false, 1);
      expect(stepper.index).toEqual(0);
    });

    it('should be the passed value when constructed with a not empty array, a isLooping flag, and an index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], true, 1);
      expect(stepper.index).toEqual(1);
      stepper = new Stepper<string>(['a', 'b', 'c'], false, 1);
      expect(stepper.index).toEqual(1);
    });

    it('should be the looped value when constructed with a not empty array, a true isLooping flag, and an index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], true, -1);
      expect(stepper.index).toEqual(2);

      stepper = new Stepper<string>(['a', 'b', 'c'], true, 3);
      expect(stepper.index).toEqual(0);
    });

    it('should be the clamped value when constructed with a not empty array, a false isLooping flag, and an index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], false, -1);
      expect(stepper.index).toEqual(0);

      stepper = new Stepper<string>(['a', 'b', 'c'], false, 3);
      expect(stepper.index).toEqual(2);
    });

    it('should be 0 when the Stepper is empty', () => {
      stepper = new Stepper<string>([]);
      expect(stepper.index).toEqual(0);
    });

    it('should be the passed value when the Stepper is not empty and the index is set between 0 and the number of steps in the Stepper', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 1;
      expect(stepper.index).toEqual(1);
    });

    it('should be clamped to 0 when the Stepper is not empty and the index is set negative', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = -1;
      expect(stepper.index).toEqual(0);
    });

    it('should be clamped to the last index when the Stepper is not empty and the index is set greater than the number of steps in the Stepper', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 3;
      expect(stepper.index).toEqual(2);
    });

    it('should loop around the beginning of the Stepper when the Stepper is looping and the index is set negative', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      stepper.index = -1;
      expect(stepper.index).toEqual(2);
    });

    it('should loop around the end of the Stepper when the Stepper is looping and the index is set greater than the number of steps in the Stepper', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      stepper.index = 3;
      expect(stepper.index).toEqual(0);
    });
  });

  describe('isEmpty', () => {
    it('should be true when the Stepper is constructed with no arguments', () => {
      expect(stepper.isEmpty).toBe(true);
    });

    it('should be true when the Stepper is constructed with an empty array', () => {
      stepper = new Stepper<string>([]);
      expect(stepper.isEmpty).toBe(true);
    });

    it('should be false when the Stepper is constructed with an array with at least one item', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.isEmpty).toBe(false);
    });

    it('should not be affected when constructed with a isLooping flag or index', () => {
      stepper = new Stepper<string>([], true);
      expect(stepper.isEmpty).toBe(true);
      stepper = new Stepper<string>([], false);
      expect(stepper.isEmpty).toBe(true);
      stepper = new Stepper<string>([], true, 1);
      expect(stepper.isEmpty).toBe(true);
      stepper = new Stepper<string>([], false, 1);
      expect(stepper.isEmpty).toBe(true);
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      expect(stepper.isEmpty).toBe(false);
      stepper = new Stepper<string>(['a', 'b', 'c'], false);
      expect(stepper.isEmpty).toBe(false);
      stepper = new Stepper<string>(['a', 'b', 'c'], true, 1);
      expect(stepper.isEmpty).toBe(false);
      stepper = new Stepper<string>(['a', 'b', 'c'], false, 1);
      expect(stepper.isEmpty).toBe(false);
    });

    it('should be true when the Stepper is empty', () => {
      expect(stepper.steps).toEqual([]);
      expect(stepper.isEmpty).toBe(true);
    });

    it('should be false when the Stepper is not empty', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.steps).not.toEqual([]);
      expect(stepper.isEmpty).toBe(false);
    });
  });

  describe('isLooping', () => {
    it('should be false when constructed with no arguments', () => {
      expect(stepper.isLooping).toBe(false);
    });

    it('should be false when constructed with an empty array', () => {
      stepper = new Stepper<string>([]);
      expect(stepper.isLooping).toBe(false);
    });

    it('should be false when constructed with an array with at least one item', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.isLooping).toBe(false);
    });

    it('should be true when constructed with an array and isLooping is passed as true', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      expect(stepper.isLooping).toBe(true);
    });

    it('should be false when constructed with an array and isLooping is passed as false', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], false);
      expect(stepper.isLooping).toBe(false);
    });

    it('should be true when set to true', () => {
      stepper.isLooping = true;
      expect(stepper.isLooping).toBe(true);
    });

    it('should be false when set to false', () => {
      stepper.isLooping = true;
      expect(stepper.isLooping).toBe(true);
      stepper.isLooping = false;
      expect(stepper.isLooping).toBe(false);
    });
  });

  describe('lastIndex', () => {
    it('should be 0 when constructed with no arguments', () => {
      expect(stepper.lastIndex).toEqual(0);
    });

    it('should be 0 when constructed with an empty array', () => {
      stepper = new Stepper<string>([]);
      expect(stepper.lastIndex).toEqual(0);
    });

    it('should be the last index when constructed with an array with at least one item', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.lastIndex).toEqual(2);
    });

    it('should not be affected when constructed with a isLooping flag or index', () => {
      stepper = new Stepper<string>([], true);
      expect(stepper.lastIndex).toEqual(0);
      stepper = new Stepper<string>([], false);
      expect(stepper.lastIndex).toEqual(0);
      stepper = new Stepper<string>([], true, 1);
      expect(stepper.lastIndex).toEqual(0);
      stepper = new Stepper<string>([], false, 1);
      expect(stepper.lastIndex).toEqual(0);
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      expect(stepper.lastIndex).toEqual(2);
      stepper = new Stepper<string>(['a', 'b', 'c'], false);
      expect(stepper.lastIndex).toEqual(2);
      stepper = new Stepper<string>(['a', 'b', 'c'], true, 1);
      expect(stepper.lastIndex).toEqual(2);
      stepper = new Stepper<string>(['a', 'b', 'c'], false, 1);
      expect(stepper.lastIndex).toEqual(2);
    });

    it('should be 0 when the steps are empty', () => {
      stepper.steps = [];
      expect(stepper.lastIndex).toEqual(0);
    });

    it('should be 0 when there is only one step', () => {
      stepper.steps = ['a'];
      expect(stepper.lastIndex).toEqual(0);
    });

    it('should be the last index when there are multiple steps', () => {
      stepper.steps = ['a', 'b', 'c'];
      expect(stepper.lastIndex).toEqual(2);
    });

    it('should be the last index when the steps are changed', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.lastIndex).toEqual(2);
      stepper.steps = ['d', 'e', 'f', 'g'];
      expect(stepper.lastIndex).toEqual(3);
    });
  });

  describe('length', () => {
    it('should be 0 when constructed with no arguments', () => {
      expect(stepper.length).toEqual(0);
    });

    it('should be 0 when constructed with an empty array', () => {
      stepper = new Stepper<string>([]);
      expect(stepper.length).toEqual(0);
    });

    it('should be the number of steps when constructed with an array with at least one item', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.length).toEqual(3);
    });

    it('should not be affected when constructed with a isLooping flag or index', () => {
      stepper = new Stepper<string>([], true);
      expect(stepper.length).toEqual(0);
      stepper = new Stepper<string>([], false);
      expect(stepper.length).toEqual(0);
      stepper = new Stepper<string>([], true, 1);
      expect(stepper.length).toEqual(0);
      stepper = new Stepper<string>([], false, 1);
      expect(stepper.length).toEqual(0);
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      expect(stepper.length).toEqual(3);
      stepper = new Stepper<string>(['a', 'b', 'c'], false);
      expect(stepper.length).toEqual(3);
      stepper = new Stepper<string>(['a', 'b', 'c'], true, 1);
      expect(stepper.length).toEqual(3);
      stepper = new Stepper<string>(['a', 'b', 'c'], false, 1);
      expect(stepper.length).toEqual(3);
    });

    it('should be 0 when the steps are empty', () => {
      stepper.steps = [];
      expect(stepper.length).toEqual(0);
    });

    it('should be the number of steps when there are multiple steps', () => {
      stepper.steps = ['a', 'b', 'c'];
      expect(stepper.length).toEqual(3);
    });
  });

  describe('steps', () => {
    it('should be an empty array when constructed with no arguments', () => {
      expect(stepper.steps).toEqual([]);
    });

    it('should be an empty array when constructed with an empty array', () => {
      stepper = new Stepper<string>([]);
      expect(stepper.steps).toEqual([]);
    });

    it('should be the passed array when constructed with an array with at least one item', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.steps).toEqual(['a', 'b', 'c']);
    });

    it('should not be affected when constructed with a isLooping flag or index', () => {
      stepper = new Stepper<string>([], true);
      expect(stepper.steps).toEqual([]);
      stepper = new Stepper<string>([], false);
      expect(stepper.steps).toEqual([]);
      stepper = new Stepper<string>([], true, 1);
      expect(stepper.steps).toEqual([]);
      stepper = new Stepper<string>([], false, 1);
      expect(stepper.steps).toEqual([]);
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      expect(stepper.steps).toEqual(['a', 'b', 'c']);
      stepper = new Stepper<string>(['a', 'b', 'c'], false);
      expect(stepper.steps).toEqual(['a', 'b', 'c']);
      stepper = new Stepper<string>(['a', 'b', 'c'], true, 1);
      expect(stepper.steps).toEqual(['a', 'b', 'c']);
      stepper = new Stepper<string>(['a', 'b', 'c'], false, 1);
      expect(stepper.steps).toEqual(['a', 'b', 'c']);
    });

    it('should be the passed steps when set', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.steps = ['d', 'e', 'f', 'g'];
      expect(stepper.steps).toEqual(['d', 'e', 'f', 'g']);
    });
  });

  //============================================================================
  // Methods
  //============================================================================

  describe('at()', () => {
    it('should return undefined when the Stepper is empty', () => {
      expect(stepper.isEmpty).toEqual(true);
      expect(stepper.at(0)).toBeUndefined();
    });

    it('should return the step at the passed index when the Stepper is not empty', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.at(0)).toEqual('a');
      expect(stepper.at(1)).toEqual('b');
      expect(stepper.at(2)).toEqual('c');
    });

    it('should clamp the passed index to the limits of the Stepper (0 to length - 1) when the Stepper is not looping', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], false);
      expect(stepper.at(1)).toEqual('b');
      expect(stepper.at(3)).toEqual('c');
      expect(stepper.at(-1)).toEqual('a');
    });

    it('should relatively loop the passed index around the limits of the Stepper (0 to length - 1) when the Stepper is looping', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      expect(stepper.at(1)).toEqual('b');
      expect(stepper.at(3)).toEqual('a');
      expect(stepper.at(-1)).toEqual('c');
    });
  });

  describe('atCurrent()', () => {
    it('should return undefined when the Stepper is empty', () => {
      expect(stepper.isEmpty).toEqual(true);
      expect(stepper.atCurrent()).toBeUndefined();
    });

    it('should return the step at the current index when the Stepper is not empty', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 0;
      expect(stepper.atCurrent()).toEqual('a');
      stepper.index = 1;
      expect(stepper.atCurrent()).toEqual('b');
      stepper.index = 2;
      expect(stepper.atCurrent()).toEqual('c');
    });
  });

  describe('atFirst()', () => {
    it('should return undefined when the Stepper is empty', () => {
      expect(stepper.isEmpty).toEqual(true);
      expect(stepper.atFirst()).toBeUndefined();
    });

    it('should return the first step when the Stepper is not empty', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.atFirst()).toEqual('a');
    });
  });

  describe('atLast()', () => {
    it('should return undefined when the Stepper is empty', () => {
      expect(stepper.isEmpty).toEqual(true);
      expect(stepper.atLast()).toBeUndefined();
    });

    it('should return the last step when the Stepper is not empty', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.atLast()).toEqual('c');
    });
  });

  describe('atNext()', () => {
    it('should return undefined when the Stepper is empty', () => {
      expect(stepper.isEmpty).toEqual(true);
      expect(stepper.atNext()).toBeUndefined();
    });

    it('should return the next step when the Stepper is not empty', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.atNext()).toEqual('b');
    });

    it('should return the first step when the Stepper is not empty, is looping, and the current index is the last index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      stepper.index = 2;
      expect(stepper.atNext()).toEqual('a');
    });

    it('should return undefined when the Stepper is not empty, is not looping, and the current index is the last index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], false);
      stepper.index = 2;
      expect(stepper.atNext()).toBeUndefined();
    });
  });

  describe('atPrevious()', () => {
    it('should return undefined when the Stepper is empty', () => {
      expect(stepper.isEmpty).toEqual(true);
      expect(stepper.atPrevious()).toBeUndefined();
    });

    it('should return the previous step when the Stepper is not empty', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 2;
      expect(stepper.atPrevious()).toEqual('b');
    });

    it('should return the last step when the Stepper is not empty, is looping, and the current index is at the first index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      expect(stepper.atPrevious()).toEqual('c');
    });

    it('should return undefined when the Stepper is not empty, is not looping, and the current index is at the first index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], false);
      expect(stepper.atPrevious()).toBeUndefined();
    });
  });

  describe('hasNext()', () => {
    it('should return false when the Stepper is empty', () => {
      expect(stepper.isEmpty).toEqual(true);
      expect(stepper.hasNext()).toEqual(false);
    });

    it('should return true when the Stepper is not empty, and the next step is in limits', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.hasNext()).toEqual(true);
    });

    it('should return true when the Stepper is not empty, and the next step is out of limits, and the Stepper is looping', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      stepper.index = 2;
      expect(stepper.hasNext()).toEqual(true);
    });

    it('should return false when the Stepper is not empty, and the next step is out of limits, and the Stepper is not looping', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], false);
      stepper.index = 2;
      expect(stepper.hasNext()).toEqual(false);
    });
  });

  describe('hasPrevious()', () => {
    it('should return false when the Stepper is empty', () => {
      expect(stepper.isEmpty).toEqual(true);
      expect(stepper.hasPrevious()).toEqual(false);
    });

    it('should return true when the Stepper is not empty, and the previous step is in limits', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 2;
      expect(stepper.hasPrevious()).toEqual(true);
    });

    it('should return true when the Stepper is not empty, and the previous step is out of limits, and the Stepper is looping', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      expect(stepper.hasPrevious()).toEqual(true);
    });

    it('should return false when the Stepper is not empty, and the previous step is out of limits, and the Stepper is not looping', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], false);
      expect(stepper.hasPrevious()).toEqual(false);
    });
  });

  describe('clear()', () => {
    it('should clear the steps of the Stepper', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.clear();
      expect(stepper.steps).toEqual([]);
    });

    it('should set the index of the Stepper to 0', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.clear();
      expect(stepper.index).toEqual(0);
    });
  });

  describe('insert()', () => {
    it('should insert the passed step at the passed index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.insert('d', 1);
      expect(stepper.steps).toEqual(['a', 'd', 'b', 'c']);
    });

    it('should clamp the passed index inclusively to the limits of 0 and length', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.insert('d', -1);
      expect(stepper.steps).toEqual(['d', 'a', 'b', 'c']);
      stepper.insert('e', 5);
      expect(stepper.steps).toEqual(['d', 'a', 'b', 'c', 'e']);
    });

    it('should insert the passed step at the current index when the passed index is undefined', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 1;
      stepper.insert('d');
      expect(stepper.steps).toEqual(['a', 'd', 'b', 'c']);
    });

    it('should add the passed step at the end of the Stepper when the passed index is equal to the length of the Stepper', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.insert('d', stepper.length);
      expect(stepper.steps).toEqual(['a', 'b', 'c', 'd']);
    });

    it('should insert the passed step at index 0 when the Stepper is empty', () => {
      expect(stepper.length).toEqual(0);
      stepper.insert('a');
      expect(stepper.steps).toEqual(['a']);
      expect(stepper.length).toEqual(1);
    });

    it(`should shift the current index to the right by 1 when shiftIndex is passed as ${StepperShift.REMAIN} and the passed index is less than or equal to the current index`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 1;
      stepper.insert('d', 0);
      expect(stepper.index).toEqual(2);
      stepper.index = 1;
      stepper.insert('e', 1);
      expect(stepper.index).toEqual(2);
    });

    it(`should not shift the current index by 1 when shiftIndex is passed as ${StepperShift.REMAIN} and the passed index is greater than the current index`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 1;
      stepper.insert('d', 2);
      expect(stepper.index).toEqual(1);
    });

    it(`should shift the current index to 0 when shiftIndex is passed as ${StepperShift.START}`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 2;
      stepper.insert('d', 1, StepperShift.START);
      expect(stepper.index).toEqual(0);
    });

    it(`should shift the current index to the last index when shiftIndex is passed as ${StepperShift.END}`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.index).toEqual(0);
      stepper.insert('d', 1, StepperShift.END);
      expect(stepper.index).toEqual(3);
    });

    it('should shift the remaining steps from after the passed index to the right by 1', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.insert('d', 1);
      expect(stepper.steps).toEqual(['a', 'd', 'b', 'c']);
    });

    it('should return the new length of the Stepper', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.insert('d', 1)).toEqual(4);
    });
  });

  describe('pull()', () => {
    it('should default the amount to 1', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.pull()).toEqual(['c']);
    });

    it('should default fromStart to false', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.pull(1)).toEqual(['c']);
    });

    it('should default resetIndex to false', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 0;
      stepper.pull(1);
      expect(stepper.index).toEqual(0);
    });

    it('should remove and return an amount of steps from the end of the Stepper', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.pull(1, false)).toEqual(['c']);
      expect(stepper.steps).toEqual(['a', 'b']);
    });

    it('should remove and return an amount of steps from the start of the Stepper', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.pull(1, true)).toEqual(['a']);
      expect(stepper.steps).toEqual(['b', 'c']);
    });

    it('should clamp the amount inclusively to the limits of 0 and length', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      // clamp to 0
      expect(stepper.pull(-1, true)).toEqual([]);
      // clamp to length (3)
      expect(stepper.pull(5, true)).toEqual(['a', 'b', 'c']);
    });

    it('should return an array of the removed steps', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.pull(stepper.length)).toEqual(['a', 'b', 'c']);
      expect(stepper.steps).toEqual([]);
    });

    it('should return an empty array when the amount is 0', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.pull(0)).toEqual([]);
      expect(stepper.steps).toEqual(['a', 'b', 'c']);
    });

    it(`should not shift the current index when shiftIndex is passed as ${StepperShift.REMAIN} or is undefined`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e']);
      stepper.index = 1;
      // Passed as REMAIN
      stepper.pull(1, false, StepperShift.REMAIN);
      expect(stepper.index).toEqual(1);
      // Passed as undefined
      stepper.pull(1, false);
      expect(stepper.index).toEqual(1);
    });

    it(`should reset the current index to 0 when shiftIndex is passed as ${StepperShift.START}`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e']);
      stepper.index = 1;
      stepper.pull(1, true, StepperShift.START);
      expect(stepper.index).toEqual(0);
    });

    it(`should reset the current index to the last index when shiftIndex is passed as ${StepperShift.END}`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e']);
      stepper.index = 1;
      stepper.pull(1, false, StepperShift.END);
      expect(stepper.index).toEqual(3);
    });

    it('should shift the current index to the left by the amount removed from the start', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 2;
      stepper.pull(1, true);
      expect(stepper.index).toEqual(1);
    });

    it('should clamp the current index to 0 when the amount removed from the start is greater than the current index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e']);
      stepper.index = 1;
      stepper.pull(2, true);
      expect(stepper.index).toEqual(0);
    });

    it('should clamp the current index to the length of the Stepper when the amount removed from the end is greater than the length of the Stepper minus the current index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e']);
      stepper.index = 4;
      stepper.pull(1, false);
      expect(stepper.index).toEqual(3);
    });
  });

  describe('push()', () => {
    it('should push a step to the end of the Stepper', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.push(['d'], false);
      expect(stepper.steps).toEqual(['a', 'b', 'c', 'd']);
    });

    it('should push a step to the start of the Stepper', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.push(['d'], true);
      expect(stepper.steps).toEqual(['d', 'a', 'b', 'c']);
    });

    it('should push multiple steps to the end of the Stepper', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.push(['d', 'e', 'f'], false);
      expect(stepper.steps).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    });

    it('should push multiple steps to the start of the Stepper', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.push(['d', 'e', 'f'], true);
      expect(stepper.steps).toEqual(['d', 'e', 'f', 'a', 'b', 'c']);
    });

    it('should push to the end of the stepper by default', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.push(['d']);
      expect(stepper.steps).toEqual(['a', 'b', 'c', 'd']);
    });

    it('should return the length of the Stepper after the steps have been pushed', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.push(['d'])).toEqual(4);
    });

    it('should shift the current index to the right by the amount pushed to the start', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 1;
      stepper.push(['d'], true);
      expect(stepper.index).toEqual(2);
    });

    it('should not shift the current index when pushing to the end', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 1;
      stepper.push(['d'], false);
      expect(stepper.index).toEqual(1);
    });

    it(`should not shift the current index when shiftIndex is passed as ${StepperShift.REMAIN} or is undefined`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e']);
      stepper.index = 1;
      // Passed as REMAIN
      stepper.push(['f'], false, StepperShift.REMAIN);
      expect(stepper.index).toEqual(1);
      // Passed as undefined
      stepper.push(['f'], false);
      expect(stepper.index).toEqual(1);
    });

    it(`should shift the current index to 0 when shiftIndex is passed as ${StepperShift.START}`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e']);
      stepper.index = 1;
      stepper.push(['f'], true, StepperShift.START);
      expect(stepper.index).toEqual(0);
    });

    it(`should shift the current index to the last index when resetIndex is passed as ${StepperShift.END}`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e']);
      stepper.index = 1;
      stepper.push(['f'], true, StepperShift.END);
      expect(stepper.index).toEqual(5);
    });
  });

  describe('remove()', () => {
    it('should return undefined when the Stepper is empty', () => {
      expect(stepper.remove(0)).toBeUndefined();
    });

    it('should remove and return the step at the passed index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.remove(1)).toEqual('b');
    });

    it('should default to the current index when the passed index is undefined', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 1;
      expect(stepper.remove()).toEqual('b');
    });

    it('should clamp the passed index to the limits of the Stepper (0 to length - 1)', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.remove(stepper.length)).toEqual('c');
      expect(stepper.remove(-1)).toEqual('a');
    });

    it(`should shift the current index to 0 when shiftIndex is passed as ${StepperShift.START}`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 2;
      stepper.remove(0, StepperShift.START);
      expect(stepper.index).toEqual(0);
    });

    it(`should shift the current index to the last index when shiftIndex is passed as ${StepperShift.END}`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 2;
      stepper.remove(0, StepperShift.END);
      expect(stepper.index).toEqual(1);
    });

    it(`should shift the current index to the left by 1 when the current index is greater than the passed index when shiftIndex is passed as ${StepperShift.REMAIN} or undefined`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e', 'f']);
      stepper.index = 3;
      stepper.remove(0);
      expect(stepper.index).toEqual(2);
    });

    it('should clamp the current index to the limits of the Stepper (0 to length - 1) when it would no longer be valid after removal', () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e', 'f']);
      stepper.index = 5;
      stepper.remove(0);
      expect(stepper.index).toEqual(4);
      stepper = new Stepper<string>(['a']);
      stepper.index = 0;
      stepper.remove(0);
      expect(stepper.index).toEqual(0);
    });

    it(`should not shift the current index when the current index is less than or equal the passed index when shiftIndex is passed as ${StepperShift.REMAIN} or undefined`, () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e', 'f']);
      stepper.index = 1;
      stepper.remove(4);
      expect(stepper.index).toEqual(1);
      stepper.remove(1);
      expect(stepper.index).toEqual(1);
    });
  });

  describe('set()', () => {
    it('should set a step at the passed index and return the replaced step', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.set('d', 1)).toEqual('b');
      expect(stepper.at(1)).toEqual('d');
    });

    it('should default to the current index when the passed index is undefined', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 1;
      expect(stepper.set('d')).toEqual('b');
      expect(stepper.at(1)).toEqual('d');
    });

    it('should add a step to the end of the Stepper when the passed index is greater than the length of the Stepper', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.set('d', stepper.length)).toBeUndefined();
      expect(stepper.steps).toEqual(['a', 'b', 'c', 'd']);
    });

    it('should clamp the passed index to the limits of the Stepper (0 to length)', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.set('d', stepper.length + 1)).toBeUndefined();
      expect(stepper.set('e', -1)).toEqual('a');
      expect(stepper.steps).toEqual(['e', 'b', 'c', 'd']);
    });
  });

  describe('to()', () => {
    it('should set the current index to the passed index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.index).toEqual(0);
      stepper.to(1);
      expect(stepper.index).toEqual(1);
    });

    it('should set the current index to 0 when the Stepper is empty', () => {
      expect(stepper.isEmpty).toBe(true);
      expect(stepper.index).toEqual(0);
      stepper.to(1);
      expect(stepper.index).toEqual(0);
    });

    it('should return undefined when the Stepper is empty', () => {
      expect(stepper.isEmpty).toBe(true);
      expect(stepper.to(1)).toBeUndefined();
    });

    it('should return the step at the passed index when the Stepper is not empty', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.index).toEqual(0);
      expect(stepper.to(1)).toEqual('b');
    });

    it('should clamp the current index to the limits of the Stepper (0 to length - 1) when the Stepper is not looping', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], false);
      stepper.to(1);
      expect(stepper.index).toEqual(1);
      stepper.to(3);
      expect(stepper.index).toEqual(2);
      stepper.to(-1);
      expect(stepper.index).toEqual(0);
    });

    it('should relatively loop the current index around the limits of the Stepper (0 to length -1) when the Stepper is looping', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      stepper.to(1);
      expect(stepper.index).toEqual(1);
      stepper.to(3);
      expect(stepper.index).toEqual(0);
      stepper.to(-1);
      expect(stepper.index).toEqual(2);
    });
  });

  describe('toFirst()', () => {
    it('should set the current index to 0', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.index).toEqual(0);
      stepper.toFirst();
      expect(stepper.index).toEqual(0);
    });

    it('should return undefined when the Stepper is empty', () => {
      expect(stepper.isEmpty).toBe(true);
      expect(stepper.toFirst()).toBeUndefined();
    });

    it('should return the first step when the Stepper is not empty', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.toFirst()).toEqual('a');
    });
  });

  describe('toLast()', () => {
    it('should set the current index to the length of the Stepper - 1', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.index).toEqual(0);
      stepper.toLast();
      expect(stepper.index).toEqual(2);
    });

    it('should set the current index to 0 when the Stepper is empty', () => {
      expect(stepper.isEmpty).toBe(true);
      expect(stepper.index).toEqual(0);
      stepper.toLast();
      expect(stepper.index).toEqual(0);
    });

    it('should return undefined when the Stepper is empty', () => {
      expect(stepper.isEmpty).toBe(true);
      expect(stepper.toLast()).toBeUndefined();
    });

    it('should return the last step when the Stepper is not empty', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      expect(stepper.toLast()).toEqual('c');
    });
  });

  describe('toNext()', () => {
    it('should increment the current index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 1;
      expect(stepper.index).toEqual(1);
      stepper.toNext();
      expect(stepper.index).toEqual(2);
    });

    it('should set the current index to 0 when the stepper is empty', () => {
      expect(stepper.isEmpty).toBe(true);
      expect(stepper.index).toEqual(0);
      stepper.toNext();
      expect(stepper.index).toEqual(0);
    });

    it('should return undefined when the Stepper is empty', () => {
      expect(stepper.isEmpty).toBe(true);
      expect(stepper.toNext()).toBeUndefined();
    });

    it('should return the next step when the Stepper is not empty', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 1;
      expect(stepper.toNext()).toEqual('c');
    });

    it('should clamp the current index to the limits of the Stepper (0 to length - 1) when the Stepper is not looping', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], false);
      stepper.to(1);
      expect(stepper.index).toEqual(1);
      stepper.toNext();
      expect(stepper.index).toEqual(2);
      stepper.toNext();
      expect(stepper.index).toEqual(2);
    });

    it('should relatively loop the current index around the limits of the Stepper (0 to length -1) when the Stepper is looping', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      stepper.to(1);
      expect(stepper.index).toEqual(1);
      stepper.toNext();
      expect(stepper.index).toEqual(2);
      stepper.toNext();
      expect(stepper.index).toEqual(0);
    });
  });

  describe('toPrevious()', () => {
    it('should decrement the current index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 1;
      expect(stepper.index).toEqual(1);
      stepper.toPrevious();
      expect(stepper.index).toEqual(0);
    });

    it('should set the current index to 0 when the stepper is empty', () => {
      expect(stepper.isEmpty).toBe(true);
      expect(stepper.index).toEqual(0);
      stepper.toPrevious();
      expect(stepper.index).toEqual(0);
    });

    it('should return undefined when the Stepper is empty', () => {
      expect(stepper.isEmpty).toBe(true);
      expect(stepper.toPrevious()).toBeUndefined();
    });

    it('should return the previous step when the Stepper is not empty', () => {
      stepper = new Stepper<string>(['a', 'b', 'c']);
      stepper.index = 1;
      expect(stepper.toPrevious()).toEqual('a');
    });

    it('should clamp the current index to the limits of the Stepper (0 to length - 1) when the Stepper is not looping', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], false);
      stepper.to(1);
      expect(stepper.index).toEqual(1);
      stepper.toPrevious();
      expect(stepper.index).toEqual(0);
      stepper.toPrevious();
      expect(stepper.index).toEqual(0);
    });

    it('should relatively loop the current index around the limits of the Stepper (0 to length -1) when the Stepper is looping', () => {
      stepper = new Stepper<string>(['a', 'b', 'c'], true);
      stepper.to(1);
      expect(stepper.index).toEqual(1);
      stepper.toPrevious();
      expect(stepper.index).toEqual(0);
      stepper.toPrevious();
      expect(stepper.index).toEqual(2);
    });
  });

  describe('truncate()', () => {
    it('should remove all steps after the current index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
      stepper.to(3);
      expect(stepper.length).toEqual(7);
      stepper.truncate();
      expect(stepper.length).toEqual(4);
      expect(stepper.steps).toEqual(['a', 'b', 'c', 'd']);
    });

    it('should return the truncated steps', () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
      stepper.to(3);
      expect(stepper.truncate()).toEqual(['e', 'f', 'g']);
    });

    it('should remove all the steps after the passed index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
      expect(stepper.length).toEqual(7);
      stepper.truncate(3);
      expect(stepper.length).toEqual(4);
      expect(stepper.steps).toEqual(['a', 'b', 'c', 'd']);
    });

    it('should return the truncated steps when passed an index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
      expect(stepper.truncate(3)).toEqual(['e', 'f', 'g']);
    });

    it('should remove all the steps after the first step when passed 0', () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
      expect(stepper.length).toEqual(7);
      stepper.truncate(0);
      expect(stepper.length).toEqual(1);
      expect(stepper.steps).toEqual(['a']);
    });

    it('should return the truncated steps when passed 0', () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
      expect(stepper.truncate(0)).toEqual(['b', 'c', 'd', 'e', 'f', 'g']);
    });

    it('should shift the current index to the last index when the current index is greater than the passed index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
      stepper.to(5);
      expect(stepper.index).toEqual(5);
      stepper.truncate(3);
      expect(stepper.index).toEqual(3);
    });

    it('should not shift the current index when the current index is less than the passed index', () => {
      stepper = new Stepper<string>(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
      stepper.to(1);
      expect(stepper.index).toEqual(1);
      stepper.truncate(3);
      expect(stepper.index).toEqual(1);
    });

    it('should do nothing when the Stepper is empty', () => {
      expect(stepper.isEmpty).toBe(true);
      expect(stepper.length).toEqual(0);
      expect(stepper.index).toEqual(0);
      stepper.truncate();
      expect(stepper.isEmpty).toBe(true);
      expect(stepper.length).toEqual(0);
      expect(stepper.index).toEqual(0);
    });

    it('should return an empty array when the Stepper is empty', () => {
      expect(stepper.isEmpty).toBe(true);
      expect(stepper.truncate()).toEqual([]);
    });
  });
});
