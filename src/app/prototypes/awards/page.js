import Award from './Award';
import styles from './page.module.css';

export default function Awards() {
  return (
    <div className={styles.awards__wrapper}>
      <ul className={styles.awards__wall}>
        <li className={styles.award1}><Award copy="Best Adapted Screenplay" /></li>
        <li className={styles.award2}><Award copy="Best Cinematography" /></li>
        <li className={styles.jury__prize}><Award copy="Grand Jury Prize" /></li>
        <li className={styles.award4}><Award copy="Best Actor" /></li>
        <li className={styles.award5}><Award copy="Best Director" /></li>
      </ul>
      <ul className={styles.awards__wall}>
        <li className={styles.award6}><Award copy="Best Supporting Actress" /></li>
        <li className={styles.award7}><Award copy="Best Editing" /></li>
        <li className={styles.award8}><Award copy="Best Art Direction" /></li>
        <li className={styles.award9}><Award copy="Best Sound" /></li>
      </ul>
    </div>
  );
}