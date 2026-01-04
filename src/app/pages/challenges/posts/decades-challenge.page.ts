import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'decades-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge heading="Decades Challenge">
      <section intro>
        <p>
          I love historical fiction, so this challenge is right up my alley. It
          can end up being a lot of Sims to keep track of, but luckily there is
          a handy-dandy spreadsheet to help with this process!
        </p>

        <p>
          I’ve never played this challenge, but if I did there would be a few
          minor changes I would make, as follows:
        </p>
        <ul>
          <li>
            Adoption would be allowed from the beginning, especially for the
            orphans of any relatives (for example, if your brother & his wife
            passed away you would adopt their children).
          </li>
          <li>
            Marriage between different races would be allowed, because in Canada
            it was never technically illegal (and I’m Canadian).
          </li>
          <li>
            I would also figure out some type of system to determine
            gender/sexual identity. Perhaps a dice rolling system or something
            similar.
          </li>
        </ul>

        <p>Check out the link below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'CuteCoffeeGal'"
              [href]="'https://cutecoffeegal.com/decadeschallengerules/'"
            ></li>
          </ul>
        </section>
      </section>

      <p>
        You start in the 1890’s (I downloaded a bunch of appropriate clothing
        just to add to the feel) and I wanted to show the changing world in real
        time, which means the challenge starts out with some limits to marriage
        in regards to race and gender. You can totally choose to ignore those
        and any other rules, these are just the things I am playing with. Each
        new decade starts with the children growing into young adults (or teens
        if you prefer)
      </p>
    </my-challenge>
  `,
})
export default class DecadesChallengePage {}
