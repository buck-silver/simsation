import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavTreeComponent } from './core/navigation/components/nav-tree.component';
import { ShellComponent } from './core/shell/shell.component';
import { ShellMenuComponent } from './core/shell/components/shell-menu.component';
import { ShellBannerComponent } from './core/shell/components/shell-banner.component';
import { MySocialsComponent } from './common/my-socials/my-socials.component';
import { NAV } from './core/navigation/nav';

@Component({
  selector: 'client-root',
  imports: [
    RouterModule,
    ShellBannerComponent,
    ShellComponent,
    ShellMenuComponent,
    NavTreeComponent,
    MySocialsComponent,
  ],
  template: `
    <shell>
      <shell-menu>
        <header shell-banner class="sunset">
          <a class="logo-link" routerLink="/">
            <img
              src="logo.webp"
              alt="Simsation logo"
              class="logo"
              priority
              fill
            />
          </a>
        </header>
        <nav tree [routes]="mainNav"></nav>
        <footer my-socials></footer>
      </shell-menu>

      <router-outlet></router-outlet>
    </shell>
  `,
  styles: `
    .logo {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 0 1rem;
      object-fit: contain;
    }

    .logo-link {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    }

    .sunset {
      background: linear-gradient(
        -45deg,
        #4b2991,
        #5a2995,
        #692a99,
        #782b9d,
        #872ca2,
        #952ea0,
        #a3319f,
        #b1339e,
        #c0369d,
        #ca3c97,
        #d44292,
        #df488d,
        #ea4f88,
        #ed5983,
        #f2637f,
        #f66d7a,
        #fa7876,
        #f98477,
        #f89078,
        #f79c79,
        #f6a97a,
        #f3b584,
        #f1c18e,
        #efcc98,
        #edd9a3
      );
      background-size: 400% 400%;
      animation: sunset-gradient 15s ease infinite;
    }

    @keyframes sunset-gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `,
})
export class AppComponent {
  readonly mainNav = inject(NAV);
}
