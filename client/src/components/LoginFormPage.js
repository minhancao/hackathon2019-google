import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core/";
import { Link } from "react-router-dom";

class LoginFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userPw: ""
    }; //this is how you set up state
  }

  handleUserId = e => {
    this.setState({ userId: e.target.value });
  };

  handleUserPw = e => {
    this.setState({ userPw: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <TextField
          id="standard-basic"
          label="standard"
          margin="normal"
          onChange={this.handleUserId}
        ></TextField>
        <TextField
          id="standard-basic"
          label="standard"
          margin="normal"
          value={this.state.userPw}
          onChange={this.handleUserPw}
        ></TextField>
        <Link
          to={{
            pathname: "/student",
            state: [{ id: this.state.userId }]
          }}
        >
          Sign in as Student
        </Link>
        <Link
          to={{
            pathname: "/teacher",
            state: [{ id: this.state.userId }]
          }}
        >
          Sign in as Teacher
        </Link>
      </div>
    );
  }
}

export default LoginFormPage;
