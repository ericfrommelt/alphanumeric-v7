"use client"

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import styles from "./stage.module.css"

gsap.registerPlugin(useGSAP,ScrambleTextPlugin);

export default function Stage(props) {

  const numberRef = useRef();
  const dateRef = useRef();
  const lengthRef = useRef();
  const routeRef = useRef();
  const containerRef = useRef();
  const stageTimeline = useRef();

  useGSAP(
    () => {
      gsap.to(numberRef.current, {
        duration: 1.5,
        scrambleText: { 
          text: props.number,
          chars: "000000",
          revealDelay: 0.2,
          speed: .5
        },
      })
      gsap.to(dateRef.current, {
        duration: .5,
        scrambleText: { 
          text: props.date,
          chars: "000000",
          speed: .5
        },
      })
      gsap.to(lengthRef.current, {
        duration: .5,
        scrambleText: { 
          text: props.length,
          chars: "000000",
          speed: .5
        },
      })
      gsap.to(routeRef.current, {
        duration: .5,
        scrambleText: { 
          text: props.route,
          chars: "000000000000000000000000",
          speed: .5
        },
      })
    });

  return (
    <a href="#">
      <ul className={styles.stage} ref={containerRef}>
        <li className={styles.stage__number} ref={numberRef}>00000000</li>
        <li className={styles.stage__date} ref={dateRef}>00000</li>
        <li className={styles.stage__length} ref={lengthRef}>0000000000</li>
        <li className={styles.stage__route} ref={routeRef}>0000000000000000000000000</li>
      </ul>
    </a>
  )
}