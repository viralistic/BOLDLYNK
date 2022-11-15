import styles from "./Hero.module.css";

export default function Hero({ heroTitle }) {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>{heroTitle}</h1>
      </section>
    </>
  );
}
