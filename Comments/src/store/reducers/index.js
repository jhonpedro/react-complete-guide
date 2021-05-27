import { combineReducers } from 'redux';
import quotesReducer from './quote';

const rootReducer = combineReducers({
  quotes: quotesReducer,
});

export default rootReducer;
