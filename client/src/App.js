import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
import LiveFeedPage from "./components/LiveFeedPage";
import LoginPage from "./components/LoginPage";
import StudentPage from "./components/StudentPage";
import TeacherPage from "./components/TeacherPage";
import CustomLayout from "./components/CustomLayout";

const DefaultContainer = () => (
  <CustomLayout>
    <div>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/student" component={StudentPage} />
      <Route exact path="/teacher" component={TeacherPage} />
    </div>
  </CustomLayout>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route component={DefaultContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
