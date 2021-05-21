import React from 'react';
import useHTTPRequest from '../hooks/useHTTPRequest';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const [isLoading, error, request] = useHTTPRequest(
    'https://test-f860d-default-rtdb.firebaseio.com/tasks.json',
    'POST',
    { 'Content-Type': 'application/json' }
  );

  const enterTaskHandler = async (taskText) => {
    const data = await request(JSON.stringify({ text: taskText }));
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
