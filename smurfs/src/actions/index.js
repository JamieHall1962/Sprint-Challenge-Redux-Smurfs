/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ERROR_FETCHING_SMURFS = 'ERROR_FETCHING_SMURFS';
export const ADDING_SMURF = "ADDING_SMURF";
export const SMURF_ADDED = "SMURF_ADDED";
export const ERROR_ADDING_SMURF = "ERROR_ADDING_SMURF";
export const DELETING_SMURF = "DELETING_SMURF";
export const SMURF_DELETED = "SMURF_DELETED";
export const ERROR_DELETING_SMURF = "ERROR_DELETING_SMURF";


export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        dispatch({ type: SMURFS_FETCHED, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR_FETCHING_SMURFS, payload: err });
      });
  };
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF });

  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: SMURF_ADDED, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ADDING_SMURF, payload: err });
    });
};

export const deleteSmurf = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETING_SMURF });
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: SMURF_DELETED, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR_DELETING_SMURF, payload: err.message });
      });
  };
};