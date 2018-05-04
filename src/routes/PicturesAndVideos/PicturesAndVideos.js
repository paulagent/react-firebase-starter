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

class PicturesAndVideos extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Content>
          <Typography type="headline" gutterBottom>
            <strong>Here are the pictures and classes information</strong>
          </Typography>
          <Typography type="body1" paragraph>
            Pictures
          </Typography>

          <Typography type="body1" paragraph>
            Classes
          </Typography>
        </Content>
      </Container>
    );
  }
}

export default PicturesAndVideos;
