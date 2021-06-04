import React from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import { useTodos } from './store/todos';

function App() {
  const { addTodo, removeTodo, todos } = useTodos();

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <Todos items={todos} removeTodoItem={removeTodo} />
    </div>
  );
}

export default App;
