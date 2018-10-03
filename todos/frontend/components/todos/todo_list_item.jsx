import React from 'react';

class TodoListItem extends React.Component {

  handleDelete(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  handleCheck(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.todo);
  }


  render() {
    return( <li>
      <input type="checkbox"
        checked={this.props.todo.done}
        onChange={(e) => this.handleCheck(e)}
        ></input>
        <span>
          <b>{this.props.todo.title} </b>
        </span>
          {this.props.todo.body}

        <button onClick={(e) => this.handleDelete(e)}>Delete</button>
      </li>);
  }
}

export default TodoListItem;
