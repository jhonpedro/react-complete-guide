import React from 'react';
import classes from './TodoItem.module.css';

interface TodoItemProps {
  id?: string;
  text: string;
  removeTodo: (text: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, removeTodo }) => {
  const clickHandler = () => {
    removeTodo(text);
  };

  return (
    <li className={classes.item} onClick={clickHandler}>
      {text}
    </li>
  );
};

export default TodoItem;
