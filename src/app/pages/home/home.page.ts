import { Component } from '@angular/core';
import { PageModule } from '../../core/page/page.module';
import { PageDirective } from '../../core/page/components/page.directive';
import { MadeWithLoveComponent } from './components/made-with-love.component';
import { SimsationProfileComponent } from './components/simsation-profile.component';

@Component({
  selector: 'home-page',
  imports: [PageModule, MadeWithLoveComponent, SimsationProfileComponent],
  hostDirectives: [PageDirective],
  template: `
    <header pageHeader>
      <h1 pageHeading>Welcome</h1>
    </header>
    <article pageContent class="home-page">
      <p>
        Hi, I’m Brooke from Canada, and I’ve been playing The Sims for 25 years.
        At this point, stopping isn’t really an option — send snacks, not help.
      </p>

      <p>
        Take a look at my collection of apps, challenges, shells, and world maps
        — all crafted to spark creativity… or unleash a little chaos.
      </p>

      <p>
        Sometimes I dive into a new Sims Challenge or Generator from my site,
        and other times I’m building something beautiful — or casually
        dismantling my Sims’ lives just for fun.
      </p>

      <p>
        Whether you're here to get inspired, try something new, or simply enjoy
        the drama, welcome to the madness.
      </p>

      <section class="home-profile">
        <made-with-love />
        <simsation-profile />
      </section>
    </article>
  `,
  styles: `


    .home-profile {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .heart-throb {
        align-self: center;
        font-style: italic;
        text-align: center;
        margin: 0rem;
      }

      .heart-throb > p {
        display: inline-block;
        font-family: 'Pacifico', cursive;
        margin: 0;
        padding: 0;
        font-size: 3rem;
      }

      .heart-icon {
        color: palevioletred;
        margin: 0 0 0 1rem;
        animation: heartbeat 1s infinite;
      }
    }

    @keyframes heartbeat {
      0% {
        transform: scale(0.75);
      }
      20% {
        transform: scale(1);
      }
      40% {
        transform: scale(0.75);
      }
      60% {
        transform: scale(1);
      }
      80% {
        transform: scale(0.75);
      }
      100% {
        transform: scale(0.75);
      }
    }
  `,
})
export default class HomePage {}
