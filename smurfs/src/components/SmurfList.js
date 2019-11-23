import React from 'react';
import { connect } from 'react-redux';
import { getSmurfData } from '../actions';
import AddForm from './AddForm';
import './styles/SmurfList.css';

const SmurfList = props => {

  return (
    <>
      <header>
        <h1>Build Your Own Smurf Village</h1>
      <button
        className="fetch-button"
        onClick={() => {props.getSmurfData()}}
      >
        Check Out Some Smurfs!
      </button>
      </header>
      <main>
        <aside>
          <AddForm />
        </aside>
        {props.error&&<div className="error">{props.error}</div>}
        {props.isLoading 
          ? (
            <div className="loading-message">loading smurfs...</div>
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
      </main>
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