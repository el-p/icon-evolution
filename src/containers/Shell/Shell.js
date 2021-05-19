import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "@/containers/Home";

const Shell = (props) => (
  <div className="Shell">
    <div className="main">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
    <div className="footer">
      <p>Icon Evolution &copy; 2021, Elsa Passioni</p>
    </div>
  </div>
);

export default Shell;
