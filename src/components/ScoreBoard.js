import React, { Component } from "react";

import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";

import LifeLines from "./LifeLines";

import "./ScoreBoard.scss";

class ScoreBoard extends Component {
  render() {
    const {
      container,
      mobileOpen,
      handleDrawerToggle,
      curScoreIndex,
      scoreAmounts,
      hasAudiencePoll,
      handleAudiencePoll,
      hasPhoneAFriend,
      handlePhoneAFriend,
      hasFiftyFifty,
      handleFiftyFifty
    } = this.props;

    return (
      <nav className="drawer" aria-label="mailbox folders">
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <div className="drawer-content">
              <div className="life-lines-wrapper">
                <LifeLines 
                  handleAudiencePoll={this.handleAudiencePoll}
                  handlePhoneAFriend={this.handlePhoneAFriend}
                  handleFiftyFifty={this.handleFiftyFifty}
                />
              </div>
              <Divider />
              <List>
                {scoreAmounts.map((scoreAmount, index) => {
                  const questionNumber = scoreAmounts.length - index;
                  if (questionNumber - 1 === curScoreIndex) {
                    return (
                      <ListItem key={scoreAmount}>
                        <Button
                          variant="outlined"
                          className="score-amount"
                          color="inherit"
                        >
                          {`${questionNumber}) ${scoreAmount}`}
                        </Button>
                      </ListItem>
                    );
                  } else if (questionNumber - 1 < curScoreIndex) {
                    return (
                      <ListItem key={scoreAmount}>
                        <Button variant="outlined" className="score-amount">
                          {`${questionNumber}) ${scoreAmount}`}
                        </Button>
                      </ListItem>
                    );
                  } else {
                    return (
                      <ListItem key={scoreAmount}>
                        <Button
                          variant="outlined"
                          className="score-amount"
                          disabled
                        >
                          {`${questionNumber}) ${scoreAmount}`}
                        </Button>
                      </ListItem>
                    );
                  }
                })}
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer variant="permanent" anchor="right" open>
            <div className="drawer-content">
              <div className="life-lines-wrapper">
                <LifeLines 
                  hasAudiencePoll={hasAudiencePoll}
                  handleAudiencePoll={this.handleAudiencePoll}
                  hasPhoneAFriend={hasPhoneAFriend}
                  handlePhoneAFriend={this.handlePhoneAFriend}
                  hasFiftyFifty={hasFiftyFifty}
                  handleFiftyFifty={this.handleFiftyFifty}
                />
              </div>
              <Divider />
              <List>
                {scoreAmounts.map((scoreAmount, index) => {
                  const questionNumber = scoreAmounts.length - index;
                  if (questionNumber - 1 === curScoreIndex) {
                    return (
                      <ListItem key={scoreAmount}>
                        <Button
                          variant="outlined"
                          className="score-amount"
                          color="inherit"
                        >
                          {`${questionNumber}) ${scoreAmount}`}
                        </Button>
                      </ListItem>
                    );
                  } else if (questionNumber - 1 < curScoreIndex) {
                    return (
                      <ListItem key={scoreAmount}>
                        <Button variant="outlined" className="score-amount">
                          {`${questionNumber}) ${scoreAmount}`}
                        </Button>
                      </ListItem>
                    );
                  } else {
                    return (
                      <ListItem key={scoreAmount}>
                        <Button
                          variant="outlined"
                          className="score-amount"
                          disabled
                        >
                          {`${questionNumber}) ${scoreAmount}`}
                        </Button>
                      </ListItem>
                    );
                  }
                })}
              </List>
            </div>
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

export default ScoreBoard;
