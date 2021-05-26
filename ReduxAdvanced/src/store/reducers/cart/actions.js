import { actionNotification } from '../ui/actions';
import { ADD_TO_CART, CHANGE_QUANTITY, REPLACE_CART } from './actionTypes';

export const actionAddToCart = (cartItem) => ({
  type: ADD_TO_CART,
  payload: cartItem,
});
export const actionReplaceCart = (newCart) => ({
  type: REPLACE_CART,
  payload: newCart,
});

export const actionChangeCartQuantity = (cartItemTitle, quantityAction) => ({
  type: CHANGE_QUANTITY,
  payload: {
    itemTitle: cartItemTitle,
    action: quantityAction,
  },
});

export const actionSendCartData = (cartItems) => {
  return (dispatch) => {
    const request = async () => {
      const response = await fetch(
        'https://test-f860d-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cartItems),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      dispatch(
        actionNotification({
          title: 'Success',
          message: 'Everithing went Ok!',
          status: 'success',
        })
      );
    };

    request().catch(() => {
      dispatch(
        actionNotification({
          title: 'Error',
          message: 'There was an error in the request',
          status: 'error',
        })
      );
    });
  };
};

export const actionGetCart = () => {
  return (dispatch) => {
    const request = async () => {
      const response = await fetch(
        'https://test-f860d-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      dispatch(actionReplaceCart(data));
    };

    request();
  };
};
