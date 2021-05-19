import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Details.scss";

import ClosingButton from '@/components/ClosingButton';

class Details extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    onBlur: PropTypes.func,
    title: PropTypes.string,
  };

  static defaultProps = {
    isOpen: false,
    onBlur: () => {},
    title: "Icon Title",
  };

  state = {
    blurRequested: false,
  };

  onBlur = () => {
    this.setState({ blurRequested: true });
    setTimeout(() => {
      this.setState({ blurRequested: false });
      this.props.onBlur();
    }, 250);
  };

  onContentClick = (event) => {
    event.stopPropagation();
  }

  render() {
    let modalClassName = "modal";
    if (this.state.blurRequested) modalClassName += " backOutDown";
    if (this.props.isOpen && !this.state.blurRequested)
      modalClassName += " backInUp";

    return (
      <div
        className="Details"
        style={{ display: this.props.isOpen ? "inline" : "none" }}
        onClick={this.onBlur}
      >
        <div className={modalClassName} onClick={this.onContentClick}>
          <div className="details-header">
            <div className="icon">{this.props.icon}</div>
            <h3>{this.props.title}</h3>
            <ClosingButton onClick={this.onBlur} />
          </div>
          <div className="details-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
