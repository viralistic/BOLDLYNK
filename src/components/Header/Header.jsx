import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="/assets/images/bold-lynk-logo.svg" alt="Logo" />
      </Link>
      <nav className={styles.nav}>
        <Link href="/" className={styles.nav__link}>
          Home
        </Link>
        <Link href="/" className={styles.nav__link}>
          About
        </Link>
        <Link href="/" className={styles.nav__link}>
          Join
        </Link>
      </nav>
      <button className={styles.hamburger}>
        <span className={styles.hamburger__line} />
        <span className={styles.hamburger__line} />
        <span className={styles.hamburger__line} />
      </button>
    </header>
  );
}
