import styles from "../Footer/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <nav className={styles.footer__nav}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">FAQ</Link>
          <Link href="/">Policy</Link>
          <Link href="/">Join</Link>
        </nav>
        <span className={styles.seperator__mobile}></span>
        <ul className={styles.footer__list}>
          <li className={styles.footer__list__item}>
            <a href="#">
              <img src="/assets/icons/mail-icon.svg" alt="Mail Icon" />
            </a>
          </li>
          <li className={styles.footer__list__item}>
            <a
              href="www.instagram.com/boldlynk"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/icons/instagram-icon.svg"
                alt="Instragram Icon"
              />
            </a>
          </li>
          <li className={styles.footer__list__item}>
            <a href="#">
              <img src="/assets/icons/telegram-icon.svg" alt="Telegram Icon" />
            </a>
          </li>
          <li className={styles.footer__list__item}>
            <a
              href="https://discord.gg/f2yqRD9FW5"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/icons/discord-icon.svg" alt="Discord Icon" />
            </a>
          </li>
        </ul>
      </div>
      <span className={styles.seperator__desktop}></span>
      <div className={styles.footer__wrapper}>
        <span className={styles.footer__date}>
          &#169; {new Date().getFullYear()} BOLDLYNK - ALL RIGHTS RESERVED
        </span>
        <span className={styles.footer__credits}>
          Webdesign by Marraliza kreijkes / Development by{" "}
          <a href="https://justinlung.com/" target="_blank" rel="noreferrer">
            Justin Lung
          </a>{" "}
          /{" "}
          <a href="https://vrls.tc/" target="_blank" rel="noreferrer">
            Viralistic digital agency
          </a>
        </span>
      </div>
    </footer>
  );
}
