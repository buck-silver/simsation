import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'cowplant-farm-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge heading="Cowplant Farm Challenge">
      <section intro>
        <p>
          I’ve never heard of this challenge before, but I absolutely LOVE this
          idea! The best way to play the sims is definitely with maximum chaos!
        </p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="
                'Sim4D (originally posted on EA Forum, but no longer available)'
              "
            ></li>
          </ul>
        </section>
      </section>

      <h2>How to get started:</h2>
      <ul>
        <li>Make a founder sim, Young Adult male or female.</li>
        <li>
          Move them into an empty lot and build small house for yourself or
          optionally buy a starter home.
        </li>
        <li>
          Note that you can’t use money/freerealestate cheats when doing this.
        </li>
        <li>
          No cheats allowed, except for bb.moveobjects and mods that alter game
          play.
        </li>
      </ul>

      <h2>Rules:</h2>
      <ul>
        <li>
          To successfully end the challenge you must complete at least 3 of the
          6 challenges listed below.
        </li>
        <li>You have to play with normal/long lifespan.</li>
        <li>
          You have to have auto aging on, for you can’t age any of your sims
          before their natural birthday.
        </li>
        <li>
          You have to complete the 4th challenge with the founder sim, no other
          family members (if the sim marries and/or has kids) are allowed to use
          the Essence of Life!
        </li>
      </ul>

      <h2>Challenges and Point Distribution:</h2>
      <ol>
        <li>
          Have at least 10 fully grown cowplants and have them all milked at
          least once +100 points.
        </li>
        <li>Kill 50 sims by having them been eaten by cowplants +50 points.</li>
        <li>
          Kill 100 sims by having them been eaten by cowplants +100 points.
        </li>
        <li>
          On your birthday (or the day before turning into an adult) drink the
          Essence of life – repeat 10 times +1000 points.
        </li>
        <li>Have 20 fully grown cowplants +500 points.</li>
        <li>Have 50 Essence’s of Life in your inventory +250 points.</li>
      </ol>

      <h2>You lose points if you:</h2>
      <ul>
        <li>Get eaten by a cowplant -10 points.</li>
        <li>Have a family member eaten by a cowplant -10 points.</li>
        <li>Have a family member killed by a cowplant -100 points.</li>
        <li>Let a cowplant die -20 points.</li>
      </ul>

      <p>
        <strong>Note #1:</strong> You can also repeat the challenges 2, 3 and 4
        as many times as you want to collect more points!
      </p>

      <p>
        <strong>Note #2:</strong> You can use testingcheats true to add people
        into your household (shift+click on sim) to FEED them to the cowplant or
        just straight up add them into your family BUT they will not be
        considered FAMILY MEMBERS, because that would severely kill this
        challenge in all it’s purpose, so only the sims that are immediate
        family, are considered to be *family members* (spouses, children,
        grandchildren, parents or siblings).
      </p>

      <p>Challenge by © Sim4D</p>
      <p>You can find me on Tumblr as well, username Sim4D.</p>
    </my-challenge>
  `,
})
export default class CowplantFarmChallengePage {}
