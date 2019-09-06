import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import "./AudiencePoll.scss";

class AudiencePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOfA: 0,
      valueOfB: 100,
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
      <Grid container>

        <Grid item xs={1}>
          <p className="audience-option">A:</p>
        </Grid>
        <Grid item xs={10}>
          <LinearProgress
            className="audience-option-bar"
            // style={{transform: "translateX(50px) rotate(-90deg) translateX(-50px)"}}
            variant="determinate" 
            value={valueOfA}
          />
        </Grid>
        <Grid item xs={1}>
          <p className="audience-option-value">{`${valueOfA}%`}</p>
        </Grid>

        <Grid item xs={1}>
          <p className="audience-option">B:</p>
        </Grid>
        <Grid item xs={10}>
          <LinearProgress
            className="audience-option-bar"
            // style={{transform: "translateX(100px) rotate(-90deg) translateX(-100px)"}}
            variant="determinate" 
            value={valueOfB}
          />
        </Grid>
        <Grid item xs={1}>
          <p className="audience-option-value">{`${valueOfB}%`}</p>
        </Grid>

        <Grid item xs={1}>
          <p className="audience-option">C:</p>
        </Grid>
        <Grid item xs={10}>
          <LinearProgress
            className="audience-option-bar"
            // style={{transform: "translateX(150px) rotate(-90deg) translateX(-150px)"}}
            variant="determinate" 
            value={valueOfC}
          />
        </Grid>
        <Grid item xs={1}>
          <p className="audience-option-value">{`${valueOfC}%`}</p>
        </Grid>

        <Grid item xs={1}>
          <p className="audience-option">D:</p>
        </Grid>
        <Grid item xs={10}>
          <LinearProgress
            className="audience-option-bar"
            // style={{transform: "translateX(200px) rotate(-90deg) translateX(-200px)"}}
            variant="determinate" 
            value={valueOfD}
          />
        </Grid>
        <Grid item xs={1}>
          <p className="audience-option-value">{`${valueOfD}%`}</p>
        </Grid>
      </Grid>
    );
  }
}

export default AudiencePoll;
