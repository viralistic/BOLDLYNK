import styles from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <span className={styles.footer__title}>ABOUT</span>
        <ul className={styles.footer__list}>
          <li className={styles.footer__list__item}>
            <a href="/" className={styles.footer__list__item__link}>
              instagram
            </a>
          </li>
          <li className={styles.footer__list__item}>
            <a href="/" className={styles.footer__list__item__link}>
              instagram
            </a>
          </li>
          <li className={styles.footer__list__item}>
            <a href="/" className={styles.footer__list__item__link}>
              instagram
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footer__copyright__container}>
        <span>&#169; {new Date().getFullYear()} BOLDLYNK</span>
        <span className={styles.footer__copyright}>
          Webdesign by Marraliza kreijkes / Development by Justin Lung /
          Viralistic digital agency
        </span>
      </div>
    </footer>
  );
}
