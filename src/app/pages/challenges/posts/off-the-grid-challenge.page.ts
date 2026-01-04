import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'off-the-grid-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge heading="Off the Grid Challenge">
      <section intro>
        <p>
          This challenge was written before the “Off the Grid” lot trait was
          added to base game, but I think it will work well with the trait. I
          also love that it’s a challenge that involves an entire world with the
          potential for multiple families to be played as well. It’s like an
          extreme rags to riches style challenge, which could be a lot of fun!
        </p>

        <p>Check out the link below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'Snarky Witch'"
              [href]="
                'https://snarky-sims-witch.tumblr.com/post/181537294178/tos-you-must-credit-me-and-link-back-to-this-post'
              "
            ></li>
          </ul>
        </section>
      </section>

      <h2>Story</h2>
      <p>
        A nomadic tribe of Sims who don’t believe in the ways of the 21st
        century stumble across a completely empty landscape and see a golden
        opportunity; to claim the land as their own and create a permanent
        village in this area that is completely free of the trappings of
        technology. This village will become one of the only villages left in
        the Sim world to be completely untouched by the influences of modernity.
        Together, the tribe will grow and prosper out of the dedication and hard
        work they’ve put into building a sustainable community.
      </p>

      <h2>Objective</h2>
      <p>
        Build up a town with a tribe of Sims that lives completely off the land.
        No buying your groceries, no using technology, no indoor plumbing, no
        businesses or careers that make use of any of these things, and no
        outings to community lots that have these things. Your Sims are 100%
        dependent on themselves and their own hard work to survive. The
        challenge ends when every household in your town has met the challenge
        requirements for being true off the grid masters (but if you are having
        fun playing this way when your challenge ends, feel free to continue)!
      </p>

      <h2>Preparing the World to Live Off The Grid</h2>
      <ul>
        <li>
          Pick any world except San Myshuno and Magnolia Promenade to completely
          bulldoze. HINT: Choose your world carefully! Larger worlds with more
          lots provide a bigger challenge so think about the difficulty level
          you’d like to play before making your choice.
        </li>
        <li>
          Once your world has been bulldozed, pick the lots you would like to
          build your community lots on. For worlds with more than five lots, you
          may select up to three lots to be used as community lots in your
          world. For worlds with five lots or less, you are restricted to only
          one community lot.
        </li>
        <li>
          The community lots can be anything you like with one catch; they
          cannot have any kind of technology or plumbing whatsoever. There are
          no exceptions to this. These lots will be the only community lots your
          tribe of Sims will ever be allowed to visit so think carefully about
          what your off-the-grid Sims might need off their home lots and
          construct your community lots with this in mind. If a community lot
          requires a forbidden object in order to function as your selected lot
          type, you must create a basement Sims can’t access and place the
          objects in there so that they comply with the lot requirements but are
          out of the way and unusable by your Sims. You may also download
          community lots from the Gallery as long as they meet these
          requirements.
        </li>
        <li>
          The rest of the lots in your world will be residential lots where your
          tribe will make their homes.
        </li>
        <li>
          Next, go into the game options and make the following adjustments
          under the Gameplay tab: Auto-Age (Played Sims) – Only Active
          Household, Sim Lifespan – Normal, Fill Empty Homes – Uncheck. You’ll
          be playing rotationally so these settings ensure that your other
          played households will not age while you are playing a different
          household. It also ensures that game-generated townies will not move
          into your lots.
        </li>
        <li>
          After you create your tribe, make sure all those households are in
          your households list in the Household Management tab in Manage Worlds.
          Do this by selecting the heart icon on the household’s portrait if it
          is not selected already. This will protect them from culling.
        </li>
      </ul>
    </my-challenge>
  `,
})
export default class OffTheGridChallengePage {}
