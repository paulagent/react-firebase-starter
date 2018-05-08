/**
 * React Starter Kit for Firebase and GraphQL
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiToolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton/IconButton';
import Avatar from 'material-ui/Avatar/Avatar';
import Menu, { MenuItem } from 'material-ui/Menu';
import styled from 'styled-components';

import auth from '../../auth';
import history from '../../history';
import Link from '../../components/Link';
import LoginDialog from './LoginDialog';

const Title = styled(Typography)`
  && {
    flex: 1;
    text-align: center;
    cursor: pointer;
  }
`;

function goHome() {
  history.push('/');
}

class Toolbar extends React.Component<{}, {}> {
  state = {
    loginOpen: false,
    accountMenuOpen: false,
    accountMenuAnchor: null,
  };

  componentDidMount() {
    this.unlisten = auth.onShowLoginDialog(this.showLoginDialog);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  showLoginDialog = event => {
    this.setState({ loginDialogOpen: true });
  };

  hideLogin = () => {
    this.setState({ loginDialogOpen: false });
  };

  handleAccountMenuOpen = event => {
    this.setState({ accountMenuAnchor: event.currentTarget });
  };

  handleAccountMenuClose = () => {
    this.setState({ accountMenuAnchor: null });
  };

  goToAccount = () => {
    this.setState({ accountMenuAnchor: null });
    history.push('/account');
  };

  render() {
    const accountMenuOpen = Boolean(this.state.accountMenuAnchor);

    return (
      <AppBar color="black" position="static">
        <MuiToolbar>
          <Title type="title" color="inherit" onClick={goHome}>
            <div>
              <img
                src="/pictures/clubLogo.JPG"
                alt="club_logo"
                height="120"
                width="120"
              />
            </div>
          </Title>
          {
            <React.Fragment>
              <Button color="inherit" href="/" onClick={Link.handleClick}>
                <span className="mui--text-center">WELCOME</span>
              </Button>
              <Button color="inherit" href="/about" onClick={Link.handleClick}>
                ABOUT THE CLUB
              </Button>
              <Button
                color="inherit"
                href="/picturesAndVideos"
                onClick={Link.handleClick}
              >
                PICTURES AND VIDEOS
              </Button>
              <Button
                color="inherit"
                href="/classes"
                onClick={Link.handleClick}
              >
                CLASSES
              </Button>
              <Button
                color="inherit"
                href="/questions"
                onClick={Link.handleClick}
              >
                Questions
              </Button>
              <Button
                color="inherit"
                href="/contact"
                onClick={Link.handleClick}
              >
                CONTACT US
              </Button>
            </React.Fragment>
          }
        </MuiToolbar>
        <LoginDialog
          open={this.state.loginDialogOpen}
          onClose={this.hideLogin}
        />
      </AppBar>
    );
  }
}

export default Toolbar;
