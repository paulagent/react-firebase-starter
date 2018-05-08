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

class About extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Content>
          <Typography type="headline" gutterBottom>
            Head Instructor - Ray Van Raamsdonk
          </Typography>
          <img
            src="/pictures/ray_van_raamsdonk.jpg"
            alt="Head Instructor - Ray Van Raamsdonk"
            style={{ width: 182, height: 290 }}
          />
          <br />
          <Typography type="body1" paragraph>
            Ray Van Raamsdonk is 71 years old and still very active in teaching
            and also learning as much as he can about Chinese culture and
            Chinese martial arts. Ray has a Master degree in Computer Science
            from the University of Toronto and an honors mathematics degree from
            the University of Alberta. Like most kids, Ray practiced a lot of
            informal wrestling in his early school days. It was not until first
            year University, in 1966, that Ray started his formal martial arts
            training in Japanese Karate. It was his first teacher Master Olaf
            Simon who introduced Ray to Chinese martial arts. In 1969, Ray moved
            to Toronto to study at U of T. While there he joined the Hung style
            Kung Fu club in Chinatown and studied that art intensely for about 5
            years under the masters James Lore and Jack Chin. Master James Lore
            passed away at age 96. In 1975 Ray moved to Vancouver to work. In
            Vancouver he started to study the art of Yang style Tai Chi under
            Master Raymond Chung. His master is now 103 years old.
          </Typography>
          <Typography type="body1" paragraph>
            A book written by Bruce Lee and also one written by Leung Ting
            inspired Ray to search for a Wing Chun teacher. Wing Chun was still
            relatively rare and hard to come by for non-Chinese students in the
            early 70’s. By luck, in 1976, Ray found a teacher by the name of
            Patrick Chow, who was a private student of the Late Ip Man. Ray
            continued his study of Tai Chi at the same time. After two years,
            Patrick Chow went back to Hong Kong. Then Ray met a Hong Kong
            student of Moy Yat, by the name of Johnnie Yu and from him continued
            to learn Wing Chun in exchange for Tai Chi lessons. Ray moved to
            Victoria in 1978 where he continued to learn Tai Chi from master
            Raymond Chung while starting to teach what he knew about Wing Chun.
            Again Ray was lucky to find a person by the name of Mark Lee, who
            learned bodyguard Wing Chun from the Jiu Wan lineage. In 1982, one
            of the Wing Chun group’s members moved to Vancouver to study at UBC.
            This student found a Chinese professor of chemical engineering who
            had, not only a background of Judo and Taekwondo, but was one of the
            few people to teach the complete system of Wing Chun. The teacher’s
            name was Dr. G.K. Khoe, and was a private student of Master Wang
            Kiu. In turn Wang Kiu was a private student of the late Grandmaster
            Ip Man.
          </Typography>
          <Typography type="body1" paragraph>
            After founding Victoria's first formal Wing Chun club in 1982, Ray
            invited various high level Wing Chun masters to visit Victoria to
            refine his Wing Chun. These masters included: Kenneth Chung, Tsui
            Shan Ting, Wong Shun Leung, Robert Chu, Chung Kwok Chow, Eddie
            Chong, Emin Boztepe, Lok Yiu’s student Winston Wan, Ralph Haenel,
            Robert Vogel, Bob Stevenson from Nanaimo and Ralph Haenel from
            Vancouver. In 1998 various Wing Chun practitioners from the USA and
            Canada came together with the idea of a seminar to compare and share
            Wing Chun knowledge, and as a benefit to raise money for Ray’s wife
            who was stricken with Cancer. Ray’s club also had a variety of
            experts from other arts give seminars so that his students would be
            open minded towards those martial arts. Ray’s Victoria wing Chun
            club has generated more than 30 students who at one time or another
            have taught Wing Chun. The highest compliment we have received was
            given by Master Wong Shun Leung (main teacher of the late Bruce Lee)
            who said that one of our female students by the name of Yvette Wong,
            had very perfect Wing Chun.
          </Typography>

          <Typography type="headline" gutterBottom>
            Instructor- Gerald Luxton
          </Typography>
          <img
            src="/pictures/gerald_luxton.jpg"
            alt="Instructor Gerald Luxton"
            style={{ width: 182, height: 280 }}
          />
          <br />
          <Typography type="body1" paragraph>
            Gerald’s martial arts journey began with sometimes violent
            encounters with two older brothers. Also one of his relatives was in
            the special British forces and some of that knowledge also rubbed
            off on Gewrald. In 1968 Gerald began studying Japanese Karate and
            briefly Aikido. Gerald was drawn to Chinese culture and has not only
            learned Mandarin but has studied Wu style Tai Chi for more than 40
            years. In 1989 Gerald met Ray Van Raamsdonk to study Wing Chun.
            Gerald progressed through the complete system and went to all the
            seminars from advanced Wing Chun masters that came to Victoria. One
            of those masters was Master Wong Shin Leung who was the primary
            teacher of the late Bruce Lee. Gerald became the most senior
            instructor under Ray Van Raamsdonk and has run his own club in the
            interior and also at the YMCA. Gerald is well read in all aspects of
            Chinese culture and definitely brings that aspect to his teaching of
            Chinese martial arts. Gerald is also knowledgeable in European and
            Western sword arts and is even now an avid competitive sport fencer.
          </Typography>

          <Typography type="headline" gutterBottom>
            Instructor- Sean Darling
          </Typography>
          <img
            src="/pictures/sean_darling.jpg"
            alt="Instructor Sean Darling"
            style={{ width: 250, height: 290 }}
          />
          <br />
          <Typography type="body1" paragraph>
            Sean Darling has been training martial arts since 1991 with a focus
            on Wing Chun since 1993. He boxed in high school in the days before
            MMA and has trained in Karate and Jujitsu but his primary interest
            and training has always been Wing Chun. Sean is interested in the
            sparring aspects of Wing Chun and the application of Wing Chun in
            off distance situations, He believes that students can benefit from
            the timing, distance and application of force that are learned from
            sparring with Wing Chun. Sean was granted a Wing Chun teaching
            certificate from Ray Van Raamsdonk in 2007. He is also a lifelong
            learner who is currently working on a PhD at the University of
            Victoria and teaches at the school as well as undertaking
            organizational theory research in addition to his regular day job.
            Sean has also competed in the August 2015 Victoria bodybuilding
            competition for the first time and next year hopes to be involved in
            local theatre. Sean believes that doing new and challenging
            activities is good for the mind and body.
          </Typography>

          <Typography type="headline" gutterBottom>
            Instructor- Reza Terani
          </Typography>
          <img
            src="/pictures/reza_terani_2.png"
            alt="Instructor Reza Terani"
            style={{ width: 250, height: 350 }}
          />
          <br />
          <Typography type="body1" paragraph>
            Reza started wrestling in Iran at age 6 and never stopped. Reza
            believes that the root of all fighting originates in wrestling since
            all cultures have this from the earliest times. At age 12 Reza
            started to learn Wing Chun in England for 4 years from Derrick
            Golden who was one of the top realistic fighters at that time. The
            training was very intense at several days a week and 3 hours a
            class. Everything was drilled thousands of times. Later Reza moved
            to the USA for school. In the USA Reza studied 2 years of Judo and 2
            years of Taekwondo. After that he studied 6 years of Wing Chun. Reza
            went back to Iran and was inducted into the Iranian army for 3
            years. During this time Reza learned the army version of Wing Chun
            applied to real combat. After that Reza studied wrestling for
            another 4 years. Later Reza moved to Canada where he has studied
            various lineages of Wing Chun for more than 20 years. Reza has also
            studied the art of Filipino stick fighting which was called Modern
            Arnis. Reza believes that his version of Wing Chun is the most
            practical way for Self Defense because of his many combat
            experiences and intense wrestling background. Various Internet sites
            look down on Wing Chun because it does not usually include ground
            fighting. However with Reza’s background this is not the case for
            us.
          </Typography>
        </Content>
      </Container>
    );
  }
}

export default About;
