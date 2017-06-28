import { Todo } from './types';
import { Api } from './api';

function reject(error) {
  return (state) => ({ ...state, error });
}

export function fetchTodos() {
  return () => async (dispatch, getState, api: Api) => {
    try {
      const todos = await api.getTodos();
      dispatch((state) => ({ ...state, todos }));
    } catch (error) {
      dispatch(reject(error.message));
    }
  };
}

export function addTodo(todo: Todo) {
  return () => async (dispatch, getState, api: Api) => {
    try {
      await api.addTodo();
      await dispatch(fetchTodos());
    } catch (error) {
      dispatch(reject(error.message));
    }
  };
}

export function updateTodo(id: string, message: string) {
  return () => async (dispatch, getState, api: Api) => {
    try {
      await api.updateTodo(id, message);
      await dispatch(fetchTodos());
    } catch (error) {
      dispatch(reject(error.message));
    }
  };
}

export function checkTodo(id: string) {
  return () => async (dispatch, getState, api: Api) => {
    try {
      await api.checkTodo(id);
      await dispatch(fetchTodos());
    } catch (error) {
      dispatch(reject(error.message));
    }
  };
}

export function removeTodo(id: string) {
  return () => async (dispatch, getState, api: Api) => {
    try {
      await api.removeTodo(id);
      await dispatch(fetchTodos());
    } catch (error) {
      dispatch(reject(error.message));
    }
  };
}
