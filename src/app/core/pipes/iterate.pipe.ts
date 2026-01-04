import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'iterate',
})
export class IteratePipe implements PipeTransform {
  transform(size: number, value?: number): number[] {
    // Fill an array with the specified size, using the provided value or
    // defaulting to the index
    return Array.from({ length: size }, (_, index) => value ?? index);
  }
}
