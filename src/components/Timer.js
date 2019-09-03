import React, { Component } from 'react';

import Paper from "@material-ui/core/Paper";

import "./Timer.scss";

class Timer extends Component {
  render() {
    return (
      <div className="timer-container">
        <Paper id="timer">
          <h6 style={{margin: 0}}>Timer</h6>
        </Paper>
      </div>
    );
  }
}

export default Timer;