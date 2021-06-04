import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [new Todo('Learn typescript'), new Todo('Learn testing')];

  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
