import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageModule } from '../../../core/page/page.module';
import { PageDirective } from '../../../core/page/components/page.directive';
import { RoomListComponent } from './room-list.component';
import { RoomListService } from './room-list.service';
import { MyActionButtonComponent } from '../../../common/my-action-button/my-action-button.component';
import { SimsPackSettingsComponent } from '../../../common/sims/sims-pack-settings.component';
import { SimsLogoComponent, SimsLogoVersion } from '../../../common/sims/sims-logo.component';

@Component({
  selector: 'sims-room-pack-randomizer-page',
  imports: [
    PageModule,
    MyActionButtonComponent,
    SimsPackSettingsComponent,
    SimsLogoComponent,
    RoomListComponent,
  ],
  hostDirectives: [PageDirective],
  template: `
    <header pageHeader>
      <sims-logo [version]="useLogo" />
      <h1 pageHeading>Every Room is a Different Pack</h1>
    </header>
    <section pageContent>
      <room-list />
      <sims-pack-settings />
    </section>
    <page-controls>
      <my-action-button
        (onClick)="roomList.randAll()"
        tooltip="Randomize All Rooms"
        aria-label="Randomize all rooms"
      />
    </page-controls>
  `,
})
export class SimsRoomPackRandomizerPage implements OnInit, OnDestroy {
  roomList = inject(RoomListService);
  private route = inject(ActivatedRoute);

  public useLogo: SimsLogoVersion = 'sims';

  private sub!: Subscription;

  ngOnInit() {
    this.sub = this.route.data.subscribe((v) => {
      this.useLogo = v['useLogo'];
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
