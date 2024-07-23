import styles from "./sketch.module.css"
import React, { useEffect, useRef } from "react"
import p5 from "p5"

const PureDataSketch = () => {
  const sketchRef = useRef()

  useEffect(() => {
    const sketch = new p5((p) => {
      // Colors
      let red = p.color(164, 21, 53)
      p.setup = () => {
        p.createCanvas(800, 800)
        p.background(255)
      }

      p.draw = () => {
        // p.background(255)
        // p.ellipse(p.mouseX, p.mouseY, 50, 50)
        p.dOne(100, 100, 6, 10, 100, 10)
        p.dOne(100, 220, 6, 10, 100, 10)
        p.dOne(100, 340, 6, 100, 600, 10)
      }

      p.dOne = function(x, y, dWidth, dHeightMin, dHeightMax, gap, col) {
        p.fill(2)
        for (let i = 0; i < 100; i++) {
          p.rect(x+=dWidth + gap, y, dWidth, p.random(dHeightMin, dHeightMax))
        }
      }
    }, sketchRef.current)

    return () => {
      sketch.remove()
    }
  }, [])

return <div className={styles.p5Wrapper} ref={sketchRef}></div>

}

export default PureDataSketch