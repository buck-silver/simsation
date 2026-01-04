import { Component, input, output } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  selector: 'my-action-button',
  template: `
    <button
      matFab
      (click)="clicked()"
      [attr.aria-label]="aria()"
      [matTooltip]="tooltip()"
      [matTooltipPosition]="tooltipPosition()"
      [matTooltipHideDelay]="tooltipHideDelay()"
      [matTooltipShowDelay]="tooltipShowDelay()"
      [matTooltipDisabled]="tooltipDisabled()"
      [matTooltipClass]="tooltipClass()"
      color="accent"
    >
      <mat-icon>casino</mat-icon>
    </button>
  `,
  styles: ``,
})
export class MyActionButtonComponent {
  readonly onClick = output();

  readonly aria = input<string>('', { alias: 'aria-label' });

  readonly tooltip = input<string>('');

  readonly tooltipShowDelay = input<number>(500, {
    alias: 'tooltip-show-delay',
  });

  readonly tooltipHideDelay = input<number>(0, { alias: 'tooltip-hide-delay' });

  readonly tooltipPosition = input<
    'above' | 'below' | 'left' | 'right' | 'before' | 'after'
  >('below', { alias: 'tooltip-position' });

  readonly tooltipClass = input<string>('', { alias: 'tooltip-class' });

  readonly tooltipDisabled = input<boolean>(false, {
    alias: 'tooltip-disabled',
  });

  clicked() {
    this.onClick.emit();
  }
}
