import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, ERROR_TEXT } from '../actions/index';

export const initialState = {
  // Task 1.
  smurfs: [],
  isLoading: false,
  error: ''
}

 const reducer = (state = initialState, action) => {
  switch(action.type) {
    // created reducer cases 
    case("FETCH_START"):
      return({
        ...state,
        smurfs: [...state],
        isLoading: true
      })
    case("FETCH_SUCCESS"):
      return ({
        ...state,
        smurfs: action.payload,
        isLoading: false
      })
    case("FETCH_FAIL"):
      return ({
        ...state,
        isLoading: true,
        error: 'something is wrong with the fetch request' + action.payload,
      })
    case("ADD_SMURF"):
      return ({
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isLoading: false
      })
    case("ERROR_TEXT"):
      return ({
        ...state,
        isLoading: true,
        error: "Please make sure everything is filled out completely."
      })
    default:
      return state
  }
}

export default reducer;
//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.