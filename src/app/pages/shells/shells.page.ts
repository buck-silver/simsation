import { Component } from '@angular/core';
import { PageDirective } from '../../core/page/components/page.directive';
import { PageModule } from '../../core/page/page.module';
import { CarouselComponent } from '../../core/carousel/carousel.component';
import ShellShowcaseComponent from './components/shell-showcase.component';

@Component({
  selector: 'shells-page',
  imports: [PageModule, CarouselComponent, ShellShowcaseComponent],
  hostDirectives: [PageDirective],
  template: `
    <header pageHeader>
      <h1 pageHeading>Shells</h1>
    </header>
    <article pageContent>
      <p>Welcome to my Shell Showcase!</p>
      <p>
        Looking for a sweet shell challenge? You’ve come to the right place.
        Sims building shells are the perfect way to flex your creative muscles.
        Each one starts as a blank canvas: exterior walls and a fun shape or
        style. Your job? Fill it in, decorate it, and make it your own. No two
        builds ever turn out the same — and that’s the fun of it.
      </p>
      <p>Why Try a Shell?</p>
      <ul>
        <li>Break out of your usual building habits</li>
        <li>Practice interior design and landscaping</li>
        <li>Share your creations with the community</li>
        <li>Get inspired by how others interpret the same shell</li>
        <li>Embrace the chaos and have fun!</li>
      </ul>
      <p>
        Check out my shell builds on the gallery @ Simsation_Builds
      </p>
      <carousel>
        <shell-showcase
          src="content/shells/igloo-shell.webp"
          alt="Igloo Shell"
          title="Igloo Shell"
          tags="#MtKomorebi #SnowyEscape #SimsationBuilds #shell"
        />
        <shell-showcase
          src="content/shells/lighthouse-shell.webp"
          alt="Lighthouse Shell"
          title="Lighthouse Shell"
          tags="#Windenburg #lighthouse #MidNowhere #SimsationBuilds #shell"
        />
        <shell-showcase
          src="content/shells/penthouse-shell-exterior-1.webp"
          alt="Penthouse Shell"
          title="Penthouse Shell"
          tags="#SanMyshuno #Penthouse #MultiUnit #apartment #SimsationBuilds #shell"
        />
        <shell-showcase
          src="content/shells/earthship-shell.webp"
          alt="Earthship Shell"
          title="Earthship Shell"
          tags="#OasisSprings #EcoFriendly #Earthship #desert #greenhouse #SimsationBuilds #shell"
        />
        <shell-showcase
          src="content/shells/shipping-container-shell.webp"
          alt="Shipping Container Shell"
          title="Shipping Container Shell"
          tags="#EvergreenHarbor #ShippingContainer #EcoLifestyle #SimsationBuilds #shell"
        />
      </carousel>
      <p>
        Whether you’re here to build something beautiful, bizarre, or both — 
        these shells are ready for you to make them shine. Download one, roll up
        your sleeves, and let the creativity begin.
      </p>
    </article>
  `,
  styles: ``,
})
export default class ShellsPage {}
