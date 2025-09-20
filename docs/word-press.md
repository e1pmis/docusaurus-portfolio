# WordPress Docker Project

Minimal, production‑minded Docker Compose stack for **WordPress + MySQL** with persistent volumes and strict, env‑driven configuration.

---

## Table of Contents

- [WordPress Docker Project](#wordpress-docker-project)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Quick Start](#quick-start)
  - [Configuration](#configuration)
  - [Operations](#operations)
  - [License](#license)

---

## Features

* Official images only (`wordpress:6.6-apache`, `mysql:8.4`).
* **Env-first** setup; secrets stay out of source control.
* **Persistent** DB and `wp-content/` volumes.
* WordPress comes up after DB is ready (compose `depends_on`).

---

## Prerequisites

| Tool           | Version              | Notes                                                   |
| -------------- | -------------------- | ------------------------------------------------------- |
| Docker         | 20.x+                |                                                         |
| Docker Compose | v2 plugin or classic | Use `docker compose` (v2) or `docker-compose` (classic) |

---

## Quick Start

1. Clone and enter the repo:

```bash
git clone https://github.com/e1pmiS/WordPress-Docker-Project.git && cd WordPress-Docker-Project
```

2. Create `.env` from template and **edit** it (strong passwords!):

```bash
cp .env.example .env
```

3. Start (no build step needed):

```bash
docker-compose up -d
```

4. Open WordPress:

```bash
http://<host>:${HTTP_PORT:-8080}
```

---

## Configuration

Override them in a `.env` as in the [.env.example](.env.example) file:

| Key                      | Example                 | Purpose                                                            |
| ------------------------ | ----------------------- | ------------------------------------------------------------------ |
| `MYSQL_ROOT_PASSWORD`    | `ChangeThisRootPassword` | Root password used only for administration tasks. **Keep secret.** |
| `MYSQL_DATABASE`         | `wordpress`             | Database name WordPress will use.                                  |
| `MYSQL_USER`             | `wp_user`               | Application DB user (non‑root).                                    |
| `MYSQL_PASSWORD`         | `ChangeThisAppPassword`  | Password for `MYSQL_USER`.                                         |
| `HTTP_PORT`              | `8080`                  | Host port mapped to the container’s port 80.                       |
| `WORDPRESS_TABLE_PREFIX` | `wp_`                   | DB table prefix (change from default for isolation).               |
| `WORDPRESS_DEBUG`        | `0`                     | Enable verbose debugging (`1`) only in development.                |
| `DB_DATA_DIR`            | `./db_data`             | Host path persisting MySQL data.                                   |
| `WP_CONTENT_DIR`         | `./wp-content`          | Host path persisting themes/plugins/uploads.                       |
| `DB_CONTAINER_NAME`      | `wp-db`                 | Container name for the DB service.                                 |
| `WP_CONTAINER_NAME`      | `wordpress`             | Container name for WordPress.                                      |
| `COMPOSE_PROJECT_NAME`   | `wordpress`             | Compose project name to keep resource names stable.                |

> **Note**
> It’s recommended to set **non‑default, strong values** (especially passwords and prefixes) before any public deployment.

## Operations

* **Start:**

```bash
docker-compose up -d
```

* **Logs:**

```bash
docker-compose logs -f db wordpress
```

* **Stop:**

```bash
docker-compose down      # add -v to drop anonymous volumes
```

* **Update images:**

```bash
docker-compose pull && docker-compose up -d
```

---

## License

MIT — see [LICENSE](LICENSE) file for details.