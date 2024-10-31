import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.content__wrapper}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <small>Technology: CSS</small>
            <h2>Vaporized Claims: responsive collage</h2>
            <p>I have been enamored with collage since childhood and wanted to explore the combination of the classic idea of collage&mdash;paper cutouts and images pasted to a board&mdash;with modern web tecnology.</p>
            <a href="https://www.vaporizedclaims">
              <div className={styles.cta}>
                View Site
              </div>
            </a>
          </div>
          <div className={styles.block}>
            <figure>
              <video src="/VaporizedClaims.mp4" loop muted autoPlay></video>
            </figure>
          </div>
        </div>
      </div>
    </main>
  )
}