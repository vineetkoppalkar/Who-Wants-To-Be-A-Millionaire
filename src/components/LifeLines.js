import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import People from '@material-ui/icons/PeopleOutlined';
import Call from '@material-ui/icons/Call';

import "./LifeLines.scss";

class LifeLines extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={4}>
          <Paper className="life-line">
            <People />
          </Paper>
          <p className="life-line-description">Audience Poll</p>
        </Grid>
        <Grid item xs={4}>
          <Paper className="life-line">
            <Call />
          </Paper>
          <p className="life-line-description">Phone a friend</p>
        </Grid>
        <Grid item xs={4}>
          <Paper className="life-line">
            <h4 style={{ margin: 0 }}>50/50</h4>
          </Paper>
          <p className="life-line-description">Fifty-Fifty</p>
        </Grid>
      </Grid>
    );
  }
}

export default LifeLines;
