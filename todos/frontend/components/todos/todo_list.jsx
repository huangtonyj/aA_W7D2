import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <TodoForm
            errors={this.props.errors}
            receiveTodo={ this.props.receiveTodo }
            createTodo={ this.props.createTodo }
          />
        <ul>
          {this.props.todos.map((todo) => {
            return <TodoListItem
              key={todo.id}
              todo={todo}
              removeTodo={ this.props.removeTodo}
              updateTodo={ this.props.updateTodo}/>;
          })}
        </ul>
      </div>


    );

  }

}

export default TodoList;
