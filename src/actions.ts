import { Todo } from './types';

export function fetchTodos() {
  return () => async (dispatch, getState, api) => {
    try {
      const todos = await api.getTodos();
      dispatch((state) => ({ ...state, todos }));
    } catch (error) {
      dispatch((state) => ({ ...state, error }));
    }
  };
}

export function addTodo(todo: Todo) {
  return () => async (dispatch, getState, api) => {
    try {
      await api.addTodo(todo);
      await dispatch(fetchTodos());
    } catch (error) {
      dispatch((state) => ({ ...state, error }));
    }
  };
}

export function updateTodo(id, delta) {
  return () => async (dispatch, getState, api) => {
    try {
      await api.updateTodo(id, delta);
      await dispatch(fetchTodos());
    } catch (error) {
      dispatch((state) => ({ ...state, error }));
    }
  };
}

export function checkTodo(id) {
  return () => async (dispatch, getState, api) => {
    try {
      await api.checkTodo(id);
      await dispatch(fetchTodos());
    } catch (error) {
      dispatch((state) => ({ ...state, error }));
    }
  };
}

export function removeTodo(id) {
  return () => async (dispatch, getState, api) => {
    try {
      await api.removeTodo(id);
      await dispatch(fetchTodos());
    } catch (error) {
      dispatch((state) => ({ ...state, error }));
    }
  };
}
