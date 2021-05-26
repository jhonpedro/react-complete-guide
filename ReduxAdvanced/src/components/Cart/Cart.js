import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem) => {
          const total =
            parseInt(cartItem.quantity) * parseFloat(cartItem.price);

          return (
            <CartItem
              key={cartItem.title}
              item={{
                title: cartItem.title,
                quantity: cartItem.quantity,
                total,
                price: cartItem.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
