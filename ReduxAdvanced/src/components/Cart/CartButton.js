import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const cartLength = useSelector((state) => state.cart.length);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartLength}</span>
    </button>
  );
};

export default CartButton;
