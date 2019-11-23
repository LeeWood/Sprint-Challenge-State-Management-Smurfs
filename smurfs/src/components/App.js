import React, { Component } from "react";
import SmurfCards from './SmurfList';
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfCards />
      </div>
    );
  }
}

export default App;
