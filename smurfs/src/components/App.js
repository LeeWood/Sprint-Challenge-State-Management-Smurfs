import React, { Component } from "react";
import SmurfCards from './SmurfList';
import AddForm from './AddForm';
import './styles/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Build Your Own Smurf Village</h1>
        <SmurfCards />
        <AddForm />
      </div>
    );
  }
}

export default App;
