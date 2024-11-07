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
    videoPlayer.setVolume(0.5);
    
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.content__wrapper}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <small>Technology: Java, Processing, MIDI</small>
            <h2>yoshiGo!</h2>
            <h6>AV project that combines generative art and music via MIDI</h6>
            <figure>
              <div id="videoContainer"></div>
            </figure>
            <div className={styles.twoCol}>
              <figure>
                <Image 
                  src="/img/yoshigo/2022-18.png" 
                  alt="yoshigo" 
                  width={1080} 
                  height={1080} 
                  />
              </figure>
              <figure>
                <Image 
                  src="/img/yoshigo/2022-19.png" 
                  alt="yoshigo" 
                  width={1080} 
                  height={1080} 
                  />
              </figure>
              <figcaption><small>Figma sketches</small></figcaption>
            </div>
            <div className={styles.block}>
              <figure>
                <Image 
                  src="/img/yoshigo/yoshigo-ide.png" 
                  alt="yoshigo" 
                  width={1920} 
                  height={1080} 
                  />
              </figure>
              <figcaption><small>Working with Java in a modern IDE (I use IntelliJ Idea) is really nice.</small></figcaption>
            </div>
          </div>
          <div className={styles.block}>
            <figure>
              <div id="videoContainerB"></div>
            </figure>
          </div>
          <figcaption><small>I built some sliders to control parameters that control various aspects of the output.</small></figcaption>
        </div>
      </div>
    </main>
  )
}