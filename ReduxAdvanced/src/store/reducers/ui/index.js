import produce from 'immer';
import { NOTIFICATION, TOGGLE } from './actionTypes';

const initial_value = {
  showCart: false,
  notification: null,
};

const uiReducer = (state = initial_value, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case TOGGLE: {
        draft.showCart = !draft.showCart;
        break;
      }
      case NOTIFICATION: {
        draft.notification = action.payload;
        break;
      }
      default: {
        return { ...state };
      }
    }
  });
};

export default uiReducer;
