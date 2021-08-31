import styles from "./onLine.module.scss";

const OnLine = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.title}>
          <h2>teraz w tv online</h2>
          <div className={styles.info}>
            <p>teraz ogląda</p>
            <p>258</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="none"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
          </div>
        </div>

        <div className={styles.icons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            viewBox="0 0 24 24"
            width="50px"
            fill="none"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            viewBox="0 0 24 24"
            width="50px"
            fill="none"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            viewBox="0 0 24 24"
            width="50px"
            fill="none"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </div>
        <div className={styles.name}>
          <p>Anatomia magii</p>
          <p>discovery channel</p>
        </div>
      </div>
    </div>
  );
};

export default OnLine;
