import axios from 'axios';

export const SMURF_DATA_LOAD = "SMURF_DATA_LOAD";
export const SMURF_DATA_SUCCESS = "SMURF_DATA_SUCCESS";
export const SMURF_DATA_FAIL = "SMURF_DATA_FAIL";

export const getSmurfData = () => dispatch => {
  dispatch({ type: SMURF_DATA_LOAD });

  axios
    .get("http://localhost:3333/smurfs")
    .then(result => {
      console.log(result.data);
    })
    .catch(error => {
      console.log(error)
    });
  
}