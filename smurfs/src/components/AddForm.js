import React from 'react';
import { connect } from 'react-redux';
import { addNewSmurf } from '../actions';
import './styles/AddForm.css';

class AddForm extends React.Component {
  
  state = 
    {
      newSmurfName: '',
      newSmurfHeight: '',
      newSmurfAge: '' 
    } 
  ;

  nameHandleChanges = event => {
    this.setState(
      {
        ...this.state,
        newSmurfName: event.target.value
      }
    );
  };
  heightHandleChanges = event => {
    this.setState(
      {
        ...this.state,
        newSmurfHeight: event.target.value
      }
    );
  };
  ageHandleChanges = event => {
    this.setState(
      {
        ...this.state,
        newSmurfAge: event.target.value
      }
    );
  };

  addSmurf = event => {
    event.preventDefault();
    this.props.addNewSmurf(this.state);
    this.setState( {
        newSmurfName: '',
        newSmurfHeight: '',
        newSmurfAge: '' 
      } 
    );
  }

  render() {
    return(
      <div className="form-container">
        <h2>Add a Smurf!</h2>
        <form onSubmit={this.addSmurf}>
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
          <button className="form-button"type="submit">Add Smurf</button>
        </form>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { addNewSmurf }
)(AddForm);