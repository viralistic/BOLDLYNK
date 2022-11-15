import styles from "./Subscribe.module.css";

export default function Subscribe({ subscribeText }) {
  return (
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
          <label for="checkbox" className={styles.subscribe__label}>
            I AGREE WITH THE <a href="/">T & C</a>
          </label>
        </div>
      </form>
    </section>
  );
}
