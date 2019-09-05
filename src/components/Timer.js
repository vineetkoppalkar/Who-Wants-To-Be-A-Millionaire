import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./Timer.scss";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasHandledTimerExpire: false,
      timerValue: 60,
      progressValue: 100
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { timerValue, progressValue } = this.state;
      if (timerValue > 0) {
        this.setState({
          timerValue: timerValue - 1,
          progressValue: progressValue - 1.67
        });
      } else {
        const { hasHandledTimerExpire } = this.state;
        const { handleTimerExpire } = this.props;
        if (!hasHandledTimerExpire) {
          handleTimerExpire();
          this.setState({hasHandledTimerExpire: true})
        }
      }
    }, 1000);
  }

  resetTimer = () => {
    this.setState({
      hasHandledTimerExpire: false,
      timerValue: 60,
      progressValue: 100
    });
  };

  render() {
    const { timerValue, progressValue } = this.state;
    return (
      <div className="timer-container">
        <Paper id="timer">
          <CircularProgress
            className="circularProgress"
            variant="static"
            value={progressValue}
          />
          <h2 id="timer-value">{timerValue}</h2>
        </Paper>
      </div>
    );
  }
}

export default Timer;
