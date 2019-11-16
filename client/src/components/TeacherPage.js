import React, { Component } from "react";
import LiveFeedPage from "./LiveFeedPage";

class TeacherPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
  }
  render() {
    return (
      <div className="App">
        This is the teacher page.
        <div>
          <LiveFeedPage userId={this.props.location.state}></LiveFeedPage>
        </div>
      </div>
    );
  }
}

export default TeacherPage;
