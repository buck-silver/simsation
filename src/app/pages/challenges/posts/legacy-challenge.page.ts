import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'legacy-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge
      heading="Legacy Challenge & Simple Variations"
      moreAt="https://simslegacychallenge.com/"
    >
      <section intro>
        <p>
          The original Legacy Challenge was created by Pinstar in 2004. He
          originally created it for Sims 2, and later updated it for Sims 3 and
          Sims 4.
        </p>
        <p>
          He has an entire website dedicated to the incredibly detailed rules,
          as well as other challenges that he has created.
        </p>
        <p>Check out the link below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'Pinstar'"
              [href]="'https://simslegacychallenge.com/'"
            ></li>
          </ul>
        </section>
      </section>

      <p>
        The Legacy Challenge is a set of self-imposed rules meant to change the
        way you play the game of The Sims 4. By abiding by the restrictions of
        the challenge and reaching for the goals of the challenge, you will find
        yourself getting a very different experience from The Sims 4 that you
        might have playing casually. The Legacy Challenge tasks you with
        creating a single founder Sim moving them in to a giant lot and starting
        out in abject poverty. Your founder must build their house, build their
        wealth, and ultimately bring in the second generation to continue when
        they die. In this challenge you play a single family for 10 full
        generations. With less control over how your children turn out and more
        challenges thrown your way, the challenge asks the very important
        question. “What kind of Legacy will you leave?”
      </p>

      <h2>Simple Variations</h2>
      <ul>
        <li>
          Alphabet Legacy – name the founder and each heir in alphabetical
          order.
        </li>
        <li>Matriarchy – the founder and heirs are all females.</li>
        <li>Patriarchy – the founder and heirs are all males.</li>
        <li>Prettacy – Breed Out the Ugly/Weird</li>
        <li>Uglacy – Breed In the Ugly/Weird</li>
        <li>
          Rainbow Legacy – each generation is a different colour of the rainbow
          (red, orange, yellow, etc.)
        </li>
        <li>Speed Legacy/Nightmare Legacy – play on the shortest lifespan</li>
        <li>
          Genacy – The number of children born each generation reflects which
          generation the family is in. The first generation would only have 1
          child, the second generation would have 2 children, the third
          generation would have 3 children, etc.
        </li>
        <li>
          Random Legacy – Roll dice or use the Random Legacy Challenge App to
          randomly determine various game play elements of each generation of
          the legacy. Examples of game play elements are which job the heir
          gets, how many kids they have, and whether or not they can get
          married, among others.
        </li>
        <li>
          Supernatural Legacy – Each supernatural species must be present at
          least once in the family tree. For example, the founder could be
          human, but marries a spellcaster, the second generation marries an
          alien, the third generation a vampire, etc.
        </li>
        <li>
          Immortal Legacy – Keeping the founder alive while his/her family goes
          on for 10 generations, using the Life Fruit, Death Flowers and
          Ambrosia. Aging must be turned on.
        </li>
        <li>
          The Highlander Crest Legacy – this challenge is similar to the
          Immortal Legacy, but it is based off of the Films & TV series called
          “Highlander”. This challenge was created by ButtonsGinger on the Sims
          forum – check out the full rules
          <a
            href="https://forums.ea.com/discussions/the-sims-4-creative-corner-en/the-highlander-crest-a-legacy-ish-game-play-challenge/367552/replies/367562"
            >here.</a
          >
        </li>
      </ul>

      <h2>Legacy Challenge Achievements in the Sims 4</h2>
      <ul>
        <li>
          Legacy Player – playing a household as a normal legacy challenge.
        </li>
        <li>
          Legacy Leader – playing ten households as a normal legacy challenge.
        </li>
        <li>
          Alphabet Legacy – playing a household for 26 generations. Unlike the
          previous achievements naming the descendants in alphabetical order may
          not be necessary to complete this achievement.
        </li>
        <li>Legendary Legacy – playing a household for 100 generations.</li>
      </ul>
    </my-challenge>
  `,
})
export default class LegacyChallengePage {}
