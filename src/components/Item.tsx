import * as React from 'react'
import { connect } from 'react-redux'
import { State, Todo } from '../types'
import {
  checkTodo,
  updateTodo,
  removeTodo,
  cancelRemovingTodo,
  confirmRemovingTodo
} from '../actions'

class Item extends React.PureComponent<{
  todoIndex: number
  todo: Todo
  isRemovingTodo: boolean
  checkTodo: typeof checkTodo
  updateTodo: typeof updateTodo
  removeTodo: typeof removeTodo
  cancelRemovingTodo: typeof cancelRemovingTodo
  confirmRemovingTodo: typeof confirmRemovingTodo
}> {
  render() {
    const {
      todo: { id, message, checked },
      isRemovingTodo,
      checkTodo,
      updateTodo,
      removeTodo,
      cancelRemovingTodo,
      confirmRemovingTodo
    } = this.props
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
          onChange={evt => updateTodo(id, evt.target.value)}
        />
        {isRemovingTodo
          ? <span>
              <button onClick={() => confirmRemovingTodo()}>YES</button>
              <button onClick={() => cancelRemovingTodo()}>NO</button>
            </span>
          : <button onClick={() => removeTodo(id)}>X</button>}
      </div>
    )
  }
}

const mapStateToProps = (state: State, { todoIndex }) => ({
  todo: state.todos[todoIndex],
  isRemovingTodo: state.removingTodoId === state.todos[todoIndex].id
})

const mapDispatchToProps = {
  checkTodo,
  updateTodo,
  removeTodo,
  cancelRemovingTodo,
  confirmRemovingTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
