import styles from "./Subscribe.module.css";
import Link from "next/link";

export default function Subscribe({ subscribeText }) {
  return (
    <>
      <section className={styles.subscribe}>
        <h2 className={styles.subscribe__heading}>{subscribeText}</h2>
        <form className={styles.subscribe__form}>
          <input
            type="email"
            className={styles.subscribe__mail}
            placeholder="your@email.com"
          />
          <input
            type="submit"
            value="NOTIFY ME"
            className={styles.subscribe__submit}
          />
          <div className={styles.subscribe__tacbox__container}>
            <input
              id="checkbox"
              type="checkbox"
              className={styles.subscribe__tacbox}
            />
            <label htmlFor="checkbox" className={styles.subscribe__label}>
              I AGREE WITH THE <Link href="/">T & C</Link>
            </label>
          </div>
        </form>
      </section>
      <div className={styles.background}></div>
    </>
  );
}
