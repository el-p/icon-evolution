import React, { Component } from "react";
import PropTypes from "prop-types";

class Svg extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  render() {
    return (
      <svg
        id={this.props.id}
        xmlns="http://www.w3.org/2000/svg"
        {...this.props}
      ></svg>
    );
  }
}

export default Svg;
