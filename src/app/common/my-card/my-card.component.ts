import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'my-card, [myCard]',
  template: `
    <div class="card-icon">{{ icon() }}</div>
    <h3 class="card-title">{{ title() }}</h3>
    <p class="card-description">{{ description() }}</p>
    <div class="card-meta">
      <span class="category">{{ category() }}</span>
    </div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      border-radius: var(--mat-sys-corner-large);
      background-color: var(--mat-sys-surface-container-low);
      border: 1px solid var(--mat-sys-outline-variant);
      text-decoration: none;
      color: inherit;
      transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;

      &:hover {
        background-color: var(--mat-sys-surface-container);
        border-color: var(--mat-sys-primary);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      &.featured {
        background: linear-gradient(
          135deg,
          var(--mat-sys-primary-container) 0%,
          var(--mat-sys-surface-container-low) 100%
        );
        border: 2px solid var(--mat-sys-primary);
      }
    }
    
    .card-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      line-height: 1;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin: 0 0 0.5rem;
      color: var(--mat-sys-on-surface);
    }

    .card-description {
      font-size: 0.875rem;
      line-height: 1.5;
      margin: 0 0 1rem;
      color: var(--mat-sys-on-surface-variant);
      flex-grow: 1;
    }

    .card-meta {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .category {
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: var(--mat-sys-corner-full);
      font-weight: 500;
      background-color: var(--mat-sys-tertiary-container);
      color: var(--mat-sys-on-tertiary-container);
    }
  `,
})
export class MyCardComponent {
  public icon = input<string>('');
  public title = input<string>('');
  public description = input<string>('');
  public category = input<string>('');
}
