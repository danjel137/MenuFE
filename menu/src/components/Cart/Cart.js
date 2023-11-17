import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
    const cartCtx=useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems=cartCtx.items.length>0
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );


  return (
      <Modal onClickHideCart={props.onHideCart}>
          {cartItems}
          <div className={classes.total}>
              <span>Total Amount</span>
              <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
              <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
              <button className={classes.button}>Order</button>
          </div>
      </Modal>
  );
};

export default Cart;