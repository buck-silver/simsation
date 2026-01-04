/// <reference types="google-publisher-tag" />
import { Component, afterNextRender, input } from '@angular/core';

@Component({
  selector: 'page-ad, [pageAd]',
  host: {
    class: 'page-ad',
  },
  template: `
    <div class="ad-container">
      <div [id]="adId()" class="ad-slot"></div>
    </div>
  `,
  styles: `
    :host {
      grid-area: page-ad;
      position: sticky;
      box-sizing: border-box;
      padding: 1rem;
      bottom: 0;
      border-radius: 1rem;
      background-color: var(--mat-sys-surface);
      color: var(--mat-sys-on-surface);
      z-index: 1;
    }

    .ad-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    @container (width > 80rem) {
      :host {
        position: sticky;
        top: 0;
        width: 20rem;
        height: 20rem;
      }
    }
  `,
})
export class PageAdComponent {
  readonly adUnit = input<string>('/23295613577/test-medium-rectangle');
  readonly adId = input('banner-ad');

  constructor() {
    afterNextRender(() => {
      // if (!window.googletag) {
      //   console.warn('googletag is not defined');
      //   return;
      // }

      // window.googletag.pubads().enableSingleRequest();

      // window.googletag.cmd.push(() => {
      //   window.googletag
      //     .defineSlot(this.adUnit(), 'fluid', this.adId())
      //     ?.addService(window.googletag.pubads());
      //   window.googletag.enableServices();
      //   window.googletag.display(this.adId());
      // });
    });
  }
}
