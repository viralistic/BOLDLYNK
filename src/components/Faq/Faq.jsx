import styles from "./Faq.module.css";

export default function Faq({ children }) {
  return <section className={styles.faq}>{children}</section>;
}
