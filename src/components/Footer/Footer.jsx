import styles from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__nav}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">FAQ</a>
        <a href="/">Policy</a>
        <a href="/">Join</a>
      </nav>
      <span className={styles.seperator}></span>
      <ul className={styles.footer__list}>
        <li className={styles.footer__list__item}>
          <a href="/">
            <img src="/assets/icons/mail-icon.svg" alt="Mail Icon" />
          </a>
        </li>
        <li className={styles.footer__list__item}>
          <a href="/">
            <img src="/assets/icons/instagram-icon.svg" alt="Instragram Icon" />
          </a>
        </li>
        <li className={styles.footer__list__item}>
          <a href="/">
            <img src="/assets/icons/telegram-icon.svg" alt="Telegram Icon" />
          </a>
        </li>
        <li className={styles.footer__list__item}>
          <a href="/">
            <img src="/assets/icons/discord-icon.svg" alt="Discord Icon" />
          </a>
        </li>
      </ul>
      <span className={styles.footer__date}>
        &#169; {new Date().getFullYear()} BOLDLYNK - ALL RIGHTS RESERVED
      </span>
      <span className={styles.footer__credits}>
        Webdesign by Marraliza kreijkes / Development by Justin Lung /
        Viralistic digital agency
      </span>
    </footer>
  );
}
