import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <img src="/assets/images/bold-lynk-logo.svg" alt="Logo" />
        </a>
      </Link>
      <nav className={styles.nav}>
        <Link href="/" className={styles.nav__link}>
          <a>Home</a>
        </Link>
        <Link href="/" className={styles.nav__link}>
          <a>About</a>
        </Link>
        <Link href="/" className={styles.nav__link}>
          <a>Join</a>
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
