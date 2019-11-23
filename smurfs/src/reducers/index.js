import {
  SMURF_DATA_LOAD,
  SMURF_DATA_SUCCESS,
  SMURF_DATA_FAIL,
  NEW_SMURF
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
      case NEW_SMURF:
        //console.log("new smurf reducer:", action)
        const newSmurf = {
          name: action.payload.newSmurfName,
          height: action.payload.newSmurfHeight,
          age: action.payload.newSmurfAge,
          id: Date.now()
        };
        return {
          ...state,
          smurfs: [...state.smurfs, newSmurf]
        };
      default:
        return state;
  }
}

export default reducer;