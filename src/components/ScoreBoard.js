import React, { Component } from 'react';

import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "./ScoreBoard.scss";

class ScoreBoard extends Component {
  render() {
    const { container, mobileOpen, handleDrawerToggle } = this.props;
    return (
      <nav className="drawer" aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                  (text, index) => (
                    <ListItem button key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  )
                )}
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
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                  (text, index) => (
                    <ListItem button key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  )
                )}
              </List>
            </div>
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

export default ScoreBoard;
