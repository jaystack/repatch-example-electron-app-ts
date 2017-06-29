import Store, { thunk, Reducer, Thunk } from 'repatch';
import { State, Todo, TodoThunk } from './types';
import api from './api';

export default new Store<State>({
  todos: [],
  isFetching: false,
  error: null,
  removingTodoId: null
}).addMiddleware<TodoThunk<any>>(thunk.withExtraArgument(api));
