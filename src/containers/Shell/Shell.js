import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "@/containers/Home";

import { IconGithub } from '@/components/Icons';

const Shell = (props) => (
  <div className="Shell">
    <a className="forkme" href="https://github.com/el-p/icon-evolution.git">
      <IconGithub />
    </a>
    <div class="ribbon"></div>
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
