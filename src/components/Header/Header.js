import styles from "./Header.module.css";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <h1>React Meals</h1>
      <Cart></Cart>
    </div>
  );
};

export default Header;
