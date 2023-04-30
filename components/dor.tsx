import styles from "../src/styles/dor.module.css";
import DorModel from "../model/dor";

interface DorProps {
  dor: DorModel;
}

const Dor = (props: DorProps) => {
  const { dor } = props;

  const handleFrameStyle = () => {
    if (dor?.selected) {
      return `${styles.dor_frame} ${styles.selected}`;
    }
    return styles.dor_frame;
  };

  return (
    <div className={styles.dor_area}>
      <div className={handleFrameStyle()}>
        <div className={styles.dor}>
          <div className={styles.dor_number}>{dor?.number}</div>
          <div className={styles.dor_knob}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Dor;
