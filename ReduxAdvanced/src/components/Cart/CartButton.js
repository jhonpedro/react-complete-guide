import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { actionToggleCart } from '../../store/reducers/ui/actions';

const CartButton = (props) => {
  const cartLength = useSelector((state) => state.cart.length);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(actionToggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartLength}</span>
    </button>
  );
};

export default CartButton;
