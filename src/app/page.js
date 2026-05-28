"use client"

import { useState } from "react";

import Image from "next/image";
import styles from "./page.module.css";
import Projects from "./components/Projects";


export default function Home() {

  return (
    <main className="grid min-h-screen grid-cols-1 max-w-screen-xl mx-auto p-4 gap-4">
      <Projects />
    </main>
  );
}
