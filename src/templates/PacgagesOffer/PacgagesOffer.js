import { Link } from "react-router-dom";
import styles from "./pacgagesOffer.module.scss";

const PacgagesOffer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <div className={styles.title}>
          <h2>stwórz swój własny pakiet</h2>
          <p>telewizja-internet-telefon</p>
        </div>
        <div className={styles.icons}>
          <div className={styles.wrap}>
            <div>
              <div className={styles.iconWrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="none"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z" />
                </svg>
              </div>
            </div>
            <div>
              <p>
                wybierz <span>ulubione kanały tv</span>
              </p>
            </div>
          </div>
          <div className={styles.wrap}>
            <div>
              <div className={styles.iconWrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="none"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z" />
                </svg>
              </div>
            </div>
            <div>
              <p>
                wybierz <span>prędkość internetu</span>
              </p>
            </div>
          </div>
          <div className={styles.wrap}>
            <div>
              <div className={styles.iconWrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="none"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M22,4.95C21.79,4.78,19.67,3,16.5,3c-3.18,0-5.29,1.78-5.5,1.95L16.5,12L22,4.95z" />
                      <path d="M20,15.51c-1.24,0-2.45-0.2-3.57-0.57c-0.35-0.12-0.75-0.03-1.02,0.24l-2.2,2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2 C9.1,8.31,9.18,7.92,9.07,7.57C8.7,6.45,8.5,5.25,8.5,4c0-0.55-0.45-1-1-1H4C3.45,3,3,3.45,3,4c0,9.39,7.61,17,17,17 c0.55,0,1-0.45,1-1v-3.49C21,15.96,20.55,15.51,20,15.51z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <p>
                  wybierz <span>ilość minut na rozmowy</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.wrap}>
            <div>
              <div className={styles.iconWrap}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="none"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z" />
                </svg>
              </div>
              <div>
                <p>
                  wybierz <span>internet mobilny</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button>stwórz pakiet</button>
          <Link to="/">lub wybierz pakiet, przygotowany przez nas</Link>
        </div>
      </div>
    </div>
  );
};

export default PacgagesOffer;
