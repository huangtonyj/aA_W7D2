import TodoList from './todo_list.jsx';
import {connect} from 'react-redux';
import {allTodos} from '../../reducers/selectors.js';
import {receiveTodo, fetchTodos, createTodo, removeTodo, updateTodo} from '../../actions/todos_actions.js';

const mapStateToProps = state => {
  return {
    todos: allTodos(state),
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
