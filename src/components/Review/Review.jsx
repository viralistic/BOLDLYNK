import styles from "./Review.module.css";
import Note from "../Note/Note";

export default function Review({ reviewTitle, reviewText }) {
  return (
    <>
      <section className={styles.review}>
        <Note note="What is Bold Lynk?" />
        <h2 className={styles.review__title}>{reviewTitle}</h2>
        <p className={styles.review__text}>{reviewText}</p>
      </section>
    </>
  );
}
