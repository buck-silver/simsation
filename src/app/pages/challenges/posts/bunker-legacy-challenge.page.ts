import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'bunker-legacy-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge heading="Bunker Legacy Challenge">
      <section intro>
        <p>
          Do you enjoy post-apocalyptic story lines? Do you enjoy rags to riches
          legacy challenges? Then this is the challenge for you!
        </p>
        <p>
          The creator of this made their own bunker build to go along with the
          challenge, and you can download it off the gallery if you want to give
          it a go. It’s a fairly customizable challenge, so everyone can make it
          fit their preferred game play style.
        </p>
        <p>Check out the link below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'Charlii-mai'"
              [href]="
                'https://purpleplumbob.weebly.com/the-sims-4-bunker-challenge.html'
              "
            ></li>
          </ul>
        </section>
      </section>

      <p>
        This particular Legacy Challenge tasks you with creating a single
        founder Sim moving them in to a giant lot, (50×50) and starting out in
        the Bunker lot. Your founder must build onto their house, build up their
        wealth, and ultimately bring in the second generation to continue when
        they die. In this challenge you play a single family for 10 full
        generations. With less control over how your children turn out and more
        challenges thrown your way, the challenge asks the very important
        question. “What kind of Legacy will you leave?”
      </p>

      <h2>Let's Get This Thing Started!</h2>
      <p>
        You must design your founder in create-a-sim. There are no restrictions.
        You can pick whatever aspiration you want for them and give them
        whatever traits you want. Pick out their gender, wardrobe, body shape
        and colour, and even add any CAS custom content.
      </p>
      <p>
        Move your founder into the new empty $10,000 lot. This will leave them
        with $10,000 in funds. Before doing anything else, enter build mode,
        head to the gallery, and download the bunker (made by Charlii-mai)
        costing $8,166 leaving you with $1,834 in funds then from outdoor plants
        buy 2 Apprentice rock set costing $450 each and the silent sentinel rock
        costing $245 leaving your Sim with $689* (for the duration of the
        challenge you are not allowed to sell any of the rocks although you are
        free to move them around the lot to assist building).
      </p>
      <p>
        Once this is completed, you must choose what your family’s succession
        law will be.
      </p>
    </my-challenge>
  `,
})
export default class BunkerLegacyChallengePage {}
