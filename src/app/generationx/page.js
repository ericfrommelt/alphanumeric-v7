"use client"

import styles from "./page.module.css"
import dynamic from "next/dynamic"


const Generationx = () => {
  const GenSketch = dynamic(() => import("./sketch"), { ssr: false });

  return (
    <>
      <div className={styles.content__wrapper}>
        <h2 className={styles.title}>Generation__X</h2>
        <p className={styles.info}>Generative art &mdash; 2024</p>
        <div className={styles.p5Wrapper}>
          <GenSketch />
        </div>
      </div>
    </>
  );
};

export default Generationx;
