import React from 'react';
import Todo from '../../models/todo';
import TodoItem from '../TodoItem';

interface TodosProps {
  items: Todo[];
}

const Todos: React.FC<TodosProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <TodoItem text={item.text} key={item.id} />;
      })}
    </ul>
  );
};

export default Todos;
