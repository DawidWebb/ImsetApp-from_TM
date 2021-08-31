import styles from "./support.module.scss";

const Support = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>nasz support</h2>
        <p> ppropozycje naszego tv-maniaka na weekend</p>
      </div>
      <div className={styles.icons}>
        <div className={styles.picture}>
          <div></div>
        </div>
        <div className={styles.info1}>
          <p>zobacz co kuba znalazł ciekawego w tv na weekend</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            viewBox="0 0 24 24"
            width="50px"
            fill="#fff"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </div>
        <div className={styles.info2}>
          <p>podyskutuj z nami o filmach już w piatek 15.09.2014</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            viewBox="0 0 24 24"
            width="50px"
            fill="#fff"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
          </svg>
        </div>
      </div>
      <div className={styles.info}>
        <a href="/">
          Zostań naszym ekspertem i poprpwadź przedweekendowy chat z
          użytkownikami
        </a>
      </div>
    </div>
  );
};

export default Support;
