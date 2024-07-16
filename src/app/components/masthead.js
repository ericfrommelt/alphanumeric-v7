import styles from "./masthead.module.css";

export default function Masthead() {
  return (
    <header className={styles.masthead}>
      <div className={styles.nameWrapper}>
        <div className={styles.navItemWrapper}>
          <div className={styles.navGroup}>
            <div className={styles.arrowLeft}>
              <svg className={styles.navArrow} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 0.999999"/>
              </svg>
            </div>
              <a href="/"><h1 className={styles.mastheadName}>Eric Frommelt</h1></a>
          </div>
        </div>
      </div>
      <p>Digital Design Engineer</p>
      <p>Los Angeles, California</p>
    </header>
  );
}