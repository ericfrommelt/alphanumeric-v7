import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.content__wrapper}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <small>Technology: Vue, Nuxt, CSS</small>
            <h2>Terminal Index: a interaction sketchbook</h2>
            <p>This was a personal project with the intention of exploring interaction, motion, and typography while expanding my knowledge of Nuxt JS and CSS.</p>
            <a href="https://terminalindex.vercel.app">
              <div className={styles.cta}>
                View Site
              </div>
            </a>
          </div>
          <div className={styles.block}>
            <figure>
              <video src="/TerminalIndex.mp4" loop muted autoPlay></video>
            </figure>
          </div>
        </div>
      </div>
    </main>
  )
}