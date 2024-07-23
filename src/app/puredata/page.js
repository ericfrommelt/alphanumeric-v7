"use client"

import styles from "./page.module.css"
import dynamic from "next/dynamic"

const PureData = () => {
  const PureDataSketch = dynamic(() => import("./sketch"), { ssr: false })

  return (
    <>
      <div className={styles.content__wrapper}>
        <h2 className={styles.title}>PureData</h2>
        <div className={styles.description}></div>
        <div className={styles.p5Wrapper}>
          <PureDataSketch />
        </div>
      </div>
    </>
  )
}

export default PureData;