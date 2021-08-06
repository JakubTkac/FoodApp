import styles from "./Item.module.css";
import AddButton from "../UI/AddButton/AddButton";
import React, { useState } from "react";

const Item = (props) => {
  const [amount, setAmount] = useState(4);

  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const addToCartHandler = () => {
    const addedItem = {
      name: props.item.name,
      price: props.item.price,
      id: props.item.id,
      amount: Number(amount),
    };
    if (
      isNaN(addedItem.amount) ||
      !Number.isInteger(addedItem.amount || addedItem.amount === 0)
    ) {
    } else {
      props.addHandler(addedItem);
    }
  };

  return (
    <>
      <li className={styles["item"]}>
        <div className={styles["item-information"]}>
          <p className={styles["item-name"]}>{props.item.name}</p>
          <p className={styles["item-description"]}>{props.item.description}</p>
          <p className={styles["item-price"]}>{props.item.price}</p>
        </div>
        <div className={styles["item-selection"]}>
          <div className={styles["item-merge"]}>
            <p className={styles["item-amount"]}>Amount</p>
            <input
              type="text"
              className={styles["item-input"]}
              value={amount}
              onChange={changeAmountHandler}
            />
          </div>
          <AddButton addToCartHandler={addToCartHandler} />
        </div>
      </li>
    </>
  );
};

export default Item;
