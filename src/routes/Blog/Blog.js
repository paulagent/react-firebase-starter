/**
 * React Starter Kit for Firebase and GraphQL
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React from 'react';
import styled from 'styled-components';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const Container = styled.div`
  max-width: 1000px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Content = styled(Card)`
  padding: 1em 2em;
  margin: 2em 0;
`;

class Blog extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Content>
          <Typography type="headline" gutterBottom>
            Frequently Asked Questions
          </Typography>
          <strong>What is Wing Chun?</strong>
          <p>
            Wing Chun is a 300-year old Chinese martial art invented by a woman
            of the same name. Wing Chun is currently the most popular Kung Fu in
            the world; due in part to the late Bruce Lee and the Ip Man movies
            starring Donnie Yen. Wing Chun is a street survival art that is
            simple, quick, effective and economical. With intensive training,
            the complete art can be learned in less than six months. Wing Chun
            Kung Fu does not rely on brute strength. Low kicks, straight punches
            and immediate counterattacks are the trademark of Wing Chun. A form
            of 108 movements consist almost the entire art. Wing Chun is
            basically the best movements taken from various Kung Fu styles. The
            movements selected are those that can be learned for army combat
            within 6 months.{' '}
          </p>

          <strong>Is Wing Chun for Everyone?</strong>
          <p>
            Wing Chun is designed for self-defence as opposed to tournament
            fighting. Wing Chun is probably the simplest and quickest martial
            art to learn for self-defence. The late Bruce Lee’s primary art was
            Wing Chun. He studied this art for only two years. The main feature
            of Wing Chun is that it is practiced in a very short range such as
            when someone is already in your space or if you are in an enclosed
            space such as an elevator or in a crowded bar.
          </p>

          <strong>How do You Know it Works?</strong>
          <p>
            We have taught various members of the Saanich police who said it
            works. We have taught various bouncers in town who said it works. We
            have taught a member of the maximal security penitentiary in
            Abbotsford who said the art has never failed him even in very
            violent confrontations against multiple opponents. One of our
            instructors was part of the Iranian army for several years and lived
            many years in countries where being Iranian was not a popular thing.
            As a result he has had the need to use Wing Chun on numerous
            occasions including during his time in the Iran and Iraq war.
          </p>

          <strong>How does Wing Chun Compare to Other Martial Arts?</strong>
          <p>
            Every martial art can be good. Each has their own area of
            specialization. Wing Chun covers all ranges and also weapons
            self-defence. However, the specialty is close range, hand to hand
            combat as the street setting. We have had students who were
            proficient in other arts, such as Escrima, Judo, TaekwonDo, Karate,
            Thai boxing and MMA, who all said that Wing Chun was a good
            compliment to their own art since it addressed areas that were
            different than their own arts addressed.
          </p>

          <strong>I have Never Heard of Wing Chun Before.</strong>
          <p>
            Wing Chun is the most popular Kung Fu style practiced today for
            self-defence. For health and fitness, the prize probably goes to the
            art of Tai Chi. Not many people know, but Bruce Lee’s main art
            before developing his own art of Jeet Kune Do, was Wing Chun. The
            core of Jeet Kune Do according to Dan Inosanto, who was one of Bruce
            Lee’s top students, is Wing Chun. In Europe, it is reported that
            more than one million people practice Wing Chun. Wing Chun has
            suddenly gained a lot of popularity as a result of the movies called
            Ip Man. Ip Man was Bruce Lee’s Master. Ip Man 3 also has the famous
            boxer Mike Tyson fighting Donnie Yen in the movie.
          </p>

          <strong>Is it Hard to Learn Wing Chun?</strong>
          <p>
            In concept, Wing Chun is like a western boxing art mixed with
            western fencing. It differs from boxing because it also has kicking,
            weapons and grappling. The entry footwork is like that of fencing
            and boxing but there is no jumping as in some styles of boxing. The
            turning stance is also different from the footwork of fencing. We
            use this for defence since we would rather turn out of the way
            rather than to go backwards with a retreating step. Wing Chun has
            just three key hand techniques called the Palm up hand, the Wing
            hand and the Controlling hand. There are no difficult things to
            learn in Wing Chun. The complete art can be learned in 6 months of
            intense training. How good you get depends on the amount of time put
            into the art.
          </p>

          <strong>
            On the Internet, it Says Wing Chung is No Good Because it does not
            do Ground Fighting.{' '}
          </strong>
          <p>
            Most Chinese martial arts are well rounded and usually include
            punching, kicking, grappling, joint locking and weapons. We cover
            all these aspects too. Each can take many years to learn if learned
            in full depth. But for self-defence, you don’t need to learn in such
            depth. In a multiple opponent scenario, you don’t want to go to the
            ground even the experts in grappling say this. However one of our
            instructors has done Iranian wrestling since age 6 and also has
            learned army combat takedown prevention in the Iranian army. So we
            definitely also qualify in the grappling area.
          </p>

          <strong>So is WIng Chun Just about Fighting?</strong>
          <p>
            At first many people join a martial art to learn something about
            self-defence. Most people fortunately never have to use the art for
            fighting. Martial Art has two parts: there is the combat element and
            the non-combat element. I would say a real martial art is something
            you can do and enjoy all your life. Boxers and MMA artists are
            definitely good, but this training takes a toll on your physical
            health and many people have to eventually give it up. What inspired
            me to do martial art was from seeing various Chinese masters, well
            into their 80’s who still were very good martial artists and who had
            very fit and healthy bodies. So to me the primary purpose eventually
            is a daily exercise for fitness and health.
          </p>

          <strong>Do I Need To Be Strong To Practice Wing Chung?</strong>
          <p>
            Wing Chun develops a strong body as does any martial art. But for
            use, Wing Chun is designed to use minimal strength to handle the
            opponent’s strength and small economical movements to match the
            opponent’s speed. Small simple movements are faster than large
            complicated movements. In Wing Chun, we try to use the opponent’s
            strength against them. This is the challenge of the art. Everyone
            can use brute strength, but assuming the opponent is stronger, brute
            strength will not work in a real fight.
          </p>

          <strong>What is the Training Like For Wing Chun?</strong>
          <p>
            Wing Chun consists of two parts. One part is when you are already in
            contact with the opponent. This part of the training is called
            Sticking Hands. The second part which relates to the Wing Chun
            Wooden Dummy training is to make contact with an opponent coming in
            from a distance. The first part relies on once sense of touch and
            can be done with eyes closed. The second part is common to most arts
            and relies on the visual system. There 5 key things which are
            trained are body positioning, sensitivity, timing, speed and lastly
            power. Wing Chun is trained in a cooperative and safe way. Safety is
            almost the most important. Without a cooperative partner in the
            beginning, nothing can be learned in this art.
          </p>
          <p>
            In every class we do some warm ups of punches, kicks and footwork.
            Then we practice various pre-arranged self-defense scenarios. Then
            we train the sticking hands, which teaches what to do when the
            opponent counters your movements. Each pair of partners may be
            training a different thing depending on their level in the art.
          </p>

          <strong>Where Can I learn More about Wing Chung?</strong>
          <p>
            These days there is a wealth of information on Youtube regarding
            every kind of martial art. I have written many articles on Wing Chun
            which can be Googled with “Wing Chun Ray Van Raamsdonk” I would
            recommend to look at Wong Shun Leung, Gary Lam, Emin Boztepe as
            representatives of good fighters. However there are many other good
            teachers on Youtube and in time you will know who appeals to you and
            who doesn’t. Also it is good to become knowledgeable about other
            martial arts as well. There is a whole intellectual philosophical
            side to this art which I have not touched upon as well. For
            information, please contact Ray Van Raamsdonk at
            victoriawingchun@hotmail.com or check out our{' '}
            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgroups%2FUVICWINGCHUN%2F">
              facebook page
            </a>.
          </p>
        </Content>
      </Container>
    );
  }
}

export default Blog;
