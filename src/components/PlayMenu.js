import React, { Component } from 'react';

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import logo from "../assets/images/logo.png";

import "./PlayMenu.scss";

class PlayMenu extends Component {
  render() {
    const { letsPlay } = this.props;
    return (
      <Paper className="play-menu">
        <img alt="Who Wants to Be a Millionaire" src={logo} className="logo" />
        <h1 className="game-title">Who Wants to Be a Millionaire</h1>
        <h2 className="game-subtitle">Video Game Edition</h2>
        <Button 
          variant="contained"
          onClick={letsPlay}
        >
          Let's Play!
        </Button>
      </Paper>
    );
  }
}

export default PlayMenu;
