import styles from "./masthead.module.css";

export default function Masthead() {
  return (
    <header className={styles.masthead}>
      <h1 className={styles.mastheadName}>Eric Frommelt</h1>
      <p>Digital Design Engineer</p>
      <p>Los Angeles, California</p>
    </header>
  );
}