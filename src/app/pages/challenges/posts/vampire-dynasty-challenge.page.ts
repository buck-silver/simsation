import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'vampire-dynasty-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge heading="Vampire Dynasty Challenge">
      <section intro>
        <p>
          If you enjoy occult game play then you might want to try this Vampire
          Dynasty Challenge. I love the concept of playing with “royal” vampire
          families, and having to work your way up to being allowed to marry
          into a royal family. Super interesting!
        </p>
        <p>Check out the link below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'undressyourbones'"
              [href]="
                'https://forums.ea.com/discussions/the-sims-4-creative-corner-en/vampire-dynasty-legacy-challenge/187980'
              "
            ></li>
          </ul>
        </section>
      </section>

      <h2>Setup:</h2>
      <ul>
        <li>
          Create a Royal Vampire Family in every world except the one you’re
          going to have your legacy start. Families must consist of 8 total sims
          including: 1 King and 1 Queen.
        </li>
        <li>
          Create your starter sim. They have to be YA & human. They can have any
          aspiration and traits.
        </li>
        <li>
          Move into an empty 50×50 or 64×64 lot in the world where you didn’t
          create a royal family.
        </li>
        <li>Use money cheat to lower your funds to $1800.</li>
      </ul>

      <h2>Goals:</h2>
      <ul>
        <li>Complete Sim’s Aspiration.</li>
        <li>Complete the rosebud achievement before marrying.</li>
        <li>
          When your sim has the funds, create a beautiful, lavish palace on your
          lot with room for a dedicated wall/room/hallway for family portraits.
        </li>
        <li>
          Your sim must marry one of the children from the royal families.
        </li>
        <li>
          Your sim must complete 4 gold star dinner parties to impress the royal
          family that you’re trying to marry into after you’ve completed the
          rosebud achievement and built your palace.
        </li>
        <li>
          Your sim must be best friends of the parents of the royal family and
          at least friends with the rest of the royal children you’re trying to
          marry into.
        </li>
        <li>
          After marrying, your sim must turn into a Vampire by their spouse.
        </li>
        <li>After you marry, your spouse moves into your ‘palace’.</li>
        <li>
          If your sim has a job, they must quit their job after getting married.
          (unless it’s a freelance job, politician, or conservationist.)
        </li>
        <li>Must have at least 4 kids.</li>
      </ul>
    </my-challenge>
  `,
})
export default class VampireDynastyChallengePage {}
