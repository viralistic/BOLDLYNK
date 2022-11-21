import Link from "next/link";
import styles from "../components/404/FourOhFour.module.css";

export default function FourOhFour() {
  return (
    <>
      <section className={styles.error}>
        <h1 className={styles.error__heading}>404</h1>
        <p className={styles.error__description}>
          The page you are looking for was moved, removed, renamed or might
          never exited
        </p>
        <Link href="/" className={styles.error__link}>
          Go to Home
        </Link>
      </section>
    </>
  );
}
