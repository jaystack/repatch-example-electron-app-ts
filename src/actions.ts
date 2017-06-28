import { Todo } from './types';

function reject(error) {
  (state) => ({ ...state, error });
}

export function fetchTodos() {
  return () => async (dispatch, getState, api) => {
    try {
      const todos = await api.getTodos();
      dispatch((state) => ({ ...state, todos }));
    } catch (error) {
      dispatch(reject(error.message));
    }
  };
}

export function addTodo(todo: Todo) {
  return () => async (dispatch, getState, api) => {
    try {
      await api.addTodo(todo);
      await dispatch(fetchTodos());
    } catch (error) {
      dispatch(reject(error.message));
    }
  };
}

export function updateTodo(id, delta) {
  return () => async (dispatch, getState, api) => {
    try {
      await api.updateTodo(id, delta);
      await dispatch(fetchTodos());
    } catch (error) {
      dispatch(reject(error.message));
    }
  };
}

export function checkTodo(id) {
  return () => async (dispatch, getState, api) => {
    try {
      await api.checkTodo(id);
      await dispatch(fetchTodos());
    } catch (error) {
      dispatch(reject(error.message));
    }
  };
}

export function removeTodo(id) {
  return () => async (dispatch, getState, api) => {
    try {
      await api.removeTodo(id);
      await dispatch(fetchTodos());
    } catch (error) {
      dispatch(reject(error.message));
    }
  };
}
