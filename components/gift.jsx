import styles from "../src/styles/gift.module.css";

const Gift = () => {
  return (
    <div className={styles.gift}>
      <div className={styles.gift_top}></div>
      <div className={styles.gift_body}></div>
      <div className={styles.tie_top}></div>
      <div className={styles.tie_body}></div>
    </div>
  );
};

export default Gift;
