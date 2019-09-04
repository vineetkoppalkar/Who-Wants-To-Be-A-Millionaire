import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import "./LifeLines.scss";

class LifeLines extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={4}>
          <Paper className="life-line">
            <h4 style={{ margin: 0 }}>Life line</h4>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="life-line">
            <h4 style={{ margin: 0 }}>Life line</h4>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className="life-line">
            <h4 style={{ margin: 0 }}>Life line</h4>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default LifeLines;
