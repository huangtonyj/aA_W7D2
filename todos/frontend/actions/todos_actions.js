export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

import {receiveErrors, clearErrors} from './error_actions.js';

import * as todoApiUtil from '../util/todo_api_util.js';

export const receiveTodos = (todos) => (
  {
      type: RECEIVE_TODOS,
      todos
    }
);

export const receiveTodo = (todo) => (
  {
      type: RECEIVE_TODO,
      todo
    }
);

export const receiveDelete = (todo) => (
  {
      type: REMOVE_TODO,
      todo
    }
);

export const updateMe = (todo) => (
  {
    type: UPDATE_TODO,
    todo
    }
);

export const removeTodo = (todo) => (dispatch) => {
  return todoApiUtil.removeTodo(todo)
    .then((todo) => {
      dispatch(receiveDelete(todo));
    });
};

export const fetchTodos = () => (dispatch) => {
  return todoApiUtil.fetchTodos()
    .then((todos) => {
      dispatch(receiveTodos(todos));
    });
};

export const createTodo = (todo) => (dispatch) => {
  dispatch(clearErrors());
  return todoApiUtil.createTodo(todo)
    .then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    );

};

export const updateTodo = (todo) => (dispatch) => {
  todo.done = !todo.done;
  return todoApiUtil.updateTodo(todo)
    .then(
      todo => dispatch(updateMe(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
};
