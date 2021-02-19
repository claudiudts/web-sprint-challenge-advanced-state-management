import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD SMURF";
export const SET_ERROR = "SET_ERROR";


// TASK 1.
export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_START});
  axios
  .get('http://localhost:3333/smurfs')
  .then((res) => {
    dispatch({ type:FETCH_SUCCESS, payload: res.data })
  })
  .catch(err => {
    dispatch({type: FETCH_FAIL, payload: err.response.data})
  })
  
};


// TASK 2.
export const addSmurf = (updateSmurfs) => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', updateSmurfs)
    .then((res) => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data })
    })
    .catch(error => {
      dispatch({ type: FETCH_FAIL, payload: error.response })
    })
};


// TASK 3.
export const setError = () => dispatch => {
  dispatch({ type: SET_ERROR })
};





//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.