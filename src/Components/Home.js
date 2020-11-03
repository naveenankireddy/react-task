import React, { createRef } from "react";
import "../styles/home.css";
import music from "../assets/music.mp3";
import ReactAudioPlayer from "react-audio-player";
import Sound from "react-sound";
import Map from "./Map";
const Source = () => <source src={music} />;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = createRef();
  }
  componentDidMount() {
    this.audioRef.current.play();
  }
  render() {
    return (
      <div className="bg-img-house">
        <div className="overflow">
          <div className="door-waves-one">
            <div className="ripple"></div>
          </div>
        </div>
        <div className="door-waves-one door-waves-two">
          <div className="ripple"></div>
        </div>
        <audio className="audio" ref={this.audioRef} controls autoPlay loop>
          <Source />
        </audio>
      </div>
    );
  }
}

export default Home;
