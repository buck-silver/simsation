import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'career-legacy-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge heading="Career Legacy Challenge">
      <section intro>
        <p>
          The Career Legacy Challenge is currently being played and developed by
          Risshella on her Twitch stream. She is playing through every career in
          alphabetical order and she has also added in extra goals for Hard-mode
          and Optional Side Quests.
        </p>
        <p>
          This challenge also includes other “Rags to Riches” type rules to
          decide the amount of starting funds each generation, number of kids,
          type of relationship, etc.
        </p>
        <p>
          If you want to push yourself to try new types of game play, and
          different types of families, then give this challenge a go!
        </p>
        <p>
          If you have any comments or questions about the challenge you can ask
          Risshella about it on her Twitch stream
          <a
            class="link"
            href="https://www.twitch.tv/risshella"
            target="_blank"
          >
            here </a
          >.
        </p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'Rishella'"
              [href]="'https://www.risshella.com/sims4/careerlegacychallenge'"
            ></li>
          </ul>
        </section>
      </section>

      <h2>General Rules</h2>
      <p>
        This challenge is played in a Rags to Riches style, moving out at the
        beginning of each generation. Start the challenge with a single sim. You
        may fully customize the appearance and traits and aspiration of this
        sim. Move them into an empty lot, or bulldoze a lot. Cheat money to 0
        (or 1,800 for a slightly easier start). Roll dice/use a random number
        generator to determine how many children to have in this generation
        (1-6). You also need to flip a coin to determine whether your sim will
        be in a committed relationship, or walk the promiscuous path of multiple
        partners!
      </p>
      <p>
        Each generation focuses on one career and the skills associated with it.
        Each generation also includes an Optional Side Quest. Follow the list of
        careers
        <a class="link" href="https://www.carls-sims-4-guide.com/careers/">
          here
        </a>
        or follow along below! (we are going in alphabetical order). Once you’ve
        completed the requirements for a generation, choose an heir from your
        sim’s current children to lead the next generation. You can choose your
        favorite, have a vote somewhere, or use a random number generator to
        decide on the heir. You can move your heir out as early as the age of
        teenager, but keep in mind you will not be able to start your career
        until young adulthood!
      </p>
    </my-challenge>
  `,
})
export default class CareerLegacyChallengePage {}
