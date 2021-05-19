import React, { Component } from "react";
import PropTypes from "prop-types";
import "./IconBox.scss";

import Popover from "@/components/Popover";

class IconBox extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    description: PropTypes.string.isRequired,
    callToAction: PropTypes.string.isRequired,
  };

  static defaultProps = {
    onClick: () => {}
  }

  state = {
    showPopover: false,
  };

  showPopover = (state: boolean) => {
    this.setState({ showPopover: state });
  };

  handleClick = (event) => {
    this.setState({ showPopover: false });
    this.props.onClick(event)
  }

  render() {
    const iconBoxClass = `IconBox ${this.state.showPopover ? "hover" : ""}`;
    return (
      <div className="IconBoxContainer">
        <div
          className={iconBoxClass}
          ref={this.iconBox}
          onMouseEnter={() => this.showPopover(true)}
          onMouseLeave={() => this.showPopover(false)}
          onClick={this.handleClick}
        >
          {this.props.children}
        </div>
        <Popover
          isOpen={this.state.showPopover}
          description={this.props.description}
          callToAction={this.props.callToAction}
          onMouseEnter={() => this.showPopover(true)}
          onMouseLeave={() => this.showPopover(false)}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default IconBox;
