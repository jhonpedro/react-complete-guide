import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

interface NewTodoProps {
  addTodo: (newTodoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ addTodo }) => {
  const textInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const textInputValue = textInput.current!.value;

    if (!textInputValue.trim) {
      return;
    }

    addTodo(textInputValue);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label>
        <input type="text" ref={textInput} />
      </label>

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
