"use client"

import { useState } from "react";

import Image from "next/image";
import styles from "./page.module.css";
import Projects from "./components/Projects";


export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.content__wrapper}>
        <Projects />
      </div>
    </main>
  );
}
