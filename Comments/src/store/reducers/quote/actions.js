import { ADD_QUOTE, ADD_QUOTE_COMMENT } from './actionTypes';

export const actionAddQuote = (newQuote) => {
  return {
    type: ADD_QUOTE,
    payload: newQuote,
  };
};

export const actionAddQuoteComment = (commentInfo) => {
  return {
    type: ADD_QUOTE_COMMENT,
    payload: { comment: commentInfo.comment, quoteId: commentInfo.quoteId },
  };
};
