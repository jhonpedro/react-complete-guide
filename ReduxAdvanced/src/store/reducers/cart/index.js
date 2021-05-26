import produce from 'immer';
import { ADD_TO_CART, CHANGE_QUANTITY, REPLACE_CART } from './actionTypes';

const initial_value = [];

const cartReducer = (state = initial_value, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_TO_CART: {
        const { title, price, description } = action.payload;

        const existingItem = draft.find((item) => item.title === title);

        if (!existingItem) {
          draft.push({ title, price, description, quantity: 1 });
          break;
        }

        existingItem.quantity += 1;

        break;
      }
      case CHANGE_QUANTITY: {
        const { itemTitle, action: operation } = action.payload;

        const operationResult = operation === 'sum' ? +1 : -1;

        let existingItemIndex = -1;
        const existingItem = draft.find((item, index) => {
          existingItemIndex = index;
          return item.title === itemTitle;
        });

        existingItem.quantity += operationResult;

        if (existingItem.quantity === 0) {
          draft.splice(existingItemIndex, 1);
        }

        break;
      }
      case REPLACE_CART: {
        if (!action.payload) {
          return;
        }

        return action.payload.slice();
      }
      default: {
        break;
      }
    }
  });
};

export default cartReducer;
