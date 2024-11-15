'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {


  return (
    <main className={styles.main}>
      <div className={styles.content__wrapper}>
        <div className={styles.content}>
          <div className={styles.header}>
          <div className={styles.meta}>
              <small>Technology: Bedrock, Claude, Stable Diffusion</small>
              <h2 className={styles.title}>Songboard</h2>
            </div>
            <p className={styles.subtitle}>Prompts for songwriters</p>
          </div>
          <div className={styles.block}>
              <figure className={styles.border}>
                <video src="/img/songboard/JournalTelemetry.mp4" loop muted autoPlay></video>
              </figure>
              <figure className={styles.border}>
                <video src="/img/songboard/SyntheticHardwareTwo.mp4" loop muted autoPlay></video>
              </figure>
          </div>
        </div>
      </div>
    </main>
  );
}