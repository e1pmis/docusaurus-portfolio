import React, { JSX } from 'react';
import styles from './contact.module.css';

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className={styles.contact}>
      <div className="section">
      <div className={styles.container}>
        {/* Left side */}
        <div className={styles.left}>
          <h2 className={styles.title}>Contact me</h2>
          <ul className={styles.list}>
            <li>Feel free to reach out with job offers or opportunities.</li>
            <li>What role are you looking for?</li>
            <li>How will you contribute to the new team?</li>
            <li>Are you open for remote work or relocation?</li>
          </ul>
        </div>

        {/* Right side */}
        <div className={styles.right}>
          <p className={styles.subtitle}>Looking forward to hearing from you!</p>
          <ul className={styles.details}>
            <li>
              <img src="/icons/mail.svg" alt="Email" />
              <a href="mailto:alibrahimabdullah@gmx.de">alibrahimabdullah@gmx.de</a>
            </li>
            <li>
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
              <a href="https://www.linkedin.com/in/abdullah-alibrahim-9a865a271">Profile Page</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
