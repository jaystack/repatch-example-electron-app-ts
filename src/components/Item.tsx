import * as React from 'react';
import { connect } from 'react-redux';
import { State, Todo } from '../types';
import { checkTodo, updateTodo, removeTodo } from '../actions';

class Item extends React.PureComponent<{
  todoIndex: number;
  todo: Todo;
  checkTodo: Function;
  updateTodo: Function;
  removeTodo: Function;
}> {
  render() {
    const {
      todo: { id, message, checked },
      checkTodo,
      updateTodo,
      removeTodo
    } = this.props;
    return (
      <div className="item">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => checkTodo(id)}
        />
        <input
          type="text"
          value={message}
          onChange={(evt) => updateTodo(id, evt.target.value)}
        />
        <button onClick={() => removeTodo(id)}>X</button>
      </div>
    );
  }
}

const mapStateToProps = (state: State, { todoIndex }) => ({
  todo: state.todos[todoIndex]
});

const mapDispatchToProps = { checkTodo, updateTodo, removeTodo };

export default connect(mapStateToProps, mapDispatchToProps)(Item);
