import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'black-widow-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge heading="Black Widow Challenge">
      <section intro>
        <p>
          This is another classic challenge that has been around since the Sims
          2. This Sims 4 adaptation has various difficulty levels, as well as a
          regular scoring system vs. an advanced scoring system, depending on
          what level of chaos you want in your game. This also adds quite a bit
          of replay value, because you can start on “Novice” and work your way
          up to “Legendary”. There is also an in-game achievement for outliving
          5 spouses called “Black Widow”, but this challenge goes all the way to
          10 spouses!
        </p>
        <p>Check out the link below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'simalot'"
              [href]="
                'https://sims4challengesrules.blogspot.com/2014/10/black-widow-challenge.html'
              "
            ></li>
          </ul>
        </section>
      </section>

      <ul>
        <li>
          Life span must be set to normal. Start off with one Young Adult Sim.
          Give her the following 3 traits… materialistic, snob, and romantic.
          The aspiration has to be “Love” with a sub-category being The Serial
          Romantic. Move her into a lot/house and get her settled. NO Money
          cheats allowed!!!
        </li>
        <li>
          Meet a Sim and build your relationship until you can get married (All
          marriage should have a formal party, it’s not a requirement though… it
          just add to the realism.)
        </li>
        <li>
          Have a Dinner party to show you’re the perfect wife. (The Dinner party
          must at least reach a rating of “silver”.)
        </li>
        <li>
          After the party, find a new romantic interest, and… move them in.
        </li>
        <li>
          Then, get caught cheating (ie. make sure your current hubby is very
          close/near-by, while getting “Romantic” with the new guy.)
        </li>
        <li>
          Kill off the Husband, marry again (to the new guy) + inscribe the
          tombstone with: &lcub;his name&rcub; “Died by Black Widow”
        </li>
        <li>
          Repeat this over again until you have 10 graves or more / 10 of them
          have died. Simple Right? maybe … maybe not.
        </li>
      </ul>
    </my-challenge>
  `,
})
export default class BlackWidowChallengePage {}
