import React, { Component } from "react";
import "../styles/map.css";
import googleMap from "../assets/world-map-black-and-blue.jpg";

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
          <img className="house" src={googleMap} alt="house" />

          <div
            className="india"
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
