"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Projects from "../components/Projects";

export default function hpe() {
  return (
    <main className={styles.main}>
      <div className={styles.content__wrapper}>
        <div className={styles.content}>
          <div className={styles.meta}>
            <small>Technology: React, Gatsby, CSS, GSAP, D3</small>
          </div>
          <h2>Building a content templeting system with the ability to add art directed title treatments with animation.</h2>
          <p>My team at Digitas needed a way to deliver design templates that allowed for the delivery of content pages with the option to include art directable, animated title treatments. The turn around time for these requests were generally five to ten days. So the templates had to be simple and repeatable.</p>
          <div className={styles.block}>
            <p>I started by building a prototype in Gatsby, a static site generator built in React. For the title treatment I made an animatic in After Effects. This would guide my development of animating the title in GSAP down the line.</p>
            <figure>
            <video src="/img/hpe/CyberCrime-Title.mp4" loop muted autoPlay></video>
            </figure>
          </div>
          <div className={styles.block}>
            <p>Next, I established my grid and styles based on brand guidelines.</p>
            <figure>
              <Image src="/img/hpe/css.png" alt="HPE Grid" width={1920} height={1080} />
            </figure>
          </div>
          <div className={styles.block}>
            <p>I broke down the title treatment into svgs and animated them with the GSAP animation library.</p>
            <figure>
              <Image src="/img/hpe/svgBreakdown.png" alt="HPE Grid" width={1920} height={1080} />
            </figure>
          </div>
          <div className={styles.block}>
            <p>Finally, I composed everything everything together and triggered the animation of the bar charts on scroll to grab our readers attention and reinforce the importance of the data.</p>
            <figure>
            <video src="/img/hpe/CyberCrime-Scroll.mp4" loop muted autoPlay></video>
            </figure>
          </div>
          <div className={styles.block}>
            <h4>Impact</h4>
            <p>After integrating the template system into our workflow, we were able to reduce our overall delivery time by 50%.</p>
          </div>
        </div>
      </div>
    </main>
  );
}