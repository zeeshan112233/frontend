import React, { Component } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import Pages from "./Pages";
import history from "./history";
// import "./App.css";
import Addstream from "./pages/Dashboarddetails/Addstream";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboarddetails/DashboardHome";
import Profile from "./pages/Dashboarddetails/Profile";

const BaseRouter = () => (
  <div>
    <Router history={history} forceRefresh={true}>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/sign-in' component={Pages}></Route>
        <Route path='/signup' component={Pages}></Route>
        <Dashboard>
          <Route path='/addstream' component={Addstream}></Route>
          <Route path='/profile' component={Profile}></Route>
        </Dashboard>
      </Switch>
    </Router>
  </div>
);

export default BaseRouter;
