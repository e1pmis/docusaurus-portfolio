import React, { JSX } from 'react';
import styles from './contact.module.css';

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className={styles.contact}>
      <div className="section">
        <div className={styles.container}>
          <div className={styles.left}>
            <h2 className={styles.title}>Contact me</h2>
            <ul className={styles.list}>
              <li>Feel free to reach out with job offers or opportunities.</li>
              <li>What role are you looking for?</li>
              <li>How will you contribute to the new team?</li>
              <li>Are you open for remote work or relocation?</li>
            </ul>
          </div>

          <div className={styles.right}>
            <p className={styles.subtitle}>Looking forward to hearing from you!</p>
            <ul className={styles.details}>
              <li>
                <a className={styles.row} href="mailto:alibrahimabdullah@gmx.de" aria-label="Email">
                  <span className={styles.iconWrap}>
                    <img className={styles.icon} src="./icons/mail.svg" alt="" />
                    <img className={styles.iconHover} src="./icons/mail_hover.svg" alt="" />
                  </span>
                  <span>alibrahimabdullah@gmx.de</span>
                </a>
              </li>
              <li>
                <a
                  className={styles.row}
                  href="https://www.linkedin.com/in/abdullah-alibrahim-9a865a271"
                  target="_blank" rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <span className={styles.iconWrap}>
                    <img className={styles.icon} src="./icons/linkedin.svg" alt="" />
                    <img className={styles.iconHover} src="./icons/linkedin_hover.svg" alt="" />
                  </span>
                  <span>Profile Page</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
