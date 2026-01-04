import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageModule } from '../../../core/page/page.module';
import { PageDirective } from '../../../core/page/components/page.directive';
import { Sims4Achievement } from '../../../common/sims/types/sims-4-achievement';
import { AssetPipe } from '../../../core/pipes/asset.pipe';

@Component({
  imports: [CommonModule, PageModule, AssetPipe],
  selector: 'li[sims-4-achievement]',
  hostDirectives: [PageDirective],
  host: {
    '[id]': '`a-${data().name}`',
  },
  template: `
    @let achievement = data();
    <div class="achievement-icon-wrapper">
      <img
        [src]="achievement.icon | asset"
        class="achievement-icon"
        alt="Achievement Icon"
        crossorigin="anonymous"
      />
    </div>
    <h3 class="achievement-title">{{ achievement.name }}</h3>
    <h4 class="achievement-description">
      {{ achievement.description }}
    </h4>
    <div class="achievement-details">
      <div class="detail-item">
        <span class="detail-label">Pack</span>
        <span class="detail-value">{{ achievement.pack }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Type</span>
        <span class="detail-value detail-badge">{{ achievement.type }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Points</span>
        <span class="detail-value detail-points">{{ achievement.points }}</span>
      </div>
    </div>
  `,
  styles: `
    :host {
      margin: 0;
      padding: 1rem;
      display: grid;
      width: 100%;
      grid-template-columns: 64px 1fr;
      grid-template-rows: auto auto 1fr;
      gap: 0.75rem 1rem;
      grid-template-areas:
        'icon title'
        'icon description'
        'icon details';
      transition: all 0.2s ease;
    }

    :host(.showcase) {
      background-color: var(--mat-sys-primary-container);
      color: var(--mat-sys-on-primary-container);
    }

    .achievement-icon-wrapper {
      box-sizing: border-box;
      grid-area: icon;
      place-self: center center;
      width: 64px;
      height: 64px;
      border-radius: 8px;
      background: var(--mat-sys-surface-variant);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .achievement-icon {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .achievement-title {
      grid-area: title;
      font-weight: 600;
      font-size: 1.25rem;
      margin: 0;
      padding: 0;
      align-self: end;
      line-height: 1.2;
    }

    .achievement-description {
      grid-area: description;
      font-size: 0.875rem;
      margin: 0;
      padding: 0;
      color: var(--mat-sys-on-surface-variant);
      line-height: 1.4;
    }

    :host(.showcase) .achievement-description {
      color: var(--mat-sys-on-primary-container);
      opacity: 0.9;
    }

    .achievement-details {
      grid-area: details;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 0.5rem;
      margin-top: 0.5rem;
      align-self: start;
    }

    .detail-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .detail-label {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--mat-sys-on-surface-variant);
      opacity: 0.8;
    }

    :host(.showcase) .detail-label {
      color: var(--mat-sys-on-primary-container);
      opacity: 0.7;
    }

    .detail-value {
      font-size: 0.875rem;
      font-weight: 500;
    }

    .detail-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: var(--mat-sys-secondary-container);
      color: var(--mat-sys-on-secondary-container);
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
      width: fit-content;
    }

    :host(.showcase) .detail-badge {
      background: var(--mat-sys-primary);
      color: var(--mat-sys-on-primary);
    }

    .detail-points {
      font-weight: 700;
      font-size: 1rem;
      color: var(--mat-sys-primary);
    }

    :host(.showcase) .detail-points {
      color: var(--mat-sys-on-primary-container);
    }

    @media (max-width: 600px) {
      :host {
        grid-template-areas:
          'icon title'
          'icon description'
          'details details';
        grid-template-columns: 64px 1fr;
        grid-template-rows: auto auto auto;
      }
    }

    @media (max-width: 500px) {
      :host {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto;
        grid-template-areas:
          'icon'
          'title'
          'description'
          'details';
        text-align: center;
      }

      .achievement-icon-wrapper {
        margin: 0 auto;
      }

      .achievement-details {
        grid-template-columns: 1fr;
      }

      .detail-item {
        align-items: center;
      }
    }
  `,
})
export class AchievementComponent {
  data = input.required<Sims4Achievement>();
}
