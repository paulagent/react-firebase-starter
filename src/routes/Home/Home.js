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

class Home extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Content>
          <Typography type="body1" paragraph>
            <strong>Wing Chun</strong> is a 300 year old Chinese Martial Art and is currently the
            most popular Kung Fu art in the world; due in part to the late Bruce
            Lee & Ip Man movies. It is a street survival art that is simple,
            quick, effective and economical.
          </Typography>
          <img
            src="/pictures/sticking_hands_bruce_lee_and_ip_man.jpg"
            alt="Sticking Hands Bruce Lee and Ip Man"
            style={{alignItems: "center", width: 400, height: 300, justifyContent: "center", alignSelf: "center"}}
          />
          <Typography type="body1" paragraph>
            The movement in the picture is known as "Sticking Hands". This technique requires keeping in constant contact with your opponent's arms, through multiple short-range movements, to deflect attacks with hard, straight and fast strikes. 
          </Typography>

        </Content>
      </Container>
    );
  }
}

export default Home;
