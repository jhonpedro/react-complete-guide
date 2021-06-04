import React, { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([new Todo('Learn typescript')]);

  const addTodo = (todoText: string) => {
    setTodos((prevState) => {
      console.log(prevState);
      return [new Todo(todoText), ...prevState];
    });
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
