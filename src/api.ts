import { Todo } from './types';

export interface Api {
  getTodos(): Promise<Todo[]>;
  addTodo(): Promise<void>;
  updateTodo(id: string, message: string): Promise<void>;
  checkTodo(id: string): Promise<void>;
  removeTodo(id: string): Promise<void>;
}

const todos = [
  {
    id: Math.random().toString(),
    message: 'shopping',
    checked: false
  },
  {
    id: Math.random().toString(),
    message: 'carwash',
    checked: false
  },
  {
    id: Math.random().toString(),
    message: 'haircut',
    checked: true
  }
] as Todo[];

export default {
  getTodos: async () => JSON.parse(JSON.stringify(todos)),
  addTodo: async () => {
    todos.push({ id: Math.random().toString(), message: '', checked: false });
  },
  updateTodo: async (id, message) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.message = message;
  },
  checkTodo: async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.checked = !todo.checked;
  },
  removeTodo: async (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    todos.splice(todoIndex, 1);
  }
} as Api;
