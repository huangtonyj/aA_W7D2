import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, UPDATE_TODO} from '../actions/todos_actions';
import merge from 'lodash/merge';

// const initialState = {
//   1: {
//     id: 1,
//     title: 'wash car',
//     body: 'with soap',
//     done: false
//   },
//   2: {
//     id: 2,
//     title: 'wash dog',
//     body: 'with shampoo',
//     done: true
//   },
// };

const todosReducer = (state = {}, action) => {
  const newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });

      return newState;
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;

    case REMOVE_TODO:

      delete newState[action.todo.id];
      return newState;

    case UPDATE_TODO:
      action.todo.done = true;
      newState[action.todo.id] = action.todo;
      return newState;

    default:
      return state;
  }
};

export default todosReducer;
