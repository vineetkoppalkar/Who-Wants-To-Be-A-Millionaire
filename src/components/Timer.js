import React, { Component } from 'react';

import Paper from "@material-ui/core/Paper";

import "./Timer.scss";

class Timer extends Component {
  render() {
    return (
      <div className="timer-container">
        <Paper id="timer">
          <h4 style={{margin: 0}}>Timer</h4>
        </Paper>
      </div>
    );
  }
}

export default Timer;