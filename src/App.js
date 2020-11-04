import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import Map from "./Components/Map";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      showHideHome: true,
      showHideMap: false,
    };
    // this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent = (name) => {
    console.log(name);
    switch (name) {
      case "showHideHome":
        this.setState({ showHideHome: !this.state.showHideHome });
        this.setState({ showHideMap: !this.state.showHideMap });

        break;
      case "showHideMap":
        this.setState({ showHideMap: !this.state.showHideMap });
        this.setState({ showHideHome: !this.state.showHideHome });

        break;
      default:
        return null;
    }
  };
  render() {
    return (
      <div className="App">
        {this.state.showHideHome && (
          <Home
            showHideHome={this.state.showHideHome}
            showHideMap={this.state.showHideMap}
            hideComponent={this.hideComponent}
          />
        )}
        {/* <hr /> */}
        {this.state.showHideMap && (
          <Map
            showHideMap={this.state.showHideMap}
            showHideHome={this.state.showHideHome}
            hideComponent={this.hideComponent}
          />
        )}
        {/* <hr /> */}
      </div>
    );
  }
}

export default App;
