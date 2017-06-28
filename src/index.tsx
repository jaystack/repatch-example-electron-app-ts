import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Store, { thunk } from 'repatch';
import { Provider } from 'react-redux';
import { State } from './types';
import api from './api';
import App from './components/App';

const container = document.getElementById('app');

const store = new Store<State>({
  todos: [],
  isFetching: false,
  error: null,
  removingTodoId: null
}).addMiddleware(thunk.withExtraArgument(api));

ReactDOM.render(<Provider store={store as any}><App /></Provider>, container);
