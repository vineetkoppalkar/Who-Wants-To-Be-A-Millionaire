import React, { Component } from "react";

import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

import LifeLines from "./LifeLines";

import "./ScoreBoard.scss";

const scoreAmounts = [
  100,
  200,
  300,
  500,
  1000, // 4
  2000,
  4000,
  8000,
  16000,
  32000,
  64000, // 10
  125000,
  250000,
  500000,
  1000000 // 14
];

const reversedScoreAmounts = scoreAmounts.reverse();

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0
});

class ScoreBoard extends Component {
  componentDidMount() {
    const { curScoreIndex, setNextScore } = this.props;
    const score = formatter.format(scoreAmounts[14 - curScoreIndex]);
    setNextScore(score);
  }

  render() {
    const {
      container,
      mobileOpen,
      handleDrawerToggle,
      curScoreIndex
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
                <LifeLines />
              </div>
              <Divider />
              <List>
                {reversedScoreAmounts.map((scoreAmount, index) => {
                  const questionNumber = reversedScoreAmounts.length - index;
                  if (questionNumber - 1 === curScoreIndex) {
                    return (
                      <ListItem key={scoreAmount}>
                        <Button
                          variant="outlined"
                          className="score-amount"
                          color="inherit"
                        >
                          {`${questionNumber}) ${formatter.format(
                            scoreAmount
                          )}`}
                        </Button>
                      </ListItem>
                    );
                  } else if (questionNumber - 1 < curScoreIndex) {
                    return (
                      <ListItem key={scoreAmount}>
                        <Button variant="outlined" className="score-amount">
                          {`${questionNumber}) ${formatter.format(
                            scoreAmount
                          )}`}
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
                          {`${questionNumber}) ${formatter.format(
                            scoreAmount
                          )}`}
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
                <LifeLines />
              </div>
              <Divider />
              <List>
                {reversedScoreAmounts.map((scoreAmount, index) => {
                  const questionNumber = reversedScoreAmounts.length - index;
                  if (questionNumber - 1 === curScoreIndex) {
                    return (
                      <ListItem key={scoreAmount}>
                        <Button
                          variant="outlined"
                          className="score-amount"
                          color="inherit"
                        >
                          {`${questionNumber}) ${formatter.format(
                            scoreAmount
                          )}`}
                        </Button>
                      </ListItem>
                    );
                  } else if (questionNumber - 1 < curScoreIndex) {
                    return (
                      <ListItem key={scoreAmount}>
                        <Button variant="outlined" className="score-amount">
                          {`${questionNumber}) ${formatter.format(
                            scoreAmount
                          )}`}
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
                          {`${questionNumber}) ${formatter.format(
                            scoreAmount
                          )}`}
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
