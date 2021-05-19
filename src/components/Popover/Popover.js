import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Popover.scss";

class Popover extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    callToAction: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    isOpen: false,
    onMouseEnter: () => {},
    onMouseLeave: () => {},
  };

  render() {
    return (
      <div
        className="Popover"
        style={{ display: this.props.isOpen ? "inline" : "none" }}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
      >
        <div className="popover-content">
          {this.props.description}
          <span className="cta">{this.props.callToAction}</span>
        </div>
        <div className="popover-more" onClick={this.props.onClick}>
          Discover More
        </div>
      </div>
    );
  }
}

export default Popover;
