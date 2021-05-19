import React, { Component } from "react";
import { connect } from "react-redux";
import { getProps, getActions } from "./Providers";
import "./Home.scss";

import Details from "@/components/Details";
import Toolbar from "@/components/Toolbar";
import IconBox from "@/components/IconBox";
import { IconCompass } from "@/components/Icons";
import IconList from "./IconList";

class Home extends Component {
  state = {
    showDetails: false,
    detailTitle: "Icon Title",
    detailContent: <div></div>,
    currentIcon: <div></div>
  };

  render() {
    return (
      <div className="Home">
        <Details
          isOpen={this.state.showDetails}
          onBlur={() => this.setState({ showDetails: false })}
          title={this.state.detailTitle}
          icon={this.state.currentIcon}
        >
          {this.state.detailContent}
        </Details>
        {/* HEADER ICON & TITLE */}
        <div className="home-header">
          <div className="icon">
            <IconCompass />
          </div>
          <div className="title">
            <h1>Icon Evolution</h1>
            <h2>Discover their past to unlock their future.</h2>
          </div>
        </div>

        {/* INTRODUCTION DESCRIPTION */}
        <div className="hero">
          <p>
            In order to be part of the <strong>Icon Evolution</strong> Landing
            Page, each icon must meet specific requirements. First of all, it
            must be featured in a computer graphics software interface. It must
            also represent an object or action whose meaning has been lost in
            the contemporary cultural context to the point that younger
            generations struggle to grasp its apparent meaning or utility. Last
            but not least, it must be eligible for design updates that will
            improve the user experience.
          </p>
          <p>
            <strong>
              Interact with the icons to learn more about their history.
            </strong>
          </p>
        </div>

        {/* TOOLBAR CONTENT */}
        <div className="toolbar-container">
          <Toolbar>
            <ul>
              {IconList.map((data) => (
                <li key={data.name}>
                  <IconBox
                    description={data.shortDescription}
                    callToAction={data.callToAction}
                    onClick={() =>
                      this.setState({
                        showDetails: true,
                        detailTitle: data.name,
                        currentIcon: <data.icon />,
                        detailContent: (
                          <div>
                            <p>{data.shortDescription}</p>
                            <p>{data.description}</p>
                          </div>
                        ),
                      })
                    }
                  >
                    <data.icon />
                  </IconBox>
                </li>
              ))}
            </ul>
          </Toolbar>
        </div>
      </div>
    );
  }
}

export default connect(getProps, getActions)(Home);
