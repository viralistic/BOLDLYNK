import styles from "./Hero.module.css";

export default function Hero({ heroTitle, heroDescription }) {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>{heroTitle}</h1>
        <p className={styles.hero__description}>{heroDescription}</p>
        {/* <div className={styles.hero__waves}></div> */}
      </section>
    </>
  );
}
