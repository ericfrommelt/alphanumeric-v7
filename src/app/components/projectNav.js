import styles from './projectNav.module.css';

export default function ProjectNav() {
  return (
    <nav className={styles.projectNav}>
      <ul>
        <li>
          <div className={styles.navItemWrapper}>
            <div className={styles.navGroup}>
              <div className={styles.arrowLeft}>
                <svg className={styles.navArrow} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 0.999999"/>
                </svg>
              </div>
              <a href="/hpe/">HPE</a>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.navItemWrapper}>
            <div className={styles.navGroup}>
              <div className={styles.arrowLeft}>
                <svg className={styles.navArrow} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 0.999999"/>
                </svg>
              </div>
              <a href="/terminalindex/">Terminal Index</a>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.navItemWrapper}>
            <div className={styles.navGroup}>
              <div className={styles.arrowLeft}>
                <svg className={styles.navArrow} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 0.999999"/>
                </svg>
              </div>
              <a href="/vaporizedclaims/">Vaporized Claims</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}