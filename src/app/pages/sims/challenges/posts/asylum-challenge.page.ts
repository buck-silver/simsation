import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'asylum-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge
      heading="Asylum Challenge"
      moreAt="https://forums.ea.com/discussions/the-sims-4-creative-corner-en/the-sims-4-asylum-challenge-updated-sept-2019/1421268"
    >
      <section intro>
        <p>
          This challenge has been around since the Sims 2, and I still love the
          concept! There are 3 different difficulty levels that you can try,
          depending on the level of chaos you’re interested in. I also love the
          idea of building the run-down asylum. Although, if you aren’t a
          builder then you can always check the gallery for an asylum under
          #AsylumChallenge.
        </p>
        <p>Check out the link below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'simswithcheese'"
              [href]="
                'https://forums.ea.com/discussions/the-sims-4-creative-corner-en/the-sims-4-asylum-challenge-updated-sept-2019/1421268'
              "
            ></li>
          </ul>
        </section>
      </section>

      <p>
        For those who do not know the Asylum Challenge, here is the backstory:
        “You have been committed to a run-down mental health facility against
        your will. In order to prove that you are fit to rejoin society and earn
        your freedom, you must achieve the goals your psychiatrist has set for
        you – your aspiration. The catch? You need to achieve your goals as
        quickly as possible, while keeping 7 other patients, who you don’t know
        and are out of your control, alive and as happy as possible. Add to that
        budget cutbacks leading to a lack of decent furniture and limited
        supplies, and your task gets harder.”
      </p>
      <p>
        For this challenge there will be an easy mode, medium mode and hard
        mode, just to spice things up a bit.
      </p>

      <h2>Setting up</h2>
      <p>
        Create your main sim in CAS. They must be a young adult. You can choose
        whatever you want for looks, clothing, voice and walk styles. They must
        have the insane trait and the other two traits can be anything except
        for custom traits.
      </p>

      <p>You can also choose any aspiration except for the following:</p>
      <ul>
        <li>Successful Lineage</li>
        <li>Big Happy Family</li>
        <li>Super Parent</li>
        <li>Fabulously Wealthy</li>
        <li>Mansion Baron</li>
        <li>City Native</li>
      </ul>

      <p>
        After finishing your main sim, create seven other sims. They all must be
        young adults and they must all have the insane trait. The other two
        traits and their aspirations can be whatever you want. (I recommend
        having a few evil, mean and romantic sims, just to make things
        interesting). None of the eight sims are allowed to be related.
      </p>
      <p>
        Next step is to build the asylum on a residential lot in either Willow
        Creek or Oasis Springs. The size of the lot does not matter. You can
        build the asylum yourself, download an asylum from the Gallery using the
        hashtag #AsylumChallenge or modify an existing house in Willow Creek or
        Oasis Springs. Money cheats are allowed when building or placing your
        asylum. Depending on your mode of difficulty depends on what objects are
        allowed in your asylum, but all objects must be the cheapest at the
        beginning (Cheap counters, cheap beds, cheap couches etc.). You cannot
        have objects in the asylum which affects sim’s emotions (unless the
        object was obtained through a career reward) or which prevents fires.
        When you have finished building the asylum you cannot modify further
        unless sims get stuck in a certain area or your asylum saves up enough
        money for a new skill building item or when you can purchase an upgraded
        item. Pools are allowed but they are classified as a skill building
        item.
      </p>
      <p>
        When you have finished creating your asylum, your family funds must be
        at the required amount for your difficulty. To change the family funds
        you must first type into the cheat box “testingcheats true” (without
        quotations), then type into the cheat box “money (amount required). For
        example, for easy mode you would put “testingcheats true” followed by
        “money 1000” followed by “testingcheats false”.
      </p>
    </my-challenge>
  `,
})
export default class AsylumChallengePage {}
