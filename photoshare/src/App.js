import React, { Component } from "react";
import { Route } from "react-router-dom";
import modelInstance from "./data/Model";
import "./App.css";
import LogIn from "./LogIn/LogIn";
import AttendEvent from "./AttendEvent/AttendEvent";
import CreateEvent from "./CreateEvent/CreateEvent";
import EventAlbum from "./EventAlbum/EventAlbum";
import Home from "./Home/Home";
import InsideEvent from "./InsideEvent/InsideEvent";
import PastEvents from "./PastEvents/PastEvents";
import SignUp from "./SignUp/SignUp";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "PhotoShare"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<h1 className="App-title">{this.state.title}</h1>*/}
          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={LogIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route path="/AttendEvent" component={AttendEvent} />
          <Route path="/CreateEvent" component={CreateEvent} />
          <Route path="/EventAlbum" component={EventAlbum} />
          <Route path="/Home" component={Home} />
          <Route path="/InsideEvent" component={InsideEvent} />
          <Route path="/PastEvents" component={PastEvents} />



        </header>
      </div>
    );
  }
}

export default App;
