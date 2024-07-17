import styles from "./masthead.module.css";

export default function Masthead() {
  return (
    <header className={styles.masthead}>
      <div className={styles.nameWrapper}>
        <div className={styles.navItemWrapper}>
          <div className={styles.navGroup}>
     
            <div className={styles.cube}>
              <div className={styles.container}>
                <div className={styles.overlay}>
                  <div className={styles.top}>
                    <a href="/"><h1 className={styles.mastheadName}>Alphanumeric.io</h1></a>
                  </div>
                  <div className={styles.front}>
                    <a href="/"><h1 className={styles.mastheadAlpha}>Eric Frommelt</h1></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p>Digital Design Engineer</p>
      <p>Los Angeles, California</p> */}
    </header>
  );
}