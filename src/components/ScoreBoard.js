import React, { Component } from 'react';

import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from '@material-ui/core/Button';

import "./ScoreBoard.scss";

const scoreAmounts = [
  100,
  200,
  300,
  500,
  1000,  // 4
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
]

const reversedScoreAmounts = scoreAmounts.reverse();

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curScoreIndex: 7
    }
  }

  render() {
    const { container, mobileOpen, handleDrawerToggle } = this.props;
    const { curScoreIndex } = this.state;
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
              <div className="toolbar" />
              <Divider />
              <List>
                {reversedScoreAmounts.map((scoreAmount, index) => {
                  const questionNumber = reversedScoreAmounts.length - index;
                  if (questionNumber - 1 === curScoreIndex) {
                    return <ListItem key={scoreAmount}>
                      <Button 
                        variant="outlined" 
                        style={{width: "100%"}}
                        color="inherit"
                      >
                        {`${questionNumber}. ${scoreAmount}`}
                      </Button>
                    </ListItem>
                  } else if (questionNumber - 1 < curScoreIndex) {
                    return <ListItem key={scoreAmount}>
                      <Button 
                        variant="outlined" 
                        style={{width: "100%"}}
                      >
                        {`${questionNumber}. ${scoreAmount}`}
                      </Button>
                    </ListItem>
                  } else {
                    return <ListItem key={scoreAmount}>
                      <Button 
                        variant="outlined" 
                        style={{width: "100%"}}
                        disabled
                      >
                        {`${questionNumber}. ${scoreAmount}`}
                      </Button>
                    </ListItem>
                  }
                })}
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            anchor="right"
            open
          >
            <div className="drawer-content">
              <div className="toolbar" />
              <Divider />
              <List>
                {reversedScoreAmounts.map((scoreAmount, index) => {
                  const questionNumber = reversedScoreAmounts.length - index;
                  if (questionNumber - 1 === curScoreIndex) {
                    return <ListItem key={scoreAmount}>
                      <Button 
                        variant="outlined" 
                        style={{width: "100%"}}
                        color="inherit"
                      >
                        {`${questionNumber}. ${scoreAmount}`}
                      </Button>
                    </ListItem>
                  } else if (questionNumber - 1 < curScoreIndex) {
                    return <ListItem key={scoreAmount}>
                      <Button 
                        variant="outlined" 
                        style={{width: "100%"}}
                      >
                        {`${questionNumber}. ${scoreAmount}`}
                      </Button>
                    </ListItem>
                  } else {
                    return <ListItem key={scoreAmount}>
                      <Button 
                        variant="outlined" 
                        style={{width: "100%"}}
                        disabled
                      >
                        {`${questionNumber}. ${scoreAmount}`}
                      </Button>
                    </ListItem>
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
