import { NOTIFICATION, TOGGLE } from './actionTypes';

export const actionToggleCart = () => {
  return {
    type: TOGGLE,
  };
};

export const actionNotification = (notification) => {
  return {
    type: NOTIFICATION,
    payload: notification,
  };
};
