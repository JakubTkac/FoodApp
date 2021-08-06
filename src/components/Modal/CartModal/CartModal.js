import styles from "./CartModal.module.css";
import ReactDOM from "react-dom";
import { useStore } from "../../../store/cartStore";
import CartItem from "../CartItem/CartItem";
var _ = require("lodash");

const CartModal = (props) => {
  const cartList = useStore((store) => store.cartList);

  const totalPrice = parseFloat(
    _.sum(
      cartList.map((cart) => {
        return cart.price * cart.amount;
      })
    )
  ).toFixed(2);

  return ReactDOM.createPortal(
    <>
      <div onClick={props.closeCartModalHandler} className={styles["overlay"]}>
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          className={styles["cart"]}
        >
          {cartList.map((item) => {
            return (
              <CartItem
                name={item.name}
                price={item.price}
                amount={item.amount}
                id={item.id}
                key={item.id}
              />
            );
          })}
          <div className={styles["cart-total-amount"]}>
            <h1>Total Amount</h1>
            <p>{totalPrice}</p>
          </div>
          <div className={styles["cart-options"]}>
            <button
              onClick={props.closeCartModalHandler}
              className={styles["cart-button-cancel"]}
            >
              Cancel
            </button>
            <button className={styles["cart-button-order"]}>ORDER</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("cart")
  );
};

export default CartModal;
