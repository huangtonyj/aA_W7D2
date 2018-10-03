import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions.js';



const errorReducer = (state = [], action) => {
  let newState = Object.assign([], state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      newState = newState.concat(action.errors);
      return newState;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorReducer;
