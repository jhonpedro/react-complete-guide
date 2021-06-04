import React from 'react';

interface TodoItemProps {
  id?: string;
  text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
  return <li>{text}</li>;
};

export default TodoItem;
