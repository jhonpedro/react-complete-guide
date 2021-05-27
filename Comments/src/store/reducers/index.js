import { combineReducers } from 'redux';
import quoteReducer from './quote';

const rootReducer = combineReducers({
  quote: quoteReducer,
});

export default rootReducer;
