import {
  SMURF_DATA_LOAD,
  SMURF_DATA_SUCCESS,
  SMURF_DATA_FAIL
} from '../actions';

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SMURF_DATA_LOAD:
      return{
        ...state,
        isLoading: true
      };
      case SMURF_DATA_SUCCESS:
        return {
          ...state,
          error: '',
          smurfs: action.payload,
          isLoading: false
        }
      case SMURF_DATA_FAIL:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        }
      default:
        return state;
  }
}

export default reducer;