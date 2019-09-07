import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import People from '@material-ui/icons/PeopleOutlined';
import Call from '@material-ui/icons/Call';

import "./LifeLines.scss";

class LifeLines extends Component {
  render() {
    const {
      enableLifeLines,
      hasAudiencePoll,
      audiencePollHandler,
      hasPhoneAFriend,
      phoneAFriendHandler,
      hasFiftyFifty,
      fiftyFiftyHandler
    } = this.props;
    return (
      <Grid container>
        <Grid item xs={4} className="life-line-container">
          <Button
            className="hovicon effect-1 sub-a"
            onClick={audiencePollHandler}
            disabled={!hasAudiencePoll || !enableLifeLines}
          >
            <Paper className="life-line">
              <People />
            </Paper>
          </Button>
          <p className="life-line-description">Audience Poll</p>
        </Grid>
        <Grid item xs={4} className="life-line-container">
          <Button
            className="hovicon effect-1 sub-a"
            onClick={phoneAFriendHandler}
            disabled={!hasPhoneAFriend || !enableLifeLines}
          >
            <Paper className="life-line">
              <Call />
            </Paper>
          </Button>
          <p className="life-line-description">Phone a Friend</p>
        </Grid>
        <Grid item xs={4} className="life-line-container">
          <Button
            className="hovicon effect-1 sub-a"
            onClick={fiftyFiftyHandler}
            disabled={!hasFiftyFifty || !enableLifeLines}
          >
            <Paper className="life-line">
              <h4 style={{ margin: 0 }}>50/50</h4>
            </Paper>
          </Button>
          <p className="life-line-description">Fifty-Fifty</p>
        </Grid>
      </Grid>
    );
  }
}

export default LifeLines;
