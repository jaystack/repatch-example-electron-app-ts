export interface Todo {
  id: string;
  message: string;
  checked: boolean;
}

export interface State {
  todos: Todo[];
  isFetching: boolean;
  error: string | null;
  removingTodoId: string | null;
}
