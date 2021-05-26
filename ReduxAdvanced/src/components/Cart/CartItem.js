import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { actionChangeCartQuantity } from '../../store/reducers/cart/actions';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const addToQuantityHandler = () => {
    dispatch(actionChangeCartQuantity(title, 'sum'));
  };

  const removeFromQuantityHandler = () => {
    dispatch(actionChangeCartQuantity(title, 'sub'));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromQuantityHandler}>-</button>
          <button onClick={addToQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
