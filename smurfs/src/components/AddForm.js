import React from 'react';
import { connect } from 'react-redux';


class AddForm extends React.Component {
  
  state = {
    newSmurfName: '',
    newSmurfHeight: '',
    newSmurfAge: '' 
  };

  nameHandleChanges = event => {
    this.setState({
      newSmurfName: event.target.value
    });
    console.log(event.target.value)
  };
  heightHandleChanges = event => {
    this.setState({
      newSmurfHeight: event.target.value
    });
  };
  ageHandleChanges = event => {
    this.setState({
      newSmurfAge: event.target.value
    });
  };

  addSmurf = event => {

  }

  render() {
    return(
      <div>
        <h2>Add a Smurf!</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            value={this.state.newSmurfName}
            onChange={this.nameHandleChanges}
          />
          <input
            type="text"
            placeholder="Height"
            value={this.state.newSmurfHeight}
            onChange={this.heightHandleChanges}
          />
          <input
            type="text"
            placeholder="Age"
            value={this.state.newSmurfAge}
            onChange={this.ageHandleChanges}
          />
          <button>Add Smurf</button>
        </form>
      </div>
    )
  }
};

export default AddForm;