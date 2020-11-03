import React, { Component } from "react";
import "../styles/map.css";

export default class Map extends Component {
  constructor(props) {
    console.log(props, "map props");
    super(props);
    this.state = {
      name: "React",
    };
  }
  render() {
    return (
      <div className="main-map">
        <div className="bg-img-map">
          <div
            className="India"
            onClick={() => this.props.hideComponent("showHideMap")}
          >
            <div className="ripple"></div>
            India
          </div>
          <div className="cuba">
            Cuba
            <div className="ripple"></div>
          </div>
        </div>
      </div>
    );
  }
}
