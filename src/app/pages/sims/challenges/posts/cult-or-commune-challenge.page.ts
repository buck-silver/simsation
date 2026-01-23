import { Component } from '@angular/core';
import { MyChallengeModule } from '../components/my-challenge.module';

@Component({
  selector: 'cult-or-commune-challenge',
  imports: [MyChallengeModule],
  template: `
    <my-challenge heading="Cult or Commune Challenge">
      <section intro>
        <p>
          This challenge is very detailed, so please make sure to follow the
          link for the full rules.
        </p>
        <p>
          I love how it has extensive guidelines, but still gives you quite a
          bit of freedom to choose your specific style of gameplay. For example,
          you could have a really nice Commune full of happy hippies, or you
          could have an evil Cult that takes over the town.
        </p>
        <p>Check out the link below for the full challenge rules.</p>

        <section credits>
          <ul credit-list>
            <li
              credit
              [to]="'LibrarianSimmer'"
              [note]="
                '(Originally posted on the EA Forums, but is no longer available. Preserved in full below.)'
              "
            ></li>
          </ul>
        </section>
      </section>

      <h2>Challenge Overview</h2>
      <p>
        Have you ever wondered what it would be like to be a part of a commune,
        just living off the land? Or to lead a cult composed of people with
        ideas that just don't fit in with mainstream society? Have you ever
        thought about joining a group of people together just to see what you
        could come up with as a team? Then the Cult or Commune Challenge may be
        for you! You will recruit a group of people, develop your own customs,
        decide how to work together, develop your own code of dress, start up a
        collection of treasures, learn lots of skills, discover love, and have
        children to spread your ideas! Create your leader, gather your people,
        and you decide--cult or commune?
      </p>
      <p>
        <strong>Disclaimer:</strong> This challenge may be offensive to some--if
        you find cults or certain cult leaders grossly offensive. I am very
        interested in psychology and sociology. I have spent a lot of time
        studying the sociological elements of cults, as I find the group and
        leader dynamics somewhat fascinating. I, however, am in no way condoning
        killing people. I don’t even kill sims, to be honest. So I am not
        promoting killing (or drug use)--only group dynamics and leadership
        towards the good or the bad life. If you choose to kill, that is your
        decision; but this challenge is not glorifying murder or anything of
        that nature--nor is it meant to glorify killers. The character I created
        was loosely based on the personality of Charles Manson, as I recently
        read his biography and found him to be an interesting character. It is
        also not meant to be degrading to women, in any way, as I firmly believe
        in equal rights. However, oftentimes, women are not treated equally and
        I have made this fact evident in the challenge--to stay realistic.
      </p>
      <p>If you are still interested, please read on…</p>

      <h2>Getting Started</h2>
      <p>
        <strong>Your Leader:</strong> Start a new game file and create your own
        person or an infamous person who started their own commune or cult.
        Choose your traits wisely. Insane will allow you to share your
        conspiracy theories. Creative will allow you to share your ideas. Genius
        will allow you to share your ideas and inventions. You will need at
        least one of these traits to be able to hook people with your ideology
        or philosophies.
      </p>
      <p>
        <strong>Decide:</strong> Will your leader be charming and alluring, yet
        domineering once people are in? Or will he be kind to the group members
        and help care for them? You may have a leader who contributes to the
        group or one who just bosses everyone around and has them do all the
        work for him. Will he or she be kind or controlling? Decide in the
        beginning: basically nice or mean leader?
      </p>
      <p>
        <strong>Aspiration:</strong> Friend of the World is a good aspiration to
        start with, because it will immediately have you introducing yourself to
        people and making friends, which is what you do when you start a commune
        or a cult. However, you may choose any aspiration that does not involve
        having a job; but try to choose one that will make sense for a cult or
        commune–such as big happy family or public enemy.
      </p>
      <p>
        <strong>Properties:</strong> Buy an empty property in Newcrest. The
        smallest one on the very top is recommended, because it has a pond near
        it for fishing and has a lot of people walking around, as well as a
        little community park right beside it. It also has a small plot right
        beside it, which can later be used to expand your commune into a second
        household.
      </p>
      <p>
        Whichever plot you choose, make sure you check it out first to make sure
        it will fit your needs of fishing and socializing–as you will not be
        able to move, until you make enough money to purchase a different lot.
        Also, you may not travel at first. You are isolated to the one
        neighborhood you choose. (Note: A neighborhood is the area you can view
        from your lot, the area you can walk around in without “traveling”, or
        the area that “lights up” on the map view, when you hover over it with
        your mouse. It contains anywhere from two to five lots.)
      </p>
      <p>
        You may place one or two other household lots in the neighborhood to be
        your neighbors. However, try to find houses that fit the era of your
        commune leader. If you create your own leader, you may choose any decade
        you want.
      </p>
      <p>
        <strong>Household Goods:</strong> Give your person a tent, fire pit (if
        you have Outdoor Retreat--otherwise, use the small grill), and one
        activity item. Charles Manson would have a guitar. David Koresh would
        probably have books. Jim Jones would probably choose a microphone.
        (Please note: You may not, however, make money from paintings or from
        writing yet. Too easy.)
      </p>
      <p>
        You must earn your toilet and shower. For the first couple of days, you
        must use the toilet and shower at other lots. You are essentially a
        mooch.
      </p>
      <p>
        <strong>Job:</strong> You may not have a traditional job. You are trying
        to get away from the enslavement of modern society. You also may not
        cheat, unless specifically directed to here.
      </p>
      <p>
        <strong>Whims:</strong> You may fulfill whims that fit the challenge.
        Any whim not fitting within the rules of the challenge must be quickly
        banished (click the “x”--if only it were this easy in real life, huh?)
        Mind over matter.
      </p>
      <p>
        <strong>Lifespan:</strong> You may wish to set your lifespan on long,
        because this could take a while.
      </p>

      <h2>Rules and Guidelines for Recruitment</h2>
      <p>
        After day one, you will begin talking to sims passing by. You will try
        to find young, single females (or single male, if your leader is a
        woman) to begin your commune. If you find an irresistible attached
        person, you may ask them to move in. But try to go for the single, young
        adult or teen females (or males). They are the most vulnerable and
        naive--especially in earlier decades.
      </p>
      <p>
        You must get people to move in with you, without calling them on the
        phone. So you will need to do it upon first encounter, or when you
        happen to encounter the same person again. You may not call them on the
        phone to invite them over. You may not even use your phone, before the
        nineties (with the exception of people feigning for video games, which
        you will pretend is a handheld game). If they reject your offer, you are
        offended with them or you are embarrassed (depending on personality of
        your leader) and will never ask again. So be careful. (Don’t be alarmed:
        It is actually not difficult, at all, to get someone to move in with
        you.)
      </p>
      <p>
        As people move in, assign them roles according to their traits--the
        gardener, the fisherwoman or man, the entertainer, the cook, the
        collector, etc. to support the family. You MUST live off the
        land--plants, minerals, rocks, crystals, fish, and treasures you dig up.
        You cannot earn money through painting or writing, because it is
        unrealistically too much money. You are just trying to survive and enjoy
        nature and each other. It is not required that only one person cook or
        gather, etc.; but this should be their main job. Some people may have to
        have more than one main job or sometimes help others with their job, if
        they have nothing else to do.
      </p>
      <p>
        <strong>Collection:</strong> You should choose one collection to keep on
        the lot--either the statue dolls, or the rocks, or crystals, or one copy
        of all of them, if you’re feeling extra ambitious! But start up at least
        one collection for your family. I have started to collect the statues we
        dig up.
      </p>

      <h2>The First Week</h2>
      <h3>Day one</h3>
      <p>
        Buy your lot and your few allowed possessions--tent (or bed), fire pit
        (or grill), and one activity item.
      </p>
      <p>Set money to 0.</p>
      <p>
        Spend some time contemplating and developing your skill with the skill
        object you chose or reading your books. You may fish, if you want. You
        may not talk excessively to anyone. You are alone and a stranger. Feel
        the solitude today. This is the day your leader feels lonely and decides
        he wants to create something bigger than himself.
      </p>

      <h3>Day Two</h3>
      <p>
        Try to get one person to move in with you. Try to find a person who is a
        bit eccentric or who is creative, childish. You are limited to one
        person per day to move in.
      </p>
      <p>
        Try to develop some more skills--such as fishing, guitar, or painting.
        Remember, you can paint, but not sell. Painting and writing are strictly
        hobbies. Writing on a computer doesn’t even start until the eighties;
        but you cannot sell books yet either. You are literally living off the
        land.
      </p>
      <p>Try to collect some things--plants, frogs, and/or treasure to sell.</p>
      <p>
        <strong>Note:</strong> You can choose to write and sell songs, since
        this venture, for some reason, is very limited in the game. I believe
        you can only publish one song per week.
      </p>

      <h3>Day Three</h3>
      <p>
        You are now allowed to begin purchasing bathroom items for your
        lot--hopefully you have saved up some money.
      </p>
      <p>Acquire a second tent, if you can.</p>
      <p>Continue building your skills.</p>
      <p>Plant and begin tending a garden for food and funds.</p>
      <p>You may pursue another female, once you have a second tent.</p>
      <p>
        Begin singing or telling stories around the campfire and form your
        group’s nightly rituals.
      </p>
      <p>
        Generally, daytime should be for working and gathering and nighttime for
        enjoyment, hobbies, and relaxation. It is no easy feat living off the
        land and escaping mainstream society and jobs.
      </p>
      <p>
        You may purchase things like outdoor seating, picnic table,
        mood-inspiring objects, or an outdoor grill, as you have the funds--but
        NOT activity, skill-building, or fun items just yet. Only comfort,
        hunger, and hygiene items at this point. Remember, whatever you buy
        should make sense for the outdoors. There are several things you can do
        for fun with the items you are allowed and each other.
      </p>

      <h3>Day Four</h3>
      <p>Pursue another female (or male).</p>
      <p>
        You may have your leader have romantic relationships with the members,
        but you don’t have to. You may have group members visit other lots, but
        only within the neighborhood. If your leader is very controlling, female
        members cannot leave the lot without a male escort.
      </p>
      <p>
        Keep fishing, collecting, planting, etc. to make sure you have
        everything you need. Don’t forget to start up your collection (see
        above).
      </p>
      <p>
        You may add and visit a community lot to your neighborhood--such as a
        bar or a park. Try to stay within the theme of the era you are living
        in. You will probably have to make it yourself or at least modify it.
        Also, remember you are living in the boonies--whatever you build should
        not be extravagant.
      </p>
      <p>
        Don’t forget to flatter your members, to keep them hanging on your every
        word. Also, make sure you fill their heads with plenty of your ideas
        and/or conspiracies.
      </p>

      <h3>Day Five</h3>
      <p>
        You may now have one of the females pursue a male--using her good looks
        and charm. I mean, what else could convince someone to move out into the
        wilderness with a bunch of crazy people? Bring him to your leader or
        your leader to him to make sure he approves and gets along with him,
        before inviting him to move in.
      </p>
      <p>
        <strong>Goals and Beliefs:</strong> You should begin thinking about what
        type of commune you are building, based on the traits and aspirations of
        the people you have gathered. Will you be a peace, joy and love type of
        commune, which only does good? Or will you be an evil clan that destroys
        others and makes tons of enemies? Or somewhere in between--with both
        types trying to live together?
      </p>
      <p>
        Begin to set your own parameters for your group: What are your beliefs?
        What are your goals? What are your rules? Write them down. Do you want
        to raise children with the ideology which you hold true? Do you want to
        befriend the community and do good deeds? What do you want to achieve?
        Use the members’ aspirations as a guide. Remember, those closest to the
        leader will have the most leverage, when it comes to setting goals. For
        example, if the one closest to him desires a mansion, then this goal
        holds more weight with the leader.
      </p>
      <p>
        Your male members may never usurp the authority of your original leader,
        unless he dies. He may have relations with the same women, but he is
        never above the leader. He must obey the leader, especially if the
        leader is domineering. The males become his henchmen and help keep the
        women in line.
      </p>

      <h3>Day Six</h3>
      <p>
        You may have a female pursue another male today. Don’t forget to see how
        he interacts with your leader, before moving him in. After six members,
        you will begin to add more slowly--one per week (assuming you have
        room). Try focusing on getting everyone friendly with each other. Or, if
        you prefer, you can have confrontations between certain individuals.
        Your sims may pair off as couples or, if you think you can get away with
        it, get very friendly with any or all.
      </p>
      <p>
        If everything is going fine, you may begin trying for a baby, if you
        wish. It doesn’t really matter which couple pairs off--everyone is fair
        game. Just remember, you may want to mate your leader--he may want to
        have an heir to continue on the commune or, if he is domineering and
        selfish, he may select another child and take him as his own. When
        children are born into cults or communes, they are often considered the
        child of all members equally.
      </p>
      <p>
        Set your trademark dress code: Example-all of my members must wear
        sandals or flip-flops. This is all I have for now, but Charlie may come
        up with another rule at any time. (Hint: You can change clothes in the
        tent.)
      </p>

      <h3>Day Seven and Beyond</h3>
      <p>Each week--</p>
      <ul>
        <li>
          <strong>On Saturdays:</strong> You may add another community lot and
          take a group outing outside of the neighborhood. Be careful what you
          spend on your day out! Shopping day is tomorrow!
        </li>
        <li>
          You may add one more member to the group each week (assuming you have
          the space).
        </li>
        <li>
          <strong>On Sundays:</strong> You may purchase one more money-making
          item, one more skill-building item, and add an additional room, as
          funds permit. Building a pool would be considered a skill-building
          item. If you don’t have the funds, you will need to save up for next
          Sunday. I like to visit one of the stores in Magnolia Promenade to
          pretend we are shopping and also to interact with other people.
        </li>
      </ul>

      <h2>Building</h2>
      <p>
        Keep in mind that the group members are building the house themselves.
        It should not look the Hilton. It should look like a cabin. You are out
        in the country or wilderness. Don’t forget to stay within the era.
      </p>

      <h2>Defectors</h2>
      <p>
        Some people are just not cut out for this kind of life--such as
        ambitious people, who really desire to have a job. If you decide someone
        doesn’t fit the group or if they get too unhappy and/or make others
        unhappy, or get disrespectful with the leader, you may decide to kick
        them out or they may decide to quit and run off. Then you will have room
        to replace them; but you will also lose everything you have invested in
        them. So choose wisely. Don’t forget to leave some room for children.
      </p>

      <h2>Generations</h2>
      <p>
        After the firstborn becomes a teen, you may advance ten years. After
        they become a young adult, you may advance another ten years. Therefore,
        this may allow for additional objects you have not had before--such as a
        better TV or possibly a computer. But you still may not call people to
        invite them over to ask them to join, although you may use your phone to
        socialize.
      </p>
      <p>
        For every generation born, you may expand out to another "neighborhood"
        within the world you are living (Newcrest). (It just occurred to me,
        this would have been an awesome challenge for the desert world. However,
        it would need to be cleared out first.)
      </p>

      <h2>Breeding artists</h2>
      <p>
        Once you have a child, you may begin raising them up to be an artist, in
        order to spread the ideologies you have created within your group. You
        may choose one type of artist (painter, writer, or musician) per
        generation, in any order. All of the adults help raise the kid.
      </p>

      <h3>Painter</h3>
      <p>Painters must have:</p>
      <ul>
        <li>Completed the creativity aspiration, as a child</li>
        <li>
          Have a parent who has maxed the painting skill by the time the kid
          (2nd gen painter) becomes a young adult. They have been instructed and
          taught by their parent, but they will go above and beyond their
          parents, by selling their work.
        </li>
        <li>Must have the creativity and art lover traits.</li>
        <li>
          Before you begin selling paintings, you must decide what your style
          will be and it must match the style of the group. So, if you are
          mushroom-eating psychedelics, probably the surreal style would best
          suit you.
        </li>
        <li>
          You must give every painting a name that centers around the philosophy
          of the group. You are trying to spread the word.
        </li>
        <li>
          You may only paint one painting per day (real painting usually take
          weeks or months) and it must be small or medium.
        </li>
        <li>
          You may only paint one painting per day (real painting usually take
          weeks or months) and it must be small or medium.
        </li>
      </ul>

      <h3>Writer</h3>
      <p>Writers must:</p>
      <ul>
        <li>Complete the Knowledge aspiration, as a child.</li>
        <li>Must also be read to, as a child, almost everyday.</li>
        <li>
          They must visit a library a few times, while growing up--at least once
          as a child and once as a teen.
        </li>
        <li>They must have the creativity trait.</li>
        <li>You must self-publish your first five books.</li>
        <li>You may publish up to two books per week.</li>
        <li>
          You must name each book you write after the ideology of your clan. So,
          if my ideology is living off the land, I may write a book called "How
          to Beat the Street and Live in the Heat" (yes, I realize this is
          lame...lol)--or whatever. Be creative! Or if your group believes in
          aliens, it may be called “UFOs Among Us”.
        </li>
        <li>You must publish at least 10 books to complete this goal.</li>
      </ul>

      <h3>Musician</h3>
      <p>Musicians must:</p>
      <ul>
        <li>Complete the motor aspiration as a child.</li>
        <li>Must have a radio to listen to, as soon as they age up.</li>
        <li>
          Must have a parent who has maxed out an instrument, by the time the
          kids ages to young adult.
        </li>
        <li>
          Must spend time around the campfire, singing with their parents. If
          you don't have the campfire, have their parent mentor them in
          instrument.
        </li>
        <li>They must have the Music Lover trait.</li>
        <li>You must name each song after the beliefs of your group.</li>
        <li>You may publish up to one song per week.</li>
        <li>You must publish at least 5 songs to complete this goal.</li>
      </ul>

      <h3>Expanding</h3>
      <p>
        If you wish, you may expand your commune to a second household, after
        you have purchased everything you feel you need for the first lot. You
        will need to designate the second household's sub-leader--someone who is
        in charge, when your leader is not there. You may rotate, switching
        between households, if you want and also visit each other, throw parties
        together, etc. You may move people between the households, as you see
        fit.
      </p>

      <h3>Completing the Challenge</h3>
      <p>
        The challenge can be successfully completed, after you raise all three
        artists--one per generation--and complete the other goals you have set
        for your group, based on your aspirations--such as build a house, raise
        children together, throw great parties, become friends of the world,
        public enemy, or after completing everyone’s aspirations--or the
        possible ones, without having jobs. You set your own goals.
      </p>

      <h3>Stories and sharing</h3>
      <p>
        You may elaborate your story however you want; and I encourage sharing
        your progress on the challenge here and anywhere you want. I would love
        to see them!
      </p>

      <h3>The Rules (Review)</h3>
      <ul>
        <li>
          No cheating--unless it’s to reset a glitch or something of that
          nature. Absolutely no money or need cheating.
        </li>
        <li>
          You must begin with a tent (or one bed), fire pit (or grill), and one
          activity item and wait until Day 3 to buy bathroom items.
        </li>
        <li>
          You cannot have a traditional job and none of your members can get
          traditional jobs.
        </li>
        <li>
          You must get people to move in with you, without calling them on the
          phone.
        </li>
        <li>
          You MUST live off the land--plants, minerals, rocks, crystals, fish,
          and treasures you dig up. You cannot earn money through painting or
          writing, at first, because it is unrealistically too much money. And
          there are limits to how often you can sell in later generations.
        </li>
        <li>
          You may, however, earn money through writing songs with a guitar or
          violin. (Or a piano, once you make a house.)
        </li>
        <li>
          Set your money to 0 after buying your lot, your tent, your fire pit,
          and your activity item.
        </li>
        <li>
          Try your best to stay within what is realistic for the era you are
          living in.
        </li>
        <li>
          You must have at least three females, before you can begin inviting
          males. (Or vice-versa, if you choose to have a female leader.)
        </li>
        <li>
          You must wait until each weekend to add additional community lots,
          skill-building, or fun items. (Up to one of each, per weekend.)
        </li>
        <li>
          There are many requirements for raising artists. Please review lists
          above.
        </li>
      </ul>
    </my-challenge>
  `,
})
export default class CultOrCommuneChallengePage {}
