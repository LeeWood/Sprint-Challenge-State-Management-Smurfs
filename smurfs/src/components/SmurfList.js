import React from 'react';
import { connect } from 'react-redux';
import { getSmurfData } from '../actions';
import './styles/SmurfList.css';

const SmurfList = props => {

  // const fetchSmurfs = event => {
  //   event.preventDefault();
  //   props.getSmurfData();
  // };

  return (
    <>
      <button
        onClick={() => {props.getSmurfData()}}
      >
        Check Out Some Smurfs!
      </button>
      {props.error&&<div>{props.error}</div>}
      {props.isLoading ? (
        <div>loading smurfs...</div>
      ) : (
        <>
          <div>
            
            {props.smurfs.map(smurf => (
              <div key={smurf.id}>
                <h4>Name: {smurf.name}</h4>
                <p>height: {smurf.height}</p>
                <p>age: {smurf.age}</p>
                {/*console.log("smurf info", smurf)*/}
              </div>
              //todo impement smurf card for display?
            ))}
          </div>
        </>
      )
      }
    </>
  )

}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfData }
)(SmurfList);