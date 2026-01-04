import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'isbi-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge heading="ISBI Challenge">
      <section intro>
        <p>
          The “I’m Surrounded By Idiots” Challenge is probably my favourite
          challenge. It’s a great concept with a great name! I’m a bit of a
          control freak with my sims, so it sounds like a lot of fun to only
          control one sim at a time.
        </p>
        <p>Check out the links below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'Lynnwood84'"
              [href]="
                'https://forums.ea.com/discussions/the-sims-4-creative-corner-en/lynnwoods-isbi-challenge-rules-for-ts4---315-growing-together-rules-update/2580029?after=MjUuMTF8Mi4xfGl8MTB8Mzk6MXxpbnQsMjU4MDAzMCwyNTgwMDM5'
              "
              [note]="'created for TS4'"
            ></li>
            <li
              credit
              [to]="'simslia'"
              [href]="'https://boolprop.net/viewtopic.php?f=52&t=48'"
              [note]="'created for TS3'"
            ></li>
            <li
              credit
              [to]="'DylanTK/GloamingMerle'"
              [href]="
                'Http://isbichallenge.blogspot.com/2005/07/isbi-challenge-rules.html'
              "
              [note]="'created for TS2'"
            ></li>
          </ul>
        </section>
      </section>

      <p>
        The ultimate goal is to survive 10 generations of sims while only
        controlling one sim at a time, and keeping score throughout.
      </p>
      <p>
        Each Torch-Holder must have at least two children. You don’t HAVE to get
        married, but doing so increases the chance for more points (and more
        failures). If playing with the Erratic trait rule then each child MUST
        be given the Erratic trait at some point. Otherwise all traits and
        aspirations should be randomized via the dice button.
      </p>
      <p>
        Throughout the challenge, only ONE sim may be controlled by you, and
        that’s your current Torch Holder. All other sims must live on complete
        autonomy, to live (or fail) as they will. Obviously this means that sim
        autonomy should be turned on in your game settings at all times. When
        the child you’ve chosen as heir reaches YA, the ‘torch’ is passed to
        them and they become your controllable sim. Your former TH enters the
        land of autonomy and you are never allowed to control them again. There
        are some Free Action exceptions to this rule, see below for details.
      </p>
      <p>
        Once a child reaches YA and they are not your heir, they must be moved
        out of the household.
      </p>
    </my-challenge>
  `,
})
export default class IsbiChallengePage {}
