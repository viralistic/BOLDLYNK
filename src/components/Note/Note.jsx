import styles from "./Note.module.css";

export default function Note({ note }) {
  return (
    <span className={styles.note}>
      <img
        src="/assets/icons/box-icon.svg"
        alt="Box Icon"
        className={styles.note__image}
      />
      {note}
    </span>
  );
}
