import { Reducer, Thunk } from 'repatch'
import api from './api'

export interface Todo {
  id: string
  message: string
  checked: boolean
}

export interface State {
  todos: Todo[]
  isFetching: boolean
  error: string | null
  removingTodoId: string | null
}

export type TodoReducer = Reducer<State>
export type TodoThunk<T> = Thunk<State, typeof api, T>
