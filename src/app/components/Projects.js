import styles from "./projects.module.css"
import Image from "next/image"


export default function Projects() {
  return (
    <>
      <h6 className={styles.section__title}>Projects</h6>
      <section className={styles.projects__grid}>
        <div className={styles.project}>
          <a href="/dtv/">
          <div className={styles.project__img__wrapper}>
            <div className={styles.project__img}>
              <video src="SportsMode.mp4" loop muted autoPlay></video>
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
                <span className={styles.cta}>Sports Mode</span>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.project}>
          <a href="/hpe/">
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
                <span className={styles.cta}>HPE</span>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.project}>
          <a href="/terminalindex">
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
                <span className={styles.cta}>Terminal Index</span>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.project}>
          <a href="/vaporizedclaims/">
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
                <span className={styles.cta}>Vaporized Claims</span>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.project}>
          <a href="/yoshigo/">
          <div className={styles.project__img__wrapper}>
            <div className={styles.project__img}>
              <video src="/img/yoshigo/yoshiGonav_1.mp4" loop muted autoPlay></video>
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
                <span className={styles.cta}>yoshiGo!</span>
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
                <span className={styles.cta}>generationX</span>
              </div>
            </div>
          </a>
        </div>
        </section>

        <h6 className={styles.section__title}>Prototypes</h6>

        <section className={styles.projects__grid}>

        <div className={styles.project}>
          <a href="/prototypes/creatornav/">
            <div className={styles.project__img__wrapper}>
              <div className={styles.project__img}>
                <video src="CreatorNav.mp4" loop muted autoPlay></video>
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
                <span className={styles.cta}>Creator Nav</span>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.project}>
          <a href="/tdf/">
            <div className={styles.project__img__wrapper}>
              <div className={styles.project__img}>
                <video src="TDF-V1_alphanumeric.mp4" loop muted autoPlay></video>
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
                <span className={styles.cta}>TDF Stages</span>
              </div>
            </div>
          </a>
        </div>

        <div className={styles.project}>
          <a href="/prototypes/awards/">
            <div className={styles.project__img__wrapper}>
              <div className={styles.project__img}>
                <video src="awards.mp4" loop muted autoPlay></video>
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
                <span className={styles.cta}>Film Fest Awards</span>
              </div>
            </div>
          </a>
        </div>

      </section>
    </>
  )
}