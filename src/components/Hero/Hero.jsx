import styles from "./Hero.module.css";
import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function Hero({ heroTitle, heroDescription }) {
  useLayoutEffect(() => {
    gsap.fromTo(
      "#homeTitle",
      { opacity: 0 },
      { duration: 0.5, opacity: 1, stagger: 0.3, delay: 0.3 }
    );
    gsap.fromTo(
      "#homeDescription",
      {
        opacity: 0,
      },
      { duration: 0.5, opacity: 0.5, stagger: 0.3, delay: 0.6 }
    );
  }, []);
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.hero__title} id="homeTitle">
          {heroTitle}
        </h1>
        <p className={styles.hero__description} id="homeDescription">
          {heroDescription}
        </p>
        <div className={styles.hero__waves}></div>
      </section>
    </>
  );
}
