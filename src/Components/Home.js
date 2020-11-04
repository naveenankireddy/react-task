import React, { createRef } from "react";
import "../styles/home.css";
import music from "../assets/music.mp3";
import Board from "./Board";
import Card from "./Card";
import key from "../assets/PinClipart.com_jail-clipart_13852.png";
import house from "../assets/1202.jpg";

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
        <img className="house" src={house} alt="house" />
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
        <div className="dnd-section">
          <Board id="board-1" className="board-one" draggable="true">
            <Card id="card-1" className="card" draggable="true">
              {/* <p> */}
              <img className="key" src={key} alt="image" />
              {/* </p> */}
            </Card>
          </Board>
          <Board id="board-2" className="board-one board-two" draggable="true">
            {/* <Card id="card" className="card" draggable="true"></Card> */}
          </Board>
        </div>
      </div>
    );
  }
}

export default Home;
