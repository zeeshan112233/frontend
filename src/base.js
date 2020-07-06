import React from "react";
import { Route } from "react-router-dom";
import Pages from "./Pages";
import "./App.css";
import Addstream from "./pages/Addstream";
import Homepage from "./pages/Homepage";

const BaseRouter = () => (
  <div>
    <Route exact path='/' component={Homepage}></Route>

    <Route path='/signup' component={Pages}></Route>

    <Route path='/addstream' component={Addstream}></Route>
  </div>
);

export default BaseRouter;
