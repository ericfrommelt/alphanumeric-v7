import Image from "next/image";
import styles from "./page.module.css";
import Masthead from "./components/masthead";
import Navigation from "./components/navigation";
import ProjectNav from "./components/projectNav";

export default function Home() {
  return (
    <main className={styles.main}>
      <Masthead />
      <Navigation />
      <ProjectNav />
    </main>
  );
}
