import * as React from 'react'
import { connect } from 'react-redux'
import { State, Todo } from '../types'
import { fetchTodos, addTodo } from '../actions'
import Item from './Item'

class App extends React.PureComponent<{
  todos: Todo[]
  fetchTodos: typeof fetchTodos
  addTodo: typeof addTodo
}> {
  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    const { todos, addTodo } = this.props
    return (
      <div className="app">
        {todos.map((todo, index) => <Item key={todo.id} todoIndex={index} />)}
        <button onClick={() => addTodo()}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state: State) => ({
  todos: state.todos
})

const mapDispatchToProps = {
  fetchTodos,
  addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
