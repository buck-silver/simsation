import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'a-different-kind-of-jam-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge heading="A Different Kind of Jam Challenge">
      <section intro>
        <p>
          I know there are a ton of berry themed challenges, but this one was
          recommended to me by
          <a class="link" href="https://www.twitch.tv/vurpics" target="_blank">
            Vurpics
          </a>
          on Twitch. She’s just started streaming it recently and was having a
          lot of fun with her founder. The first generation has a very
          interesting start that honestly sounds really challenging!
        </p>

        <p>Check out the link below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'nadzicle'"
              [href]="'https://nadzicle.tumblr.com/adkoj'"
            ></li>
          </ul>
        </section>
      </section>

      <h2>Rules:</h2>
      <p>
        All requirements that are needed for the generation can be found the
        “Ingredients” section for each. Have fun and do what you want.
      </p>

      <h2>Generation 1: Strawberry</h2>
      <p>
        Everybody loves strawberries. They are sweet and popular just like you.
        You love getting to talk and meet new people at every chance you get and
        everyone loves how friendly you are. But your desire to help people has
        been the main driving point in your life. As you tend to others, you
        also tend to neglect taking care of yourself. As a workaholic, your
        house is a mess, your children don’t get to see you anymore, and your
        personal life is in shambles. Need to take some PTO if you ask me.
      </p>

      <h2>How to make Strawberry:</h2>
      <h3>Ingredients:</h3>
      <ul>
        <li>Career: Doctor</li>
        <li>Aspiration: Friend of the World</li>
        <li>2 Traits – Ambitious & Slob</li>
        <li>20 Friends</li>
        <li>3 Social opportunities</li>
        <li>4 Children</li>
        <li>Skill – Charisma</li>
      </ul>

      <h3>Directions:</h3>
      <ul>
        <li>Must have the Ambitious and Slob traits.</li>
        <li>
          Have 20 friends and maintain those relationships until the next
          generation becomes YA.
        </li>
        <li>
          Neglect your children’s skills and your relationship with them (No
          teaching toddler skills, helping with homework or
          encouraging/discouraging behaviour).
        </li>
        <li>Can only clean the house once a week. No maid or butler!</li>
        <li>Must cancel any other interaction and no outside help.</li>
        <li>Master the Charisma skill</li>
        <li>
          Complete 3 social opportunities a week, as either hosting a party
          (remember you can only clean once a week!), accepting social
          invitations via phone, or going on a date with your spouse.
        </li>
        <li>
          For story purposes, the Spouse should be similar to our dear
          Strawberry to go along with the story for the Peach generation. Or,
          after the children are born the spouse could leave, making
          Strawberry’s life even more challenging! The choice is yours.
        </li>
      </ul>
    </my-challenge>
  `,
})
export default class ADifferentKindOfJamChallenge {}
