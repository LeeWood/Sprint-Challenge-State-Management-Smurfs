import React, { Component } from "react";
import SmurfCards from './SmurfList';
import AddForm from './AddForm';
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfCards />
        <AddForm />
      </div>
    );
  }
}

export default App;
