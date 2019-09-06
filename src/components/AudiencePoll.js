import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import "./AudiencePoll.scss";

class AudiencePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOfA: 0,
      valueOfB: 0,
      valueOfC: 0,
      valueOfD: 0
    }
  }

  componentDidMount() {
    const { options, correctAnswerIndex } = this.props;

    const correctAnswerValue = this.getRandomInt(50, 85);
    const wrongOptionOneValue = this.getRandomInt(0, 100 - correctAnswerValue);
    const wrongOptiontwoValue = this.getRandomInt(0, 100 - correctAnswerValue - wrongOptionOneValue);  
    const wrongOptionThreeValue = 100 - correctAnswerValue - wrongOptionOneValue - wrongOptiontwoValue;
    
    switch (correctAnswerIndex) {
      case 0:
        this.setState({
          valueOfA: correctAnswerValue,
          valueOfB: wrongOptionOneValue,
          valueOfC: wrongOptiontwoValue,
          valueOfD: wrongOptionThreeValue
        });
        return;
      case 1:
        this.setState({
          valueOfA: wrongOptionOneValue,
          valueOfB: correctAnswerValue,
          valueOfC: wrongOptiontwoValue,
          valueOfD: wrongOptionThreeValue
        });
        return;
      case 2:
        this.setState({
          valueOfA: wrongOptionOneValue,
          valueOfB: wrongOptiontwoValue,
          valueOfC: correctAnswerValue,
          valueOfD: wrongOptionThreeValue
        });
        return;
      case 3:
        this.setState({
          valueOfA: wrongOptionOneValue,
          valueOfB: wrongOptiontwoValue,
          valueOfC: wrongOptionThreeValue,
          valueOfD: correctAnswerValue
        });
        return;
      default:
        return;
    }
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const { valueOfA, valueOfB, valueOfC, valueOfD } = this.state;
    return (
      <Grid container className="audience-poll">
        <Grid item xs={3}>
          <p className="audience-option-value">{`${valueOfA}%`}</p>
          <div className="audience-option-bar-container">
            <div style={{height: `${100 - valueOfA}%`, background: "#424242"}}></div>
          </div>
          <p className="audience-option">A</p>
        </Grid>

        <Grid item xs={3}>
          <p className="audience-option-value">{`${valueOfB}%`}</p>
          <div className="audience-option-bar-container">
            <div style={{height: `${100 - valueOfB}%`, background: "#424242"}}></div>
          </div>
          <p className="audience-option">B</p>
        </Grid>

        <Grid item xs={3}>
          <p className="audience-option-value">{`${valueOfC}%`}</p>
          <div className="audience-option-bar-container">
            <div style={{height: `${100 - valueOfC}%`, background: "#424242"}}></div>
          </div>
          <p className="audience-option">C</p>
        </Grid>

        <Grid item xs={3}>
          <p className="audience-option-value">{`${valueOfD}%`}</p>
          <div className="audience-option-bar-container">
            <div style={{height: `${100 - valueOfD}%`, background: "#424242"}}></div>
          </div>
          <p className="audience-option">D</p>
        </Grid>
      </Grid>
    );
  }
}

export default AudiencePoll;
