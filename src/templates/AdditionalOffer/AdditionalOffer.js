import styles from "./additionalOffer.module.scss";

const AdditionalOffer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.title}>
          <h2>pakiet 20 gb lte</h2>
          <p>promocja</p>
        </div>
        <div className={styles.offer}>
          <p>Dla tych którzy nie wyobrażają sobie życia bez internetu:</p>
          <ul>
            <li>ogladaj filmy umieszczone w sieci</li>
            <li>ściągaj duże pliki</li>
            <li>korzystaj z poczty, komunikatora</li>
            <li>surfuj swobodnie</li>
          </ul>
        </div>
        <div className={styles.info}>
          <p>swoboda</p>
          <p>i mobilność za</p>
          <p>50</p>
          <p>zł</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalOffer;
