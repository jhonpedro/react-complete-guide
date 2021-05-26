import produce from 'immer';
import { TOGGLE } from './actionTypes';

const initial_value = {
  showCart: false,
};

const uiReducer = (state = initial_value, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case TOGGLE: {
        draft.showCart = !draft.showCart;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default uiReducer;
