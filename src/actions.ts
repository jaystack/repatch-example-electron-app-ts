import { Todo } from './types';

function invokeApi(method: string, url: string, query?: object, body?: object) {
  return () => async (dispatch, getState, api) => {
    try {
      return await api[url][method.toLowerCase()](query, body);
    } catch (error) {
      dispatch((state) => ({ ...state, error: error.message }));
    }
  };
}

export function fetchTodos() {
  return () => async (dispatch) => {
    const todos = await dispatch(invokeApi('GET', '/todos'));
    dispatch((state) => ({ ...state, todos }));
  };
}

export function addTodo(todo: Todo) {
  return () => async (dispatch) => {
    await dispatch(invokeApi('POST', '/todos'));
    await dispatch(fetchTodos());
  };
}

export function updateTodo(id: string, message: string) {
  return () => async (dispatch) => {
    await dispatch(invokeApi('PUT', '/todos', { id }, { message }));
    await dispatch(fetchTodos());
  };
}

export function checkTodo(id: string) {
  return () => async (dispatch) => {
    await dispatch(invokeApi('PATCH', '/todos', { id }));
    await dispatch(fetchTodos());
  };
}

export function removeTodo(id: string) {
  return () => async (dispatch) => {
    await dispatch(invokeApi('DELETE', '/todos', { id }));
    await dispatch(fetchTodos());
  };
}
