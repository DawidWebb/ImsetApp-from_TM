import styles from "./mianOffer.module.scss";

const MainOffer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.interiorImage}>
          <div className={styles.container}>
            <div className={styles.clipping}></div>
          </div>
        </div>
        <h2>zyskaj więcej</h2>
        <div className={styles.icons}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 0 24 24"
              width="28px"
              fill="none"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z" />
            </svg>
          </div>
          <span>+</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 0 24 24"
              width="28px"
              fill="none"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
            </svg>
          </div>
        </div>
        <div className={styles.title}>
          <p>kup internet,</p>
          <p>
            a <span>hbo</span>
            <span>go</span>
          </p>
          <p>dostaniesz za</p>
          <p>1</p>
          <p>zł</p>
        </div>
      </div>
    </div>
  );
};

export default MainOffer;
