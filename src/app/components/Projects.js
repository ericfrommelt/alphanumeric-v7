import styles from "./projects.module.css"
import Image from "next/image"


export default function Projects() {
  return (
    <section className={styles.projects__grid}>

      <div className={styles.project}>
        <a href="href=https://blissful-lichterman-3559c0.netlify.app/">
          <div className={styles.project__img__wrapper}>
            <div className={styles.project__img}>
              <video src="hpe.mp4" loop muted autoPlay></video>
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

      <div className={styles.project}>
        <a href="https://terminalindex.vercel.app/">
        <div className={styles.project__img__wrapper}>
          <div className={styles.project__img}>
            <video src="TerminalIndex.mp4" loop muted autoPlay></video>
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
              View project
            </div>
          </div>
        </a>
      </div>

      <div className={styles.project}>
        <a href="https://www.vaporized.claims/">
        <div className={styles.project__img__wrapper}>
          <div className={styles.project__img}>
            <video src="VaporizedClaims.mp4" loop muted autoPlay></video>
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
              View project
            </div>
          </div>
        </a>
      </div>

      <div className={styles.project}>
        <a href="/generationx/">
          <div className={styles.project__img__wrapper}>
            <div className={styles.project__img}>
              <Image src="/generationX.png" alt="Generation X" width={1280} height={720} />
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
              View project
            </div>
          </div>
        </a>
      </div>

    </section>
  )
}