import * as React from 'react';
import { connect } from 'react-redux';
import { State, Todo } from '../types';
import {
  fetchTodos,
  addTodo,
  updateTodo,
  checkTodo,
  removeTodo
} from '../actions';

class App extends React.PureComponent<{
  todos: Todo[];
  fetchTodos: Function;
  addTodo: Function;
  updateTodo: Function;
  checkTodo: Function;
  removeTodo: Function;
}> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map(({ id, message, checked }) =>
            <li key={id} onClick={() => this.props.checkTodo(id)}>
              {message} {checked && '✓'}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  todos: state.todos
});

const mapDispatchToProps = {
  fetchTodos,
  addTodo,
  updateTodo,
  checkTodo,
  removeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
