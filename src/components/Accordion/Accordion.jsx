import styles from "./Accordion.module.css";

export default function Accordion({ accordionTitle, accordionDescription }) {
  return (
    <>
      <details className={styles.details}>
        <summary className={styles.summary}>{accordionTitle}</summary>
        <p className={styles.description}>{accordionDescription}</p>
      </details>
      <img
        src="/assets/images/accordion-seperator.svg"
        alt="seperator"
        className={styles.seperator}
      />
    </>
  );
}
