import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <div className={styles.navItemWrapper}>
            <div className={styles.navGroup}>
              <a href="/">Home</a>
              <div className={styles.arrowRight}>
                <svg className={styles.navArrow} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 1L1.5 5L5.5 9" />
                </svg>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.navItemWrapper}>
            <div className={styles.navGroup}>
              <a href="/information/">Information</a>
              <div className={styles.arrowRight}>
                <svg className={styles.navArrow} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 1L1.5 5L5.5 9" />
                </svg>
              </div>
            </div>
          </div>
        </li>        
      </ul>
    </nav>
  );
}