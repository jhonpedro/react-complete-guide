import { ADD_TO_CART, CHANGE_QUANTITY } from './actionTypes';

export const actionAddToCart = (cartItem) => ({
  type: ADD_TO_CART,
  payload: cartItem,
});

export const actionChangeCartQuantity = (cartItemTitle, quantityAction) => ({
  type: CHANGE_QUANTITY,
  payload: {
    itemTitle: cartItemTitle,
    action: quantityAction,
  },
});
