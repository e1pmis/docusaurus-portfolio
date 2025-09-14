import React, { JSX, useMemo, useState } from 'react';
import styles from './project-highlights.module.css';

type Tag = { icon: string; label: string };
type Project = {
  id: string;
  name: string;
  image: string;
  tags: Tag[];
  description: string;
  docUrl?: string;
  githubUrl?: string;
};

const PROJECTS: Project[] = [
  {
    id: 'conduit',
    name: 'Conduit Container',
    image: './img/projects/conduit.png',
    tags: [
      { icon: './icons/yaml_b.svg', label: 'Yaml' },
      { icon: './icons/shell_b.svg', label: 'Shell' },
      { icon: './icons/docker_b.svg', label: 'Docker' },
      { icon: './icons/githubactions_b.svg', label: 'CI/CD' },
    ],
    description:
      'Conduit Container is my take on deploying full-stack applications in a secure and repeatable way. Both frontend and backend run as Docker services, while a single CI/CD pipeline drives builds, releases, and deployments from start to finish. The outcome is a workflow I can rely on less manual overhead, fewer mistakes, and faster delivery. This project represents how I approach DevSecOps: combining automation with stability to make deployments dependable by default.',
    docUrl: 'https://github.com/e1pmiS/conduit-container/blob/main/README.md',
    githubUrl: 'https://github.com/e1pmiS/conduit-container',
  },
  {
    id: 'juice',
    name: 'OWASP Juice Shop',
    image: './img/projects/juiceshop.png',
    tags: [
      { icon: './icons/security.svg', label: 'IT Security' },
      { icon: './icons/shell_b.svg', label: 'Shell' },
      { icon: './icons/python.svg', label: 'Python' },
    ],
    description:
      'Juice Shop Meister is a security-focused project where I documented and demonstrated vulnerabilities in OWASP Juice Shop. I combined technical write-ups with video walkthroughs to show not just how exploits work, but why they matter. Each exercise strengthened my ability to think like both attacker and defender while communicating risk clearly. The project reflects my approach to learning security hands-on and turning complex exploits into accessible knowledge.',
    docUrl: 'https://github.com/e1pmiS/Juice_Shop_Meister/blob/main/README.md',
    githubUrl: 'https://github.com/e1pmiS/Juice_Shop_Meister',
  },
  {
    id: 'minecraft',
    name: 'Minecraft server',
    image: './img/projects/minecraft.png',
    tags: [
      { icon: './icons/docker_b.svg', label: 'Docker' },
      { icon: './icons/yaml_b.svg', label: 'Yaml' },
      { icon: './icons/shell_b.svg', label: 'Shell' },
      { icon: './icons/security.svg', label: 'IT Security' },
    ],
    description:
      'The Project provides a lightweight Docker Compose setup for hosting a game server. World data, configuration, and logs are kept persistent, allowing the server to be restarted or updated without data loss. Core settings are controlled through environment variables, and upgrades are handled by replacing the server JAR. It reflects my focus on building practical, maintainable solutions with clean containerization practices.',
    docUrl: 'https://github.com/e1pmiS/minecraft-server/blob/review/README.md',
    githubUrl: 'https://github.com/e1pmiS/minecraft-server',
  },
  {
    id: 'wordpress',
    name: 'WordPress hosting',
    image: './img/projects/wordpress.png',
    tags: [
      { icon: './icons/docker_b.svg', label: 'Docker' },
      { icon: './icons/yaml_b.svg', label: 'Yaml' },
      { icon: './icons/shell_b.svg', label: 'Shell' },
      { icon: './icons/security.svg', label: 'IT Security' },
    ],
    description:
      `WordPress hosting environment built with Docker Compose, paired with a MySQL backend.
        Volumes ensure site content and database data remain intact across container restarts.
        Configuration is managed through a .env file, keeping the setup clean and adaptable.
        For me, the project was about turning a traditionally heavy CMS into something lightweight, reliable, and easy to run.`,
    docUrl: 'https://github.com/e1pmiS/WordPress-Docker-Project/blob/main/README.md',
    githubUrl: 'https://github.com/e1pmiS/WordPress-Docker-Project',
  },
  {
    id: 'trucks',
    name: 'Truck Signs API',
    image: './img/projects/trucksigns.png',
    tags: [
      { icon: './icons/docker_b.svg', label: 'Docker' },
      { icon: './icons/yaml_b.svg', label: 'Yaml' },
      { icon: './icons/shell_b.svg', label: 'Shell' },
      { icon: './icons/python.svg', label: 'Python' },
    ],
    description:
      `Django-based e-commerce backend containerized with Docker and PostgreSQL.
      Services communicate over a dedicated Docker network, with environment variables managed through .env files.
      Includes superuser setup and product management via Django’s admin, making the system usable out of the box.
      For me, the project highlighted how clean containerization and secure configs can make backend deployments both practical and dependable.`,
    docUrl: 'https://github.com/e1pmiS/truck_signs_api/blob/main/README.md',
    githubUrl: 'https://github.com/e1pmiS/truck_signs_api',
  },
  {
    id: 'babytools',
    name: 'Baby Tools',
    image: './img/projects/babytools.png',
    tags: [
      { icon: './icons/docker_b.svg', label: 'Docker' },
      { icon: './icons/shell_b.svg', label: 'Shell' },
      { icon: './icons/python.svg', label: 'Python' },
    ],
    description:
      `Baby Tools started as an experiment in packaging a small Django shop into a containerized service.
      Instead of relying on a default image, I wrote a custom Dockerfile to shape the Python environment and handle dependencies my way.
      The result was a setup that I could launch, manage, and update without breaking consistency.
      It gave me a deeper feel for how containerization turns even a simple web app into something repeatable and production-ready.`,
    docUrl: 'https://github.com/e1pmiS/baby-tools-shop/blob/main/README.md',
    githubUrl: 'https://github.com/e1pmiS/baby-tools-shop',
  },
];

