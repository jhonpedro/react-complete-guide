import { ADD_TASK } from './actionTypes';

export const actionAddTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};
