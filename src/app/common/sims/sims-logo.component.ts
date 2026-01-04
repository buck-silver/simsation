import { Component, Directive, Input, input } from '@angular/core';
import { LogoDirective } from '../../core/logo/logo.directive';

const ASSETS_PATH = Object.freeze<Record<string, string>>({
  common: 'sims/common/logos',
  sims_1: 'sims/sims_1/logos',
  sims_2: 'sims/sims_2/logos',
  sims_3: 'sims/sims_3/logos',
  sims_4: 'sims/sims_4/logos',
});

export type SimsLogoVersion = 'sims' | '1' | '2' | '3' | '4';

@Directive({
  selector: 'img[simsLogo]',
})
export class SimsLogoDirective extends LogoDirective{
  @Input()
  version: SimsLogoVersion = 'sims';

  override ngOnInit(): void {
    switch (this.version) {
      case '1':
        this.srcDark = `${ASSETS_PATH['sims_1']}/sims-1-logo-dark.png`;
        this.srcLight = `${ASSETS_PATH['sims_1']}/sims-1-logo-light.png`;
        this.defaultHeight = '84px';
        this.defaultAlt = 'The Sims\u2122 1 Logo';
        this.defaultTitle = 'The Sims\u2122 1 Logo';
        break;
      case '2':
        this.srcDark = `${ASSETS_PATH['sims_2']}/sims-2-logo-dark.png`;
        this.srcLight = `${ASSETS_PATH['sims_2']}/sims-2-logo-light.png`;
        this.defaultHeight = '98px';
        this.defaultAlt = 'The Sims\u2122 2 Logo';
        this.defaultTitle = 'The Sims\u2122 2 Logo';
        break;
      case '3':
        this.srcDark = `${ASSETS_PATH['sims_3']}/sims-3-logo-dark.png`;
        this.srcLight = `${ASSETS_PATH['sims_3']}/sims-3-logo-light.png`;
        this.defaultHeight = '125px';
        this.defaultAlt = 'The Sims\u2122 3 Logo';
        this.defaultTitle = 'The Sims\u2122 3 Logo';
        break;
      case '4':
        this.srcDark = `${ASSETS_PATH['sims_4']}/sims-4-logo-dark.png`;
        this.srcLight = `${ASSETS_PATH['sims_4']}/sims-4-logo-light.png`;
        this.defaultHeight = '70px';
        this.defaultAlt = 'The Sims\u2122 4 Logo';
        this.defaultTitle = 'The Sims\u2122 4 Logo';
        break;
      default:
        this.srcDark = `${ASSETS_PATH['common']}/sims-logo-dark.png`;
        this.srcLight = `${ASSETS_PATH['common']}/sims-logo-light.png`;
        this.defaultHeight = '64px';
        this.defaultAlt = 'The Sims\u2122 Logo';
        this.defaultTitle = 'The Sims\u2122 Logo';
    }

    super.ngOnInit();
  }
}

@Component({
  imports: [SimsLogoDirective],
  selector: 'sims-logo',
  template: ` <img simsLogo [version]="version()" /> `,
  styles: [
    `
      :host {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class SimsLogoComponent {
  readonly version = input<SimsLogoVersion>('sims');
}
