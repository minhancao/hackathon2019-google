import React, { Component } from "react";
import LiveFeedPage from "./LiveFeedPage";

class TeacherPage extends Component {
  render() {
    return (
      <div className="App">
        This is the teacher page.
        <div>
          <LiveFeedPage></LiveFeedPage>
        </div>
      </div>
    );
  }
}

export default TeacherPage;
