import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import DashboardHome from "./Dashboarddetails/DashboardHome";

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <div>
          {" "}
          {/* <NavbarPage></NavbarPage> */}
          {/* <Sidebar></Sidebar> */}
          <DashboardHome></DashboardHome>
          {/* <Route path='/dashboard/album' component={Album}></Route> */}
          {/* <Route path='/sign-in' component={Pages}></Route>
          <Route path='/signup' component={Pages}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>

          <Route path='/addstream' component={Addstream}></Route> */}
        </div>
      </Router>
    );
  }
}

export default Dashboard;
