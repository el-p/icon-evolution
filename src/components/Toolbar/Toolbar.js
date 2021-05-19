import React from "react";
import "./Toolbar.scss";

const Toolbar = (props) => (
  <div className="Toolbar">
    <div className="toolbar-header">
      <h4>Toolbar</h4>
    </div>
    <div className="toolbar-content">{props.children}</div>
  </div>
);

export default Toolbar;
