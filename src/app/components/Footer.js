import Link from "next/link"
import Cta from "./Cta"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}> 
      <ul className={styles.links__list}>
        <li>
          <Link href="https://github.com/ericfrommelt" passHref={true}><Cta txt="Github" /></Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/eric.frommelt/" passHref={true}><Cta txt="Instagram" /></Link>
        </li>
      </ul>
    </footer>
  );
}