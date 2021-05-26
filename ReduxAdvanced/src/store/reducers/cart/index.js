import produce from 'immer';
import { ADD_TO_CART, CHANGE_QUANTITY } from './actionTypes';

const initial_value = [];

const cartReducer = (state = initial_value, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_TO_CART: {
        const { title, price, description } = action.payload;

        let wasChanged = false;
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].title === title) {
            draft[i].quantity += 1;
            wasChanged = true;
            break;
          }
        }

        if (wasChanged) {
          break;
        }

        draft.push({ title, price, description, quantity: 1 });
        break;
      }
      case CHANGE_QUANTITY: {
        const { itemTitle, action: operation } = action.payload;

        const operationResult = operation === 'sum' ? +1 : -1;

        for (let i = 0; i < draft.length; i++) {
          if (draft[i].title === itemTitle) {
            draft[i].quantity += operationResult;
          }
          if (draft[i].quantity === 0) {
            draft.splice(i, 1);
          }
        }

        break;
      }
      default: {
        break;
      }
    }
  });
};

export default cartReducer;
