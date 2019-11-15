import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

class CustomNavbar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar color="secondary">
          <IconButton
            edge="start"
            className=""
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className="">
            <Button color="secondary">Home</Button>
          </Link>
          <Link to="/teacher" className="">
            <Button color="secondary">Teacher</Button>
          </Link>
          <Link to="/student" className="">
            <Button color="inherit">Student</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default CustomNavbar;
