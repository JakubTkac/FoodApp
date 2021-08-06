import styles from "./Cart.module.css";
import React, { useState } from "react";
import CartModal from "../Modal/CartModal/CartModal";
import { useStore } from "../../store/cartStore";

const Cart = () => {
  const [modal, setModal] = useState(false);
  const yourCartValue = useStore((store) => store.yourCartValue);

  const cartModalHandler = () => {
    setModal(true);
  };

  return (
    <>
      <div className={styles["cart"]} onClick={cartModalHandler}>
        <h2>Your cart</h2>
        <div className={styles["cart-counter"]}>
          <span>{yourCartValue}</span>
        </div>
      </div>
      {modal && (
        <CartModal
          closeCartModalHandler={() => {
            setModal(false);
          }}
        >
          {" "}
        </CartModal>
      )}
    </>
  );
};

export default Cart;
