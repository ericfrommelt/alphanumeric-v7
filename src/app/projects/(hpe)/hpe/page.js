import Link from "next/link"
import Image from "next/image"
import localFont from "next/font/local"
import style from "./page.module.css"

const metricBold = localFont({
  src: [
    {
      path: "./MetricHPE-Web-Bold.woff",
      weight: "700"
    },
    {
      path: "./MetricHPE-Web-Regular.woff",
      weight: "400"
    }
  ]
})

const simpleWeb = localFont({
  src: [
    {
      path: "./HPESimpleWeb-Regular.woff",
      weight: "400",
      style: "normal"
    },
  ]
})

const IndexPage = props => (
  <>
    <section className={style.stories}>
      <div className={style.story}>
        <div className={style.column}>
          <Link href="../public/cloud-cliff/">
            <Image
              src={"/img/hpe/engine-sq.jpg"}
              width={1000}
              height={1500}
              alt="engine"
              className={style.bgImage}
            />
              <h1 className={style.story__titleCloudCliff}>
                Master the Cloud Cliff
              </h1>
              <div className={style.overlay}></div>
            
          </Link>
        </div>
      </div>
      <div className={style.story}>
        <div className={style.column}>
          <Link href="/genomic-basics/">
            <Image
              src="/img/hpe/genome-face-sq.jpg"
              width={1000}
              height={1233}
              alt="genome"
              className={style.bgImage}
           />
              <h1 className={style.story__titleGenomic}>
                Genomic Basics for CIOs
              </h1>
              <div className={style.overlay}></div>
            
          </Link>
        </div>
      </div>
      <div className={style.story}>
        <div className={style.column}>
          <Link href="/cybercrime/">
            <Image
              src="/img/hpe/hacker-sq.jpg"
              width={1000}
              height={891}
              alt="hacker"
              className={style.bgImage}
            />
              <h1 className={style.story__title}>
                Cybercrime: The Long Road to Recovery
              </h1>
              <div className={style.overlay__wrapper}>
              </div>
          </Link>
              <div className={style.overlay}></div>
        </div>
      </div>

    </section>
    <div className={style.flex__wrap}>
      <section className={style.intro}>
        <h1 className={style.intro__title}>Editorial experiences for HPE</h1>
        <p classname={style.intro__copy}>
          Design and development by{" "}
          <a className={style.home__link} href="https://www.alphanumeric.io">
            Eric Frommelt
          </a>
        </p>
        <p className={style.tech}><strike>Gatsby</strike> Next, CSS Modules, GSAP, visx</p>
        <div className={style.colorBar}></div>
      </section>
      <section className={style.footer}>
        
      </section>
    </div>
  </>
)

export default IndexPage