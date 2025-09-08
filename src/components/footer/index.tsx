import React, { JSX } from 'react';
import styles from './footer.module.css';

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="#hero" className={styles.backToTop} aria-label="Back to top">
          <img
            src="/icons/arrow-default.svg"
            alt=""
            className={styles.icon}
          />
          <img
            src="/icons/arrow-hover.svg"
            alt=""
            className={`${styles.icon} ${styles.iconHover}`}
          />
        </a>

        <p className={styles.copy}>© Abdullah Alibrahim {year}</p>
        <a href="/legal" className={styles.legal}>Legal notice</a>
      </div>
    </footer>
  );
}
