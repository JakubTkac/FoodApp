import styles from "./AddButton.module.css";
import { useStore } from "../../../store/cartStore";

const AddButton = (props) => {
  const updateYourCartValue = useStore((store) => store.updateYourCartValue);
  const updateYourCartValueHandler = () => {
    updateYourCartValue();
  };

  return (
    <>
      <button
        className={styles["add-button"]}
        onClick={() => {
          props.addToCartHandler();
          updateYourCartValueHandler();
        }}
      >
        ADD
      </button>
    </>
  );
};

export default AddButton;
