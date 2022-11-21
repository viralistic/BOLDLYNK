import styles from "./Review.module.css";
import Note from "../Note/Note";
import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function Review({ reviewTitle, reviewText }) {
  useLayoutEffect(() => {
    gsap.fromTo(
      "#reviewTitle",
      { opacity: 0 },
      { duration: 0.5, opacity: 1, stagger: 0.3, delay: 0.8 }
    );
    gsap.fromTo(
      "#reviewDescription",
      { opacity: 0 },
      { duration: 0.5, opacity: 1, stagger: 0.3, delay: 1 }
    );
  }, []);
  return (
    <>
      <section className={styles.review}>
        <div id="noteContainer">
          <Note note="What is Bold Lynk?" />
        </div>
        <h2 id="reviewTitle" className={styles.review__title}>
          {reviewTitle}
        </h2>
        <p className={styles.review__text} id="reviewDescription">
          {reviewText}
        </p>
      </section>
    </>
  );
}
