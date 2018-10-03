import React from 'react';
import uniqueId from '../../util/unique_id.js';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      done: false
    };

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      update(property) {
        return e => this.setState({[property]: e.target.value});
      }

      handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state);

        this.props.createTodo({todo}).then(
          () => this.setState({title: '', body: ''})
        );
      }

      render() {
        return (
          <div>
            <ul>
              {this.props.errors.map((error) => (
                <li>{error}</li>
              ))}
            </ul>

            <form className="todo-form" onSubmit={this.handleSubmit}>
              <label>Title:
                <input
                  className="input"
                  ref="title"
                  value={this.state.title}
                  onChange={this.update('title')}/>
              </label>
              <br></br>
              <br></br>
              <label>Body:
                <input
                  className="input"
                  ref="body"
                  value={this.state.body}
                  onChange={this.update('body')}/>
              </label>
              <br/>
              <br/>
              <button className="create-button">Create Todo!</button>
            </form>
          </div>

        );
      }
    }

    export default TodoForm;
