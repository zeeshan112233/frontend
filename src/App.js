import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.css";
import BaseRouter from "./base";

class App extends Component {
  render() {
    return (
      <Router>
        <BaseRouter />
      </Router>
    );
  }
}

export default App;
