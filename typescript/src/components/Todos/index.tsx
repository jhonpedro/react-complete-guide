import React from 'react';
import classes from './Todos.module.css';
import Todo from '../../models/todo';
import TodoItem from '../TodoItem';

interface TodosProps {
  items: Todo[];
  removeTodoItem: (text: string) => void;
}

const Todos: React.FC<TodosProps> = ({ items, removeTodoItem }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => {
        return (
          <TodoItem
            text={item.text}
            key={item.id}
            removeTodo={removeTodoItem.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
