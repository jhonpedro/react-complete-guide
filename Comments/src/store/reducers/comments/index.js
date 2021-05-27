import { produce } from 'immer';
import { ADD_TASK } from './actionTypes';

const initial_value = [];

const commentsReducer = (state = initial_value, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_TASK: {
        draft.push(action.payload);
        break;
      }
      default: {
        return { ...state };
      }
    }
  });
};

export default commentsReducer;
