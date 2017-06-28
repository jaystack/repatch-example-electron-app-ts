import { Todo } from './types';

const todos = [
  {
    id: '1',
    message: 'shopping',
    checked: false
  },
  {
    id: '2',
    message: 'carwash',
    checked: false
  },
  {
    id: '3',
    message: 'haircut',
    checked: true
  }
] as Todo[];

export default {
  getTodos: async () => todos.slice(),
  addTodo: async (todo) => todos.push(todo),
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
};
