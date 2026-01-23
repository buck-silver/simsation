import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { PageModule } from '../../../../core/page/page.module';
import { PageDirective } from '../../../../core/page/components/page.directive';
import { SuggestionActionsComponent } from './components/suggestion-actions.component';
import { SuggestionSettingsComponent } from './components/suggestion-settings.component';
import { SuggestionComponent } from './components/suggestion.component';
import { SimsPackSettingsComponent } from '../../../../common/sims/sims-pack-settings.component';
import { SimsLogoComponent } from '../../../../common/sims/sims-logo.component';

@Component({
  selector: 'build-randomizer-page',
  imports: [
    MatExpansionModule,
    PageModule,
    SimsPackSettingsComponent,
    SimsLogoComponent,
    SuggestionActionsComponent,
    SuggestionSettingsComponent,
    SuggestionComponent,
  ],
  hostDirectives: [PageDirective],
  template: `
    <header pageHeader>
      <sims-logo [version]="'4'" />
      <h1 pageHeading>Random Build Generator</h1>
    </header>
    <article pageContent>
      <suggestion></suggestion>
      <mat-accordion>
        <suggestion-settings></suggestion-settings>
        <sims-pack-settings></sims-pack-settings>
      </mat-accordion>
    </article>
    <page-controls>
      <suggestion-actions></suggestion-actions>
    </page-controls>
  `,
})
export class BuildRandomizerPage {}
