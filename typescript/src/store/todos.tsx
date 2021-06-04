import { useState, createContext, useContext } from 'react';
import Todos from '../models/todo';

interface TodosContextI {
  todos: Todos[];
  addTodo: (text: string) => void;
  removeTodo: (text: string) => void;
}

const TodosContext = createContext<TodosContextI>({} as TodosContextI);

const TodosContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todos[]>([new Todos('Learn typescript')]);

  const addTodo = (todoText: string) => {
    setTodos((prevState) => {
      console.log(prevState);
      return [new Todos(todoText), ...prevState];
    });
  };

  const removeTodo = (text: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.text !== text);
    });
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

const useTodos = () => {
  const ctx = useContext(TodosContext);

  if (!ctx) {
    throw new Error('use todos must be inside of its provider');
  }

  return ctx;
};

export { TodosContext, TodosContextProvider, useTodos };
