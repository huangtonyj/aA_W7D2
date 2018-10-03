import React from 'react';
import ReactDOM from 'react-dom';
import {receiveTodos, receiveTodo, fetchTodos} from './actions/todos_actions.js';
// import App from './components/app.jsx';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});


//TO REMOVE LATER
window.$ = $;
// window.receiveTodos = receiveTodos;
// window.receiveTodo = receiveTodo;
//TO REMOVE LATER
