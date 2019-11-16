import React, { Component } from "react";
import LiveFeedPage from "./LiveFeedPage";

class StudentPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
  }
  render() {
    return (
      <div className="App">
        This is the student page.
        <div>
          <LiveFeedPage userId={this.props.location.state}></LiveFeedPage>
        </div>
      </div>
    );
  }
}

export default StudentPage;
