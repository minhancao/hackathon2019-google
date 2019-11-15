import React, { Component } from "react";
import LiveFeedPage from "./LiveFeedPage";

import SideBar from './SideBar.js';

class StudentPage extends Component {
  render() {
    return (
      <div className="App">
        This is the student page.
        <div>
          <LiveFeedPage></LiveFeedPage>
        </div>
      </div>
    );
  }
}

export default StudentPage;
