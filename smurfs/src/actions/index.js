import axios from 'axios';

export const SMURF_DATA_LOAD = "SMURF_DATA_LOAD";
export const SMURF_DATA_SUCCESS = "SMURF_DATA_SUCCESS";
export const SMURF_DATA_FAIL = "SMURF_DATA_FAIL";
export const NEW_SMURF = "NEW_SMURF";

export const getSmurfData = () => dispatch => {
  dispatch({ type: SMURF_DATA_LOAD });
  axios
    .get("http://localhost:3333/smurfs")
    .then(result => {
      //console.log(result);
      dispatch({
        type: SMURF_DATA_SUCCESS,
        payload: result.data
      })
    })
    .catch(error => {
      //console.log(error)
      dispatch({
        type: SMURF_DATA_FAIL,
        payload: `error: ${error.request.status}...`
      })
    });
}

export function addNewSmurf(newSmurf) {
  //console.log('action', newSmurf);
  return {
    type: NEW_SMURF,
    payload: newSmurf
  };
}