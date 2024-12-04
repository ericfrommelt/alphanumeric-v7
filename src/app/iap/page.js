import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";
import Masthead from "../components/masthead";

export default function Page() {
  return (
    <>
      <Head>
        <title>Sports Mode</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <div className={styles.wrapper}>
        <article>
          <h4 className={styles.title}>Directv In-App Purchase</h4>
          <p className={styles.subhead}>The easiest way for customers to sign up for Directv</p>
          <div className={styles.slide}>
            <figure className={styles.img__slide__wrapper}>
              <video src="/img/dtv/iap/ChannelComparison.mp4" loop muted autoPlay></video>
            </figure>
          </div>
          <figcaption><small>Prototype&mdash;Compare packages</small></figcaption>
          <figure className={styles.first}>
            <Image
              src="/img/dtv/iap/UserJourney.png"
              width={1920}
              height={1080}
              alt="User Journey"
              />
          </figure>
          <div className={styles.twoColumn}>
            <div className={styles.column}>
              <h3 className={styles.blockTitle}>User Needs</h3>
              <ul>
                <li>Affirmation that a subscription is required to use the service</li>
                <li>Affirmation that they can sign up for a subscription inside the app</li>
                <li>I need a package that serves my needs and budget</li>
                <li>I need the sign-up process to be quick and straight forward</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h3 className={styles.blockTitle}>Design Goals</h3>
              <h4 className={styles.item__title}>Simple sign up</h4>
              <p>New users should understand that an active subscription is required to use the service and presented with the option to select their package and sign up.</p>
              <h4 className={styles.item__title}>Minimal input</h4>
              <p>Minimize 10-ft text entry and reading time.</p>
              <h4 className={styles.item__title}>Elegant flow</h4>
              <p>Create a wizard like experience that can be completed in four screens or less.</p>
            </div>
          </div>
          <div className={styles.slide}>
            <figure className={styles.img__slide__wrapper}>
              <Image
                src="/img/dtv/iap/LandingPage.png"
                width={1920}
                height={1080}
                alt="Landing page"
                />
            </figure>
          </div>
          <div className={styles.slide}>
            <figure className={styles.img__slide__wrapper}>
              <Image
                src="/img/dtv/iap/ChooseYourPackage.png"
                width={1920}
                height={1080}
                alt="Choose Your Package"
                />
            </figure>
          </div>
          <div className={styles.slide}>
            <figure className={styles.img__slide__wrapper}>
              <Image
                src="/img/dtv/iap/ComparePackages.png"
                width={1920}
                height={1080}
                alt="Compare packages"
                />
            </figure>
          </div>
          
          <div className={styles.slide}>
            <figure className={styles.img__slide__wrapper}>
              <Image
                src="/img/dtv/iap/CheckInfo.png"
                width={1920}
                height={1080}
                alt="Check info"
                />
            </figure>
          </div>
          <div className={styles.slide}>
            <figure className={styles.img__slide__wrapper}>
              <Image
                src="/img/dtv/iap/CreatePassword.png"
                width={1920}
                height={1080}
                alt="Create password"
                />
            </figure>
          </div>
          <div className={styles.slide}>
            <figure className={styles.img__slide__wrapper}>
              <Image
                src="/img/dtv/iap/Confirmation.png"
                width={1920}
                height={1080}
                alt="Confirmation"
                />
            </figure>
          </div>
        </article>
      </div>
    </>
  )
}