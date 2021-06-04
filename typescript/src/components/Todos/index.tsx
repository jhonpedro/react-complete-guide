import React from 'react';
import Todo from '../../models/todo';

interface TodosProps {
  items: Todo[];
}

const Todos: React.FC<TodosProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export default Todos;
