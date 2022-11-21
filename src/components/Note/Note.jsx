import styles from "./Note.module.css";
import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function Note({ note }) {
  useLayoutEffect(() => {
    gsap.fromTo(
      "#noteText",
      { opacity: 0 },
      { duration: 0.5, opacity: 1, stagger: 0.3, delay: 0.3 }
    );
  }, []);
  return (
    <span className={styles.note}>
      <img
        src="/assets/icons/box-icon.svg"
        alt="Box Icon"
        className={styles.note__image}
      />
      <p className={styles.note__text} id="noteText">
        {note}
      </p>
    </span>
  );
}
