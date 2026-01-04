import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'not-so-berry-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge heading="Not So Berry Challenge">
      <section intro>
        <p>
          The Not So Berry Challenge has been around for awhile, but it’s still
          quite popular in the Sims community. If you need something new in your
          game play then this challenge will be great for you. It encourages you
          to try new careers and personality types for your sim families. It
          also encourages family game play between the various generations, and
          it’s not always that “picture perfect” family game play that you might
          usually strive for.
        </p>
        <p>Check out the link below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'lilsimsie & alwaysimming'"
              [href]="
                'https://lilsimsie.tumblr.com/post/157671494755/not-so-berry-legacy-challenge'
              "
            ></li>
          </ul>
        </section>
      </section>

      <p>
        Do you like the rainbow? Do you like the idea of playing with berry Sims
        but hate berry Sims? Do you want to mess around with aspects of the game
        you’ve never used before? Boy, do I have the challenge for you!
      </p>

      <p>
        Welcome to the Not So Berry Legacy Challenge, a ten generation legacy
        with a focus on bright colors and new experiences.
      </p>

      <h2>Basic Rules:</h2>
      <ul>
        <li>
          Each heir must represent the color of the generation (i.e. hair,
          makeup, clothing), but brightly colored skin is not necessary (these
          aren’t actually berry Sims, that’s the joke). Of course, this is
          optional but a big portion of the fun.
        </li>
        <li>
          The colors of the spouses don’t matter as they aren’t part of the
          challenge. Unless otherwise stated you can do whatever you please with
          them.
        </li>
        <li>
          Money cheats can be used, but not excessively. Suggestion: use
          freerealestate for your first home, but no cheats afterward.
        </li>
        <li>
          You may live wherever you please unless something is specified in the
          rules of a generation.
        </li>
        <li>
          Every generation is supposed to complete both the career and
          aspiration of the heir unless explicitly stated otherwise.
        </li>
        <li>Keep the lifespan on normal.</li>
        <li>
          If you play this challenge and want to share it with us, go ahead and
          post with #notsoberry so we can see!
        </li>
      </ul>
    </my-challenge>
  `,
})
export default class NotSoBerryChallengePage {}
