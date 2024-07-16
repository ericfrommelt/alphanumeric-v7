import styles from "./project.module.css"

export default function Project(props) {
  return(
    <div className={styles.project}>
        <a href={props.link}>
          <div className={styles.project__img__wrapper}>
            <div className={styles.project__img}>
              <video src={props.video} loop muted autoPlay></video>
            </div>
            <div className={styles.project__img__bg}></div>
            <div className={styles.project__img__border__a}></div>
            <div className={styles.project__img__border__b}></div>
          </div>
          <div className={styles.navItemWrapper}>
            <div className={styles.navGroup}>
              <div className={styles.arrowLeft}>
                <svg className={styles.navArrow} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 9L5 5L1 0.999999"/>
                </svg>
              </div>
              View Project
            </div>
          </div>
        </a>
      </div>
  )
}