import React, { JSX, useMemo, useState } from 'react';
import styles from './project-highlights.module.css';

type Tag = { icon: string; label: string };
type Project = {
  id: string;
  name: string;
  image: string;          // /static/img/...
  tags: Tag[];            // /static/icons/...
  description: string;
  docUrl?: string;        // absolute URL
  githubUrl?: string;     // absolute URL
};

const PROJECTS: Project[] = [
  {
    id: 'conduit',
    name: 'Conduit container',
    image: '/img/projects/conduit.png',
    tags: [
      { icon: '/icons/yaml_b.svg', label: 'Yaml' },
      { icon: '/icons/shell_b.svg', label: 'Shell' },
      { icon: '/icons/docker_b.svg', label: 'Container' },
      { icon: '/icons/githubactions.svg', label: 'CI/CD' },
      // { icon: '/icons/security.svg', label: 'IT Security' },
    ],
    description:
      'Containerized RealWorld “Conduit”. Multi-stage Dockerfiles, image hardening, and CI pipelines for build, test, and release.',
    docUrl: 'https://example.com/conduit/docs',
    githubUrl: 'https://github.com/e1pmiS/conduit-container',
  },
  {
    id: 'juice',
    name: 'Juice Shop',
    image: '/img/projects/juiceshop.png',
    tags: [
      { icon: '/icons/security.svg', label: 'IT Security' },
      { icon: '/icons/shell_b.svg', label: 'Shell' },
    ],
    description:
      'OWASP Juice Shop automation. Reproducible deployments, scripted challenges, and security testing exercises.',
    docUrl: 'https://example.com/juice/docs',
    githubUrl: 'https://github.com/e1pmiS/Juice_Shop_Meister',
  },
  {
    id: 'minecraft',
    name: 'Minecraft server',
    image: '/img/projects/minecraft.png',
    tags: [
      { icon: '/icons/docker.svg', label: 'Container' },
      { icon: '/icons/yaml_b.svg', label: 'Yaml' },
      { icon: '/icons/shell_b.svg', label: 'Shell' },
      { icon: '/icons/security.svg', label: 'IT Security' },
    ],
    description:
      'Automated Minecraft server with backups,Automated Minecraft server with backups,Automated Minecraft server with backups,Automated Minecraft server with backups, mods, and monitoring. Compose stack, health checks, and zero-downtime updates.',
    docUrl: 'https://example.com/minecraft/docs',
    githubUrl: 'https://github.com/yourname/minecraft-server',
  },
  {
    id: 'WrodPress hosting',
    name: 'WrodPress hosting',
    image: '/img/projects/wordpress.png',
    tags: [
      { icon: '/icons/docker_b.svg', label: 'Container' },
      { icon: '/icons/yaml_b.svg', label: 'Yaml' },
      { icon: '/icons/shell_b.svg', label: 'Shell' },
      { icon: '/icons/security.svg', label: 'IT Security' },
    ],
    description:
      'Automated Minecraft server with backups, mods, and monitoring. Compose stack, health checks, and zero-downtime updates.',
    docUrl: 'https://example.com/minecraft/docs',
    githubUrl: 'https://github.com/e1pmiS/WordPress-Docker-Project',
  },
  {
    id: 'Truck Signs API',
    name: 'Truck Signs API',
    image: '/img/projects/trucksigns.png',
    tags: [
      { icon: '/icons/docker_b.svg', label: 'Container' },
      { icon: '/icons/yaml_b.svg', label: 'Yaml' },
      { icon: '/icons/shell_b.svg', label: 'Shell' },
      { icon: '/icons/security.svg', label: 'IT Security' },
    ],
    description:
      'Automated Minecraft server with backups, mods, and monitoring. Compose stack, health checks, and zero-downtime updates.',
    docUrl: 'https://example.com/minecraft/docs',
    githubUrl: 'https://github.com/e1pmiS/truck_signs_api',
  },
  {
    id: 'Baby Tools',
    name: 'Baby Tools',
    image: '/img/projects/babytools.png',
    tags: [
      { icon: '/icons/docker.svg', label: 'Container' },
      { icon: '/icons/shell_b.svg', label: 'Shell' },
      { icon: '/icons/security.svg', label: 'IT Security' },
    ],
    description:
      'Automated Minecraft server with backups, mods, and monitoring. Compose stack, health checks, and zero-downtime updates.',
    docUrl: 'https://github.com/e1pmiS/baby-tools-shop/blob/main/README.md',
    githubUrl: 'https://github.com/e1pmiS/baby-tools-shop',
  }
];

export default function ProjectHighlights(): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const [activeId, setActiveId] = useState(PROJECTS[0].id);

  const visible = useMemo(
    () => (expanded ? PROJECTS : PROJECTS.slice(0, 3)),
    [expanded]
  );
  const active = useMemo(
    () => PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0],
    [activeId]
  );

  return (
    <section id="project-highlights" className={styles.section}>
      
        <div className={styles.wrap}>
          <h2 className={styles.title}>My project highlights</h2>

          <div className={styles.content}>
            {/* LEFT: numbered list */}
            <aside className={styles.listCol}>
              <div className={styles.list}>
                {visible.map((p) => {
                const idx = PROJECTS.indexOf(p) + 1;          
                const isActive = p.id === activeId;
                return (
                  <button
                    key={p.id}
                    type="button"
                    className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                    onClick={() => setActiveId(p.id)}
                  >
                    <span className={`${styles.num} ${isActive ? styles.numActive : ''}`}>
                      {idx}.
                    </span>
                    <span className={styles.itemLabel}>{p.name}</span>
                  </button>
                );
              })}
              </div>

              {PROJECTS.length > 3 && (
                <button
                  type="button"
                  className={styles.seeMore}
                  onClick={() => setExpanded((v) => !v)}
                >
                  <span className={styles.arrowBox}>
                    <span className={styles.arrow} aria-hidden="true">↗</span>
                  </span>
                  <span>{expanded ? 'see fewer projects' : 'see more projects'}</span>
                </button>
              )}
            </aside>

              {/* RIGHT: active card */}
            <article className={styles.card}>
              <div className={styles.cardBody}>
                {/* left: title + image */}
                <div className={styles.leftCol}>
                  <h3 className={styles.cardTitle}>{active.name}</h3>
                  <div className={styles.imageWrap}>
                    <img src={active.image} alt={active.name} className={styles.image} />
                  </div>
                </div>

                {/* right: tags + description + buttons (aligned) */}
                <div className={styles.detailCol}>
                  <div className={styles.tags}>
                    {active.tags.map((t) => (
                      <span key={t.label} className={styles.tag}>
                        <img src={t.icon} alt="" className={styles.tagIcon} />
                        <span className={styles.tagText}>{t.label}</span>
                      </span>
                    ))}
                  </div>

                  <p className={styles.description}>{active.description}</p>

                  <div className={styles.buttons}>
                    {active.docUrl && (
                      <a className={styles.btnPrimary} href={active.docUrl} target="_blank" rel="noopener noreferrer">
                        Documentation
                      </a>
                    )}
                    {active.githubUrl && (
                      <a className={styles.btnSecondary} href={active.githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
    
    </section>
  );
}
