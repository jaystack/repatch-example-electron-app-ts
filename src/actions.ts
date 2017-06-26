import { State } from './types';

export const increment = () => (state: State): State => ({
  ...state,
  counter: state.counter + state.direction
});

export const changeName = (name: string) => (state: State): State => ({
  ...state,
  name
});

export const setToZero = () => (state: State): State => ({
  ...state,
  counter: 0
});

export const turnDirection = () => (state: State): State => ({
  ...state,
  direction: -1 * state.direction
});

export const someAsyncAction = (a: number) => (state) => async (dispatch, getState) => {
  // ...
};
