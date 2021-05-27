import { produce } from 'immer';
import { ADD_QUOTE } from './actionTypes';

const initial_value = [];

const quotesReducer = (state = initial_value, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_QUOTE: {
        draft.push(action.payload);
        break;
      }
      default: {
        return { ...state };
      }
    }
  });
};

export default quotesReducer;
