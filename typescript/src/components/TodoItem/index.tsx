import React from 'react';
import classes from './TodoItem.module.css';

interface TodoItemProps {
  id?: string;
  text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
  return <li className={classes.item}>{text}</li>;
};

export default TodoItem;
