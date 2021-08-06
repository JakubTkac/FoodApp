import styles from "./Items.module.css";
import Item from "../Item/Item";
import { useStore } from "../../store/cartStore";

const Items = (props) => {
  const cartList = useStore((store) => store.cartList);
  const addToCart = useStore((store) => store.addToCart);
  const updateAmountInCart = useStore((store) => store.updateAmountInCart);

  const addHandler = (item) => {
    const check = cartList.filter((cart) => {
      return cart.id === item.id;
    });
    if (check.length === 0) {
      addToCart(item);
    } else {
      updateAmountInCart(item.amount, item.id);
    }
  };

  return (
    <>
      <ul className={styles["items"]}>
        {props.items.map((item) => {
          return <Item item={item} addHandler={addHandler} key={item.id} />;
        })}
      </ul>
    </>
  );
};

export default Items;
