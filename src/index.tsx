import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Store from 'repatch';
import { Provider } from 'react-redux';
import { State } from './types';
import App from './components/App';

const container = document.getElementById('app');

const store = new Store<State>({
	direction: 1,
	counter: 0,
	name: 'yee'
});

ReactDOM.render(<Provider store={store as any}><App /></Provider>, container);
