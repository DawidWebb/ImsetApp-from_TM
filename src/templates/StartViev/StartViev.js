import {
  AdditionalOfer,
  Application,
  MainOffer,
  OnLine,
  PacgagesOffer,
  Support,
  VodOffer,
} from "../../templates";
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
        <div className={styles.onLine}>
          <OnLine />
        </div>
        <div className={styles.additionalOffer}>
          <AdditionalOfer />
        </div>
        <div className={styles.support}>
          <Support />
        </div>
        <div className={styles.application}>
          <Application />
        </div>
      </div>
    </div>
  );
};

export default StartViev;
