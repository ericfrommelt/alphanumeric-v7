import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.content__wrapper}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <small>Technology: Unity, C#</small>
            <h2>Sports Mode: Prototyping a novel new feature for sports fans</h2>
            <p>Directv has one of the most comprehensive sports packages in the industry and wanted to give hardcore fans a simple and elegant way to engage with their favorite games. Sports Mode&mdash;when activated&mdash;brings a customers favorite teams, games, and stats together in one place in the context of watching live sports.</p>
          </div>
          <div className={styles.block}>
            <p>The interaction that activates Sports Mode is a press and hold of the Ok button on the Directv remote.</p>
            <figure>
              <figcaption><small>Early development sketches</small></figcaption>
              <Image src="/img/dtv/SportsMode_Sketches_SM-Sketch01.png" alt="Sketch" width={1920} height={1080} />
            </figure>
            <figure>
              <Image src="/img/dtv/SportsMode_Sketches_SM-Sketch02.png" alt="Sketch" width={1920} height={1080} />
            </figure>
            <figure>
              <Image src="/img/dtv/SportsMode_Sketches_SM-Sketch03.png" alt="Sketch" width={1920} height={1080} />
            </figure>
            <figure>
              <Image src="/img/dtv/SportsMode_Sketches_SM-Sketch04.png" alt="Sketch" width={1920} height={1080} />
            </figure>
            <figure>
              <figcaption><small>Prototype</small></figcaption>
              <video src="/img/dtv/SportsMode.mp4" loop muted autoPlay></video>
            </figure>
          </div>
        </div>
      </div>
    </main>
  )
}