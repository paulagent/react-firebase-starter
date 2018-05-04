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
  max-width: 1800px;
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
          <Typography type="headline" gutterBottom>
            <img
              src="/pictures/wing_chun_chinese_characters.gif"
              alt="wing chun chinese characters"
            />
          </Typography>
          <Typography type="body1" paragraph>
            Wing Chun is a 300 year old Chinese Martial Art and is currently the
            most popular Kung Fu art in the world; due in part to the late Bruce
            Lee & Ip Man movies. It is a street survival art that is simple,
            quick, effective and economical.
          </Typography>
        </Content>
      </Container>
    );
  }
}

export default Home;
