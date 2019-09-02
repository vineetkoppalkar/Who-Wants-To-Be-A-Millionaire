import React, { Component } from 'react';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./CustomAppBar.scss";

class CustomAppBar extends Component {
  render() {
    const { title, handleDrawerToggle } = this.props
    return (
      <AppBar position="fixed" id="appBar">
        <Toolbar>
          <h2>{ title }</h2>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => handleDrawerToggle()}
            id="menuButton"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default CustomAppBar;