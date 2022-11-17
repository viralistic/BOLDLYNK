import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src="/assets/images/bold-lynk-logo.svg" alt="Logo" />
      </a>
      <button className={styles.hamburger}>
        <span className={styles.hamburger__line} />
        <span className={styles.hamburger__line} />
        <span className={styles.hamburger__line} />
      </button>
    </header>
  );
}
