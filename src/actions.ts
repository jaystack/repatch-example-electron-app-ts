import { Todo, TodoReducer as Reducer, TodoThunk as Thunk } from './types'

function call(
  method: string,
  path: string,
  query?: object,
  body?: object
): Thunk<Promise<any>> {
  return () => async (dispatch, getState, api) => {
    try {
      return await api[path][method.toLowerCase()](query, body)
    } catch (error) {
      dispatch(state => ({ ...state, error: error.message }))
    } finally {
      dispatch(state => ({ ...state, isFetching: false }))
    }
  }
}

export function fetchTodos(): Thunk<Promise<void>> {
  return () => async dispatch => {
    dispatch(cancelRemovingTodo())
    const todos: Todo[] = await dispatch(call('GET', '/todos'))
    dispatch(state => ({ ...state, todos }))
  }
}

export function addTodo(): Thunk<Promise<void>> {
  return () => async dispatch => {
    dispatch(cancelRemovingTodo())
    await dispatch(call('POST', '/todos'))
    await dispatch(fetchTodos())
  }
}

export function updateTodo(id: string, message: string): Thunk<Promise<void>> {
  return () => async dispatch => {
    dispatch(cancelRemovingTodo())
    await dispatch(call('PUT', '/todos', { id }, { message }))
    await dispatch(fetchTodos())
  }
}

export function checkTodo(id: string): Thunk<Promise<void>> {
  return () => async dispatch => {
    dispatch(cancelRemovingTodo())
    await dispatch(call('PATCH', '/todos', { id }))
    await dispatch(fetchTodos())
  }
}

export function removeTodo(removingTodoId: string): Reducer {
  return state => ({ ...state, removingTodoId })
}

export function cancelRemovingTodo(): Reducer {
  return state => ({ ...state, removingTodoId: null })
}

export function confirmRemovingTodo(): Thunk<Promise<void>> {
  return () => async (dispatch, getState) => {
    const id = getState().removingTodoId
    await dispatch(call('DELETE', '/todos', { id }))
    await dispatch(fetchTodos())
  }
}

const a1 = { hello: 1, hi: 2 }
const a2 = {
  hello: 1,
  hi: 2
}
