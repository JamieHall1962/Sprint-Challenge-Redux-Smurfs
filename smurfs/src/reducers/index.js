/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  ERROR_FETCHING_SMURFS,
  ADDING_SMURF,
  SMURF_ADDED,
  ERROR_ADDING_SMURF,
  DELETING_SMURF,
  SMURF_DELETED,
  ERROR_DELETING_SMURF
} from "../actions";

const initialState = {
  fetchingSmurfs: false,
  smurfsFetched: false,
  addingSmurf: false,
  smurfAdded: false,
  deletingSmurf: false,
  smurfDeleted: false,
  smurfs: [],
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case SMURFS_FETCHED:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        smurfsFetched: true
      };
    case ERROR_FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case ADDING_SMURF:
      return { ...state, addingSmurf: true };
    case SMURF_ADDED:
      return {
        ...state,
        addingSmurf: false,
        smurfAdded: true,
        smurfs: action.payload
      };
    case ERROR_ADDING_SMURF:
      return { ...state, addingSmurf: false, error: action.payload };
    case DELETING_SMURF:
      return { ...state, smurfDeleted: false, deletingSmurf: true };
    case SMURF_DELETED:
      return {
        ...state,
        deletingSmurf: false,
        smurfDeleted: true,
        smurfs: action.payload
      };
    case ERROR_DELETING_SMURF:
      return { ...state, deletingSmurf: false, error: action.payload };

    default:
      return state;
  }
};
