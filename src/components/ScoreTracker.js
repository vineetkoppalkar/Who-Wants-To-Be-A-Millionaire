import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";

import './ScoreTracker.scss';

class ScoreTracker extends Component {
  render() {
    return (
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <Paper className="score-badge">Current</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className="score-badge" style={{float: "right"}}>Next</Paper>
        </Grid>
      </Grid>
    )
  }
}

export default ScoreTracker;
