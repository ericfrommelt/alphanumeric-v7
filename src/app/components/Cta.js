import styles from "./cta.module.css"

export default function Cta(props) {
  return (
    <div className={styles.navItemWrapper}>
      <div className={styles.navGroup}>
        <div className={styles.arrowLeft}>
          <svg className={styles.navArrow} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L5 5L1 0.999999"/>
          </svg>
        </div>
        <span className={styles.cta}>{props.txt}</span>
      </div>
    </div>
)
}