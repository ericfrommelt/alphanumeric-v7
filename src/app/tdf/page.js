"use client"

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css"

import Stage from "./Stage";

gsap.registerPlugin(useGSAP);

export default function Page() {
  const item1 = useRef();
  const item2 = useRef();
  const item3 = useRef();
  const item4 = useRef();
  const item5 = useRef();
  const item6 = useRef();
  const item7 = useRef();
  const item8 = useRef();
  const item9 = useRef();
  const item10 = useRef();
  const item11 = useRef();
  const item12 = useRef();
  const item13 = useRef();
  const item14 = useRef();
  const item15 = useRef();
  const item16 = useRef();
  const item17 = useRef();
  const item18 = useRef();
  const item19 = useRef();
  const item20 = useRef();
  const item21 = useRef();
  const item22 = useRef();
  const item23 = useRef();

  useGSAP(
    () => {
    gsap.to(item1.current, { duration: 1, y: -100, stagger: 0.1, ease: "back" })
  });
  
  return (
    <>
    <div className={styles.image__wrapper}>
      <Image
        src="/tdf.png"
        width={2725}
        height={1080}
        alt="Tour de France 2024"
        />
    </div>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Tour de France 2024</h1>
        <p>June 29 - July 21</p>
      </div>
      <div className={styles.stage__list}>
        <Stage ref={item1} number="Stage 1" date="06/29" length="206 km" route="Florence > Rimini" />
        <Stage ref={item2} number="Stage 2" date="06/30" length="199.2 km" route="Cesenatico > Bologne" />
        <Stage ref={item3} number="Stage 3" date="07/01" length="230.8 km" route="Plaisance > Turin" />
        <Stage ref={item4} number="Stage 4" date="07/02" length="139.6 km" route="Pinerolo > Valloire" />
        <Stage ref={item5} number="Stage 5" date="07/03" length="177.4 km" route="Saint-Jean-de-Maurienne > Saint-Vulbas" />
        <Stage ref={item6} number="Stage 6" date="07/04" length="163.5 km" route="Mâcon > Dijon" />
        <Stage ref={item7} number="Stage 7" date="07/05" length="25.3 km" route="Nuits-Saint-Georges > Gevrey-Chambertin" />
        <Stage ref={item8} number="Stage 8" date="07/06" length="183.4 km" route="Semur-en-Auxois > Colombey-les-deux-Églises" />
        <Stage ref={item9} number="Stage 9" date="07/07" length="199 km" route="Troyes > Troyes" />
        <Stage ref={item10} number="Rest Day" date="07/08" route="Orléans" />
        <Stage ref={item11} number="Stage 10" date="07/09" length="187.3 km" route="Orléans > Saint-Amand-Montrond" />
        <Stage ref={item12} number="Stage 11" date="07/10" length="211 km" route="Évaux-les-Bains > Le Lioran" />
        <Stage ref={item13} number="Stage 12" date="07/11" length="203.6 km" route="Aurillac > Villeneuve-sur-Lot" />
        <Stage ref={item14} number="Stage 13" date="07/12" length="165.3 km" route="Agen > Pau" />
        <Stage ref={item15} number="Stage 14" date="07/13" length="151.9 km" route="Pau > Saint-Lary-Soulan Pla d’Adet" />
        <Stage ref={item16} number="Stage 15" date="07/14" length="197.7 km" route="Loudenvielle > Plateau de Beille" />
        <Stage ref={item17} number="Rest Day" date="07/15" route="Gruissan" />
        <Stage ref={item18} number="Stage 16" date="07/16" length="188.6 km" route="Gruissan > Nîmes" />
        <Stage ref={item19} number="Stage 17" date="07/17" length="177.8 km" route="Saint-Paul-Trois-Châteaux > Superdévoluy" />
        <Stage ref={item20} number="Stage 18" date="07/18" length="179.5 km" route="Gap > Barcelonnette" />
        <Stage ref={item21} number="Stage 19" date="07/19" length="144.6 km" route="Embrun > Isola 2000" />
        <Stage ref={item22} number="Stage 20" date="07/20" length="132.8 km" route="Nice > Col de la Couillole" />
        <Stage ref={item23} number="Stage 21" date="07/21" length="33.7 km" route="Monaco > Nice" />
      </div>
    </div>
    </>
  );
}
