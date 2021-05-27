import { ADD_QUOTE } from './actionTypes';

export const actionAddQuote = (newQuote) => {
  return {
    type: ADD_QUOTE,
    payload: newQuote,
  };
};
