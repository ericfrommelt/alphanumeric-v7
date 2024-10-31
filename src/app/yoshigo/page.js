"use client"

import React, { useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Player from "@vimeo/player";

export default function Page() {
  useEffect(() => {

    var videoOptions = {
      id: 1024994355,
      width: 1000,
    }

    var videoOptionsB = {
      id: 1024994693,
      width: 1000
    }

    const videoPlayer = new Player("videoContainer", videoOptions);
    const videoPlayerB = new Player("videoContainerB", videoOptionsB);
    videoPlayer.setVolume(0);
    
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.content__wrapper}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <small>Technology: Java, Processing, MIDI</small>
            <h2>yoshiGo!</h2>
            <h6>AV project that combines generative art and music via MIDI</h6>
            <p>This is an ongoing project.</p>
          </div>
          <div className={styles.block}>
            <figure>
              <div id="videoContainer"></div>
            </figure>
            <figure>
              <div id="videoContainerB"></div>
            </figure>
          </div>
        </div>
      </div>
    </main>
  )
}