/** One component. Same class names. Variant via data-attribute. */
function ProjectCard({
  project,
  variant,
}: {
  project: Project;
  variant: 'desktop' | 'mobile';
}) {
  if (variant === 'desktop') {
    return (
      <article className={styles.card} data-variant="desktop">
        <div className={styles.cardBody}>
          <div className={styles.leftCol}>
            <h3 className={styles.cardTitle}>{project.name}</h3>
            <div className={styles.imageWrap}>
              <img src={project.image} alt={project.name} className={styles.image} />
            </div>
          </div>
          <div className={styles.detailCol}>
            <div className={styles.tags}>
              {project.tags.map((t) => (
                <span key={t.label} className={styles.tag}>
                  <img src={t.icon} alt="" className={styles.tagIcon} />
                  <span className={styles.tagText}>{t.label}</span>
                </span>
              ))}
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.buttons}>
              {project.docUrl && (
                <a className={styles.btnPrimary} href={project.docUrl} target="_blank" rel="noreferrer">
                  Documentation
                </a>
              )}
              {project.githubUrl && (
                <a className={styles.btnSecondary} href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // mobile
  return (
    <article className={styles.card} data-variant="mobile">
      {/* keep semantic heading but hide visually */}
      <h3 className={styles.visuallyHidden}>{project.name}</h3>
      <div className={styles.cardBody}>
        {/* tags -> image -> text -> buttons */}
        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t.label} className={styles.tag}>
              <img src={t.icon} alt="" className={styles.tagIcon} />
              <span className={styles.tagText}>{t.label}</span>
            </span>
          ))}
        </div>
        <div className={styles.imageWrap}>
          <img src={project.image} alt={project.name} className={styles.image} />
        </div>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.buttons}>
          {project.docUrl && (
            <a className={styles.btnPrimary} href={project.docUrl} target="_blank" rel="noreferrer">
              Documentation
            </a>
          )}
          {project.githubUrl && (
            <a className={styles.btnSecondary} href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectHighlights(): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const [activeId, setActiveId] = useState(PROJECTS[0]?.id);
  const active = useMemo(
    () => PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0],
    [activeId]
  );

  const desktopVisible = useMemo(
    () => (expanded ? PROJECTS : PROJECTS.slice(0, 5)),
    [expanded]
  );
  const mobileVisible = useMemo(
    () => (expanded ? PROJECTS : PROJECTS.slice(0, 3)),
    [expanded]
  );

  const listId = 'project-list';

  return (
    <section id="project-highlights" className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>My project highlights</h2>

        {/* Desktop layout */}
        <div className={styles.desktopOnly}>
          <div className={styles.content}>
            <aside className={styles.listCol}>
              <div id={listId} className={styles.list}>
                {desktopVisible.map((p) => {
                  const idx = PROJECTS.indexOf(p) + 1;
                  const isActive = p.id === activeId;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                      onClick={() => setActiveId(p.id)}
                      aria-pressed={isActive}
                    >
                      <span className={`${styles.num} ${isActive ? styles.numActive : ''}`}>{idx}.</span>
                      <span className={styles.itemLabel}>{p.name}</span>
                    </button>
                  );
                })}
              </div>

              {PROJECTS.length > 5 && (
                <button
                  type="button"
                  className={styles.seeMore}
                  onClick={() => setExpanded((v) => !v)}
                  aria-expanded={expanded}
                  aria-controls={listId}
                >
                  <span className={styles.arrowBox} aria-hidden="true">
                    <img src="./icons/arrow_d.svg" alt="" className={styles.arrowImg} />
                  </span>
                  <span>{expanded ? 'See fewer projects' : 'See more projects'}</span>
                </button>
              )}
            </aside>

            <ProjectCard project={active} variant="desktop" />
          </div>
        </div>

        {/* Mobile layout */}
        <div className={styles.mobileOnly}>
          <div className={styles.content}>
            <div className={styles.mobileStack}>
              {mobileVisible.map((p, i) => {
                const idx = PROJECTS.indexOf(p) + 1;
                return (
                  <div key={p.id} className={styles.mobileGroup}>
                    <div className={styles.mobileHeader}>
                      <span className={styles.mobileNum}>{idx}.</span>
                      <span className={styles.itemLabel}>{p.name}</span>
                    </div>
                    <ProjectCard project={p} variant="mobile" />
                  </div>
                );
              })}

              {PROJECTS.length > 3 && (
                <div className={styles.mobileCta}>
                  <p className={styles.mobileCtaText}>Explore more projects</p>
                  <button
                    type="button"
                    className={styles.seeMore}
                    onClick={() => setExpanded((v) => !v)}
                    aria-expanded={expanded}
                  >
                    <span>{expanded ? 'See fewer projects' : 'See more projects'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
