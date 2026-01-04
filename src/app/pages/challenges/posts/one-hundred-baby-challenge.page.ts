import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'one-hundred-baby-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge
      heading="100 Baby Challenge"
      moreAt="https://snarky-sims-witch.tumblr.com/post/181535303038/thanks-for-being-patient-with-me-the-challenge-is"
    >
      <section intro>
        <p>
          I googled Sims 4 Challenges the other day, and it turns out there are
          literally a million of them. So, I’ve decided to start posting
          descriptions and links to Sims 4 Challenges that I’ve enjoyed playing,
          or that I’m interested in trying.
        </p>

        <p>
          Here is the classic 100 Baby Challenge. I’m sure you’ve heard of it,
          and maybe even played it. But did you know there are optional occult
          rules? I’ve never tried the occult version, but it sounds like a lot
          of fun!
        </p>

        <p>Check out the link below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'Snarky Witch'"
              [href]="
                'https://snarky-sims-witch.tumblr.com/post/181535303038/thanks-for-being-patient-with-me-the-challenge-is'
              "
            ></li>
          </ul>
        </section>
      </section>

      <h2>Objective</h2>
      <p>
        Your objective for this challenge is to give birth to 100 children in as
        few generations as possible. The challenge ends as soon as the 100th
        child is born or if you fail the challenge for breaking rules.
      </p>

      <h2>Optional Occult Rules</h2>

      <h3>Occult Incentive:</h3>
      <ul>
        <li>Your Matriarch must be human.</li>
        <li>
          Each occult born to your human matriarch adds two to your total child
          count, so one occult child is worth the equivalent of two human
          children.
        </li>
      </ul>

      <h3>Occult Themed Challenge:</h3>
      <ul>
        <li>Your matriarch must be an occult.</li>
        <li>Your matriarch may only have children with human Sims.</li>
        <li>
          Any human children that your matriarch gives birth to do not count
          towards the 100 baby total. You may not move out human children to
          make more space for occult children until they meet the normal
          requirements to be aged up into a young adult.
        </li>
      </ul>
    </my-challenge>
  `,
})
export default class OneHundredBabyChallengePage {}
