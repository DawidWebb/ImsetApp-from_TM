import styles from "./application.module.scss";

const Aplication = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>aplikacja</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab
          blanditiis.
        </p>
      </div>
      <div className={styles.icons}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="30px"
          viewBox="0 0 24 24"
          width="30px"
          fill="rgb(59, 59, 59)"
        >
          <g>
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
          </g>
          <g>
            <g>
              <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z" />
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="30px"
          viewBox="0 0 24 24"
          width="30px"
          fill="rgb(59, 59, 59)"
        >
          <g>
            <rect fill="none" height="24" width="24" y="0" />
          </g>
          <g>
            <path d="M17.05,20.28c-0.98,0.95-2.05,0.8-3.08,0.35c-1.09-0.46-2.09-0.48-3.24,0c-1.44,0.62-2.2,0.44-3.06-0.35 C2.79,15.25,3.51,7.59,9.05,7.31c1.35,0.07,2.29,0.74,3.08,0.8c1.18-0.24,2.31-0.93,3.57-0.84c1.51,0.12,2.65,0.72,3.4,1.8 c-3.12,1.87-2.38,5.98,0.48,7.13c-0.57,1.5-1.31,2.99-2.54,4.09L17.05,20.28z M12.03,7.25C11.88,5.02,13.69,3.18,15.77,3 C16.06,5.58,13.43,7.5,12.03,7.25z" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 0 24 24"
          width="30px"
          fill="rgb(59, 59, 59)"
        >
          <g fill-rule="evenodd">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z" />
          </g>
        </svg>
      </div>
      <div className={styles.picture}></div>
    </div>
  );
};
export default Aplication;
