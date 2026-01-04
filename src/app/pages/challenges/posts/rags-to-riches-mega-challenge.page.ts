import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'rags-to-riches-mega-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge heading="Rags to Riches Mega Challenge">
      <section intro>
        <p>
          I always enjoy a simple Rags to Riches challenge, but did you know
          there is a super challenging “mega” version of it? The rules are
          pretty extensive, but it seems like a very interesting twist on this
          classic challenge.
        </p>
        <p>Check out the link below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'Simish Gamer'"
              [href]="'https://modthesims.info/t/550861'"
            ></li>
          </ul>
        </section>
      </section>

      <p>
        The point of this challenge is for each simmer to get the sim of their
        choice from living in rags all the way up to riches. In order to
        complete this challenge your Sims must meet all of the main game
        challenge goals listed below. There are mandatory challenge goals that
        you must meet before you can complete some of the main challenges. There
        is also a list of optional goals for you to pick and choose from to go
        along with the main challenge.
      </p>

      <h2>Challenge Information and Rules:</h2>
      <ul>
        <li>
          There are certain main goals you are not allowed to complete until you
          finish the Mandatory Steps that go with them, these side challenges
          can be found in the Mandatory Steps section. You must complete
          mandatory steps before you can get a job, build your home and start
          your family.
        </li>
        <li>
          Do not use any cheats unless it is to reset your sim, take away your
          money, or allow you to move objects. In the beginning of the game move
          into the most expensive empty lot and then get rid of all of your
          money. If you need to know how to do this, refer to the Helpful Hints
          section.
        </li>
        <li>
          To make money before you are allowed to get a job take advantage of
          the things listed in the Making Money section. Your spouse is not
          allowed to work until they have met the mandatory work requirement. If
          you have more than one working sim in your home they must each meet
          the requirement.
        </li>
        <li>
          You may not place anything on your Sims lot until you have unlocked
          the mandatory steps for building a home. Items your sim can carry are
          allowed to be set down or used on your own lot excluding seeds.
        </li>
        <li>
          You are not allowed to place items outside the walls of your home or
          use seeds until you finish the Mandatory Steps for Building a Garden.
        </li>
        <li>
          Before you own a bed you must use public places to sleep, you may not
          place a bed on a public lot. Outdoor retreat users may use a tent if
          you want but you must earn the money to buy it and it can not be
          placed on your home lot. Once your friendly level is full with a sim
          you may stay at their home one night a week if you so wish. You must
          count the days and on the seventh day you can stay with them again.
          While at their home for that one night you are allowed to make and eat
          as many meals as you want to but you cannot take them with you. You
          can make one plate of food before you leave their home to take when
          you go. Do not sleep at any Sims home at any other time until you have
          a bed of your own.
        </li>
        <li>
          You can rummage for food, garden public plants or cook on the outdoor
          barbecues until you have built your home. I survived off of selling
          collectables and making food like this for a while before I got my
          home.
        </li>
        <li>
          If you decide to add any other sims besides the spouse and kids, they
          may not work in any way or earn money with hobbies like painting.
        </li>
        <li>
          If you are part of a club that can earn money by painting, writing,
          etc. You can not keep any of the money made by selling these items
          until you have finished every main goal. You may however hang the
          paintings in your home or delete them all.
        </li>
        <li>
          If you have city living you can move your sim into an apartment, but
          you must follow all of the challenge requirements. You have to delete
          everything from the apartment and get rid of all of your money. You
          must eventually work your way up to owning the penthouse so you can
          complete the garden challenge.
        </li>
        <li>
          Your life span can be set to anything you wish for this challenge, you
          can even turn aging off to be able to finish the whole challenge.
        </li>
      </ul>
    </my-challenge>
  `,
})
export default class RagsToRichesMegaChallengePage {}
