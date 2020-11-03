import React, { createRef } from "react";
import "../styles/home.css";
import music from "../assets/music.mp3";
const Source = () => <source src={music} />;

class Home extends React.Component {
  constructor(props) {
    console.log(props, "home props");
    super(props);
    this.audioRef = createRef();
    this.state = {
      name: "React",
    };
  }
  componentDidMount() {
    this.audioRef.current.play();
    console.log(this.audioRef.current);
    console.log("HERE");
  }
  render() {
    return (
      <div className="bg-img-house">
        <div className="overflow">
          <div className="door-waves-one">
            <div className="ripple"></div>
          </div>
          <div
            className="door-waves-one door-waves-two"
            onClick={() => this.props.hideComponent("showHideHome")}
          >
            <div className="ripple"></div>
          </div>
        </div>
        <audio className="audio" ref={this.audioRef} autoPlay controls loop>
          <Source />
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    );
  }
}

export default Home;
