import React from 'react';
import { connect } from 'react-redux';
import { getSmurfData } from '../actions';

const SmurfCards = props => {

  return (
    <>
      <button
        onClick={() => {props.getSmurfData()}}
      >
        Check Out Some Smurfs!
      </button>
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
)(SmurfCards);