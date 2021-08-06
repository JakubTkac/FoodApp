import styles from "./CartItem.module.css";
import { useStore } from "../../../store/cartStore";

const CartItem = (props) => {
  const minusOne = useStore((store) => store.minusOne);
  const plusOne = useStore((store) => store.plusOne);
  const updateYourCartValue = useStore((store) => store.updateYourCartValue);

  const updateYourCartValueHandler = () => {
    updateYourCartValue();
  };

  const minusOneHandler = () => {
    minusOne(props.id);
  };

  const plusOneHandler = () => {
    plusOne(props.id);
  };

  return (
    <>
      <div className={styles["cart-item"]}>
        <div className={styles["cart-left"]}>
          <p className={styles["cart-item-name"]}>{props.name}</p>
          <div className={styles["cart-count"]}>
            <p className={styles["cart-item-price"]}>{props.price}</p>
            <p className={styles["cart-item-count"]}>{props.amount}</p>
          </div>
        </div>
        <div className={styles["cart-buttons"]}>
          <button
            className={styles["cart-button"]}
            onClick={() => {
              minusOneHandler();
              updateYourCartValueHandler();
            }}
          >
            -
          </button>
          <button
            className={styles["cart-button"]}
            onClick={() => {
              plusOneHandler();
              updateYourCartValueHandler();
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
