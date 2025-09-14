import React, { JSX } from 'react';
import styles from './hero.module.css';

export default function Hero(): JSX.Element {
  return (
    <section id="hero" className={styles.hero}>

      <div className={styles.grid}>
        <div className={styles.textCol}>
          <div className={styles.kicker}>Hey there, 👋 I am</div>
          <h1 className={styles.name}>Abdullah Alibrahim</h1>
          <div className={styles.role}>Security operations Engineer</div>

          {/* mobile-only picture directly under the role */}
          <div className={styles.picMobile}>
            <img
              className={styles.photo}
              src="./img/Abdullah_Alibrahim_Photo.png"
              alt="Portrait"
            />
          </div>

          <p className={styles.blurb}>
            I build secure, scalable systems using containers, orchestration, and infrastructure as code. My focus is smooth, reliable deployments and CI/CD pipelines that balance speed with safety. <br /> 
            <br />With an M.Sc. in IT, I combine technical depth, strong analytical ability, and continuous learning to deliver secure and robust system architectures.
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
