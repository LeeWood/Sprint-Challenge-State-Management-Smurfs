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
      {props.isLoading 
        ? (
          <div>loading smurfs...</div>
        ) 
        : (
            <div className="card-container">
              {props.smurfs.map(smurf => (
                <div className="card" key={smurf.id}>
                  <h4 className="name-title">{smurf.name}</h4>
                  <p className="sub-text">height: {smurf.height}</p>
                  <p className="sub-text">age: {smurf.age}</p>
                  {/*console.log("smurf info", smurf)*/}
                </div>
              ))}
            </div>
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