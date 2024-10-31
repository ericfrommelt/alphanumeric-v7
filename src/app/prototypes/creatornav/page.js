"use client";

import styles from "./page.module.css";
import CreatorNav from "./CreatorNav";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.content__wrapper}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <small>Technology: Rive</small>
          </div>
        </div>
        <div className={styles.proto}>
          <CreatorNav />
        </div>
      </div>
    </main>
  )
}