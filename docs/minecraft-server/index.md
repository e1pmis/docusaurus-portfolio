# Minecraft Server - Docker Setup

A lightweight, reproducible Docker + Docker Compose setup for running a **vanilla Minecraft Java Edition** server.  The aim is to keep the image tiny, configuration minimal, and world data fully persistent so you can spin the server up or tear it down at any time without losing progress.

> **Why another image?**  The container is assembled from `openjdk:21-jdk-slim` and the *official* Mojang server JAR — no opaque third‑party images, so you always know exactly what is inside.

---

## Table of Contents

- [Minecraft Server - Docker Setup](#minecraft-server---docker-setup)
  - [Table of Contents](#tableofcontents)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Quick Start](#quickstart)
  - [Usage](#usage)
    - [Configuration](#configuration)
    - [Persistent Data](#persistentdata)
    - [Upgrading / Modifying](#upgradingmodifying)
  - [Testing the Server without the Game Client](#testingtheserverwithoutthegameclient)

---

## Features

- **One‑command deployment** via `docker compose up --build`.
- EULA acceptance is exposed as an **environment variable** so the same image can run anywhere.
- World saves, configuration files and logs are mounted to the host for **persistence**.
- Clean separation between **immutable server code** (baked into the image) and **mutable data** (your world).
- Ready for **production hosting**: automatic restarts on crashes.

---

## Requirements

| Requirement          | Minimum version | Notes                                                                                        |
| -------------------- | --------------- | -------------------------------------------------------------------------------------------- |
| Docker               | 20.x CE / EE    | with BuildKit recommended                                                                    |
| Docker Compose       | v2.5+           | uses `docker compose` CLI                                                                    |
| Minecraft server JAR | 1.20+           | place in project root as \`minecraft\_server.jar    # Official server binary (not committed) |

---

## Quick Start

1. Clone or create the project folder
```bash
git clone https://github.com/e1pmiS/minecraft-server-.git minecraft-server && cd minecraft-server
```

2. Download the server JAR (replace hash with the real one)

```bash
curl -o minecraft_server.jar \ 
https://launcher.mojang.com/v1/objects/<hash>/server.jar
```

3. Create a .dockerignore so world data never enters the build context

```bash
echo "data" > .dockerignore
```

4. Build & Run
   
```bash
docker-compose build        # build the image
docker-compose up -d        # start detached
```



When you see `Done (xx.xx s)! For help, type "help"`, connect from your Minecraft client using the host’s IP (default port **25565**).

---

## Usage

### Configuration

| Variable | Default  | Purpose                              |
| -------- | -------- | ------------------------------------ |
| `EULA`   | `"true"` | Must be **true** to start the server |

Override them in \`\` or in a `.env` file:

```bash
# .env example
EULA=true
```

### Persistent Data

The Compose file mounts the host directory `./data` to `/minecraft/world` inside the container.  This keeps:

- World folders (`world`, `world_nether`, `world_the_end`)
- `server.properties`, `ops.json`, `whitelist.json`, etc.
- Logs.

### Upgrading / Modifying

1. **Stop** the server: `docker-compose down`.
2. **Replace** `minecraft_server.jar` with a newer version or add datapacks/mods.
3. **Restart**: `docker-compose up --build -d`.

The world data is untouched.

---

## Testing the Server without the Game Client

Install **mcstatus** once:

```bash
pip install --user mcstatus
```

Then query:

```bash
python3 -m mcstatus localhost:25565 status
```

A healthy server prints version, MOTD, player count and latency.

---