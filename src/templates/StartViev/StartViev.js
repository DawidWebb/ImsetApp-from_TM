import { MainOffer, PacgagesOffer, VodOffer } from "../../templates";
import styles from "./startViev.module.scss";

const StartViev = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.mainOffer}>
          <MainOffer />
        </div>
        <div className={styles.vodOffer}>
          <VodOffer />
        </div>
        <div className={styles.packagesOffer}>
          <PacgagesOffer />
        </div>
        <div className={styles.onLine}></div>
        <div className={styles.additionalOffer}></div>
        <div className={styles.support}></div>
        <div className={styles.application}></div>
      </div>
    </div>
  );
};

export default StartViev;
