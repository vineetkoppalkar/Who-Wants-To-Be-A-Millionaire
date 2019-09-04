import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import "./ScoreTracker.scss";

class ScoreTracker extends Component {
  render() {
    const { currentScore, nextScore } = this.props;
    return (
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <span className="score-title">Current score:</span>
          <Paper className="score-badge">{currentScore}</Paper>
        </Grid>
        <Grid item xs={6}>
          <span className="score-title" style={{ float: "right" }}>
            Playing for:
          </span>
          <br />
          <Paper className="score-badge" style={{ float: "right" }}>
            {nextScore}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default ScoreTracker;
