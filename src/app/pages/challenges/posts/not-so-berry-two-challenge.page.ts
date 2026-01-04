import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'not-so-berry-two-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge heading="Not So Berry Two Challenge">
      <section intro>
        <p>
          The original NSB Challenge was created in 2017, but in 2020 it was
          updated to include the newer packs. So now you can play both
          challenges back to back for a total of 20 generations! Wow! That’s a
          lot of sims! I have the attention span of a gnat, so this sounds like
          an impossible challenge, but if you like legacy challenges this would
          be a blast.
        </p>
        <p>Check out the link below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'simmer-emsie'"
              [href]="
                'https://simmer-emsie.tumblr.com/post/635534767984656384/not-so-berry-legacy-challenge-2'
              "
            ></li>
          </ul>
        </section>
      </section>

      <p>
        Couldn’t get enough of the original Not So Berry Legacy Challenge?
        Wishing you could play a challenge with all the new packs, careers, and
        aspirations? If you’ve been daydreaming about an updated Not So Berry
        Challenge (2020), look no further!
      </p>
      <p>
        Welcome to the Not So Berry Legacy Challenge 2, a ten generation
        rags-to-riches legacy challenge with colour-themed heirs. Note: This
        challenge requires basically every pack except My First Pet Stuff and
        Journey to Batuu (…y’all know why).
      </p>
      <p>
        Thank you to &#64;lilsimsie and &#64;alwaysimming for the inspiration
        (and the rules!).
      </p>

      <h2>Basic Rules:</h2>
      <ul>
        <li>
          Each heir must represent the colour of the generation (like hair,
          makeup, clothing), but brightly-coloured skin isn’t necessary.
        </li>
        <li>
          The colours of the spouses don’t matter as they aren’t part of the
          challenge. Unless otherwise stated you can do whatever you please with
          them.
        </li>
        <li>Cheats can be used, but not excessively.</li>
        <li>
          You may live wherever you please unless something is specified in the
          rules of a generation.
        </li>
        <li>
          Every generation is supposed to complete both the career and
          aspiration of the heir unless explicitly stated otherwise.
        </li>
        <li>Keep the lifespan on normal.</li>
      </ul>
    </my-challenge>
  `,
})
export default class NotSoBerryTwoChallengePage {}
