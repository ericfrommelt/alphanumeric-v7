"use client"

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function NavOne() {
  const [activeNav, setActiveNav] = useState(0);
  const barRef = useRef(null);

  function navTransition() {
      if (activeNav === 0) {
        console.log('home')
        barRef.current.style.gridColumn = 1;
        barRef.current.style.background = `linear-gradient(90deg, hsl(37, 100%, 58%), hsl(34, 99%, 58%))`;
      } else if (activeNav === 1) {
        barRef.current.style.background = `linear-gradient(90deg, hsl(79, 100%, 58%), hsl(112, 99%, 58%))`;
        barRef.current.style.gridColumn = 2;
        console.log('products')
      } else if (activeNav === 2) {
        barRef.current.style.background = `linear-gradient(90deg, hsl(180, 100%, 58%), hsl(194, 99%, 58%))`;
        barRef.current.style.gridColumn = 3;
        console.log('contact')
      }
      // barRef.current.style.background = `linearGradient(90deg, hsl(79, 100%, 58%), hsl(112, 99%, 58%))`;
    }
  
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}><button onClick={() => {navTransition(); setActiveNav(0)}} className={styles.nav__link}>Home</button></li>
            <li className={styles.nav__item}><button onClick={() => {navTransition(); setActiveNav(1)}} className={styles.nav__link}>Products</button></li>
            <li className={styles.nav__item}><button onClick={() => {navTransition(); setActiveNav(2)}} className={styles.nav__link}>Contact</button></li>
            <li ref={barRef} className={styles.nav__bar} aria-hidden="true"></li>
          </ul>
          <div><button onClick={()=>{navTransition(); setActiveNav(2)}}>Help</button></div>
        </nav>
      </header>
    </>
  )
}