import styles from "./Description.module.css";

const Description = () => {
  return (
    <>
      <div className={styles["description"]}>
        <h1>Delicious food, Delivered to you</h1>
        <p>
          Chose your favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All our meals are cooked with high-quality, just in time and of course
          by experienced chefs!
        </p>
      </div>
    </>
  );
};

export default Description;
