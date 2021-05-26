import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Notification from './components/UI/Notification';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {
  actionGetCart,
  actionSendCartData,
} from './store/reducers/cart/actions';

let initial = true;

function App() {
  const { showCart, notification } = useSelector((state) => state.ui);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    actionGetCart()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }
    actionSendCartData(cartItems)(dispatch);
  }, [cartItems, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
