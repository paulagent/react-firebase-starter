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
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const Container = styled.div`
  max-width: 1000px;
  box-sizing: border-box;
  margin: 0 auto;
`;

const Content = styled(Card)`
  padding: 1em 2em;
  margin: 2em 0;
`;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Training extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Content>
          <Typography type="headline" gutterBottom>
            <strong>Our Training Philosophy</strong>
          </Typography>
          <Typography type="body1" gutterBottom>
            Classical Wing Chun techniques combined with street combat
            techniques.
          </Typography>
          <div className={styles.root}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <Paper className={styles.paper}>
                  xs=12 sm=6
                  <Typography type="body1" gutterBottom>
                    First Form
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={styles.paper}>
                  xs=12 sm=6
                  <Typography type="body1" gutterBottom>
                    Second Form
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Paper className={styles.paper}>
                  xs=12 sm=6
                  <Typography type="body1" gutterBottom>
                    Third Form
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={styles.paper}>
                  xs=12 sm=6
                  <Typography type="body1" gutterBottom>
                    Dummy Form
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Content>
      </Container>
    );
  }
}

export default Training;
