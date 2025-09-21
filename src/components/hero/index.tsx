import React, { JSX } from 'react';
import styles from './hero.module.css';

export default function Hero(): JSX.Element {
  return (
    <section id="hero" className={styles.hero}>

      <div className={styles.grid}>
        <div className={styles.textCol}>
          <div className={styles.kicker}>Hey there 👋🏼 , I am</div>
          <h1 className={styles.name}>Abdullah Alibrahim</h1>
          <div className={styles.role}>Security Operations Engineer</div>

          {/* mobile-only picture directly under the role */}
          <div className={styles.picMobile}>
            <img
              className={styles.photo}
              src="./img/Abdullah_Alibrahim_Photo.png"
              alt="Portrait"
            />
          </div>

          <p className={styles.blurb}>
            I design and deliver secure, scalable systems that take projects from concept to production-ready environments. I work across cloud platforms, virtualization, and infrastructure as code, automating workflows to reduce complexity and streamline delivery. This includes building CI/CD pipelines that balance speed with safety, enabling predictable and repeatable deployments. <br />
            <br />Backed by an M.Sc. in IT, strong analytical ability, and a commitment to continuous learning, I focus on creating architectures that are robust today and adaptable for tomorrow.
          </p>

          <a href="#contact" className={styles.cta}>Contact me</a>
        </div>

        {/* desktop picture on the right */}
        <div className={`${styles.picCol} ${styles.picDesktop}`}>
          <img
            className={styles.photo}
            src="./img/Abdullah_Alibrahim_Photo.png"
            alt="Portrait"
          />
        </div>
      </div>

    </section>
  );
}
