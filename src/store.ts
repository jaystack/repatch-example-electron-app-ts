import Store, { thunk } from 'repatch';
import { State, Todo } from './types';
import api from './api';

export default new Store<State>({
  todos: [],
  isFetching: false,
  error: null,
  removingTodoId: null
}).addMiddleware(thunk.withExtraArgument(api));
