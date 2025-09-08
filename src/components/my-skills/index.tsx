import React, { JSX, useEffect, useRef, useState } from 'react';
import styles from './my-skills.module.css';

type Skill = { icon: string; label: string; bullets: string[] };

const skills: Skill[] = [
  { icon: '/icons/html5.svg', label: 'HTML', bullets: [
    'User-friendly navigation menus','Responsive web design','Contact forms and login pages','Transitions, animations, and hover effect',
  ]},
  { icon: '/icons/css3.svg', label: 'CSS', bullets: [
    'Layout grid and spacing system','Theming with CSS variables','Accessible states and focus','Reusable utility classes',
  ]},
  { icon: '/icons/docusaurus.svg', label: 'Static site generator', bullets: [
    'Docs/blog structure and routing','Versioned content','MDX components','Fast dev server and builds',
  ]},
  { icon: '/icons/python.svg', label: 'Python', bullets: [
    'APIs and CLIs','Data parsing and analysis','Automation scripts','Unit tests and packaging',
  ]},
  { icon: '/icons/shell.svg', label: 'Shell scripting', bullets: [
    'Provisioning and bootstrap','Log rotation and backups','Cron jobs','One-liners for ops',
  ]},
  { icon: '/icons/yaml.svg', label: 'Yaml', bullets: [
    'App configurations','CI pipelines','Declarative manifests','Reusable anchors',
  ]},
  { icon: '/icons/docker.svg', label: 'Container', bullets: [
    'Multi-stage Dockerfiles','Small, secure images','Compose stacks','Image scanning',
  ]},
  { icon: '/icons/githubactions.svg', label: 'CI/CD with GitHub Actions', bullets: [
    'Build/test matrix','Caching and artifacts','Release pipelines','Environment gates',
  ]},
  { icon: '/icons/security.svg', label: 'IT Security', bullets: [
    'Secrets management','Hardening and audits','SAST/DAST integration','Least privilege access',
  ]},
];

function Card({ icon, label, bullets }: Skill): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={styles.card}
      data-open={open ? 'true' : 'false'}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(v => !v)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen(v => !v)}
      role="button"
      tabIndex={0}
      aria-pressed={open}
    >
      <div className={`${styles.panel} ${styles.front}`}>
        <img className={styles.icon} src={icon} alt={label} />
        <div className={styles.label}>{label}</div>
      </div>
      <div className={`${styles.panel} ${styles.back}`}>
        <div className={styles.backInner}>
          <div className={styles.usedTitle}>How I used this skill</div>
          <ul className={styles.usedList}>
            {bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function MySkills(): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  // Track active page by nearest row; start at first page
  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;

    const rows = Array.from(root.querySelectorAll(`.${styles.row}`)) as HTMLElement[];

    const onScroll = () => {
      const sl = root.scrollLeft;
      let best = 0, d = Infinity;
      for (let i = 0; i < rows.length; i++) {
        const di = Math.abs(rows[i].offsetLeft - sl);
        if (di < d) { d = di; best = i; }
      }
      setPage(best);
    };

    root.scrollLeft = 0; // ensure start on first page
    onScroll();

    root.addEventListener('scroll', onScroll, { passive: true });
    return () => root.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToPage = (i:number) => {
    const root = contentRef.current;
    if (!root) return;
    const rows = root.querySelectorAll<HTMLElement>(`.${styles.row}`);
    const t = rows[i];
    if (t) root.scrollTo({ left: t.offsetLeft, behavior: 'smooth' });
  };

  return (
    <section id="my-skills" className={styles.section}>
      <div className="section">
        <div className={styles.wrap}>
          <header className={styles.headline}>
            <h2 className={styles.title}>My skills</h2>
          </header>

          <div ref={contentRef} className={styles.content}>  
            <div className={styles.desk}>
              {skills.map((s) => <Card key={s.label} {...s} />)}
              </div>  
            <div className={styles.row}>  
            {skills.slice(0, 3).map((s) => <Card key={s.label} {...s} />)}
            </div>
            <div className={styles.row}>
              {skills.slice(3, 6).map((s) => <Card key={s.label} {...s} />)}
            </div>
            <div className={styles.row}>
              {skills.slice(6, 9).map((s) => <Card key={s.label} {...s} />)}
            </div>  
            </div>  

          <div className={styles.dots}>
            {[0,1,2].map(i => (
              <button
                key={i}
                className={styles.dot}
                aria-current={page === i ? 'true' : undefined}
                aria-label={`Page ${i+1}`}
                onClick={() => scrollToPage(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
