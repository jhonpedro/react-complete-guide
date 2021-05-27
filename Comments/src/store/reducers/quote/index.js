import { produce } from 'immer';
import { ADD_QUOTE, ADD_QUOTE_COMMENT } from './actionTypes';

const initial_value = [];

const quotesReducer = (state = initial_value, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_QUOTE: {
        draft.push(action.payload);
        break;
      }
      case ADD_QUOTE_COMMENT: {
        const quote = draft.find(
          (quoteItem) => quoteItem.id === action.payload.quoteId
        );

        if (!quote) {
          break;
        }

        console.log(action.payload);
        quote.comments.push(action.payload.comment);
        break;
      }
      default: {
        return [...state];
      }
    }
  });
};

export default quotesReducer;
