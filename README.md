# Docusaurus Portfolio

This repository hosts a **Docusaurus-based portfolio**.  
It is structured into multiple sections (Header, Hero, My Skills, My Project Highlights, Contact, and Footer). Each section is implemented as a React component in `src/components` and combined into a single layout in `src/pages/index.tsx`, while global configuration such as site metadata, navigation, and deployment settings is maintained in `docusaurus.config.ts`.  
With continuous integration and deployment workflows are managed in `.github/workflows`.

The goal of this project is to **build and deploy a static website** that serves as a personal portfolio.  
The static build provides fast performance, simple hosting via GitHub Pages, and a reliable deployment process that ensures consistent results across environments.


---


## Table of Contents
<!-- TOC -->
- [Docusaurus Portfolio](#docusaurus-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Quickstart](#quickstart)
    - [How to start](#how-to-start)
    - [Build Process](#build-process)
  - [Usage](#usage)
    - [1- Site configuration (`docusaurus.config.ts`)](#1--site-configuration-docusaurusconfigts)
    - [2- Sections and content](#2--sections-and-content)
    - [3- Styling](#3--styling)
    - [4- Assets and links](#4--assets-and-links)
  - [Deployment (GitHub Pages)](#deployment-github-pages)
  
<!-- /TOC -->

---

## Prerequisites
- Node.js ≥ 18
- npm or yarn

## Quickstart

### How to start

1- Clone the repository

```bash
git clone https://github.com/e1pmis/docusaurus-portfolio.git
```

2- Move into the project folder

```bash
cd docusaurus-portfolio
```

3- Install dependencies
```bash
npm install
```

4- Start the project 
```bash
npm run start
```

Preview locally at http://localhost:3000

### Build Process

Building generates an optimized static version of your site for fast, reliable deployment.

To build the project locally execute the following command from the root directory: 

```bash
npm run build
```

---

## Usage
Detailed configuration and how to modify relevant parts to achieve different results.

### 1- Site configuration (`docusaurus.config.ts`)
- **Base URLs for Pages**: set `url` to `https://<your-user>.github.io` and `baseUrl` to `/docusaurus-portfolio/` (or your repo name).
- **Organization/Project**: set `organizationName` and `projectName` to your GitHub user and repo.
- **Branding**: update `title`, `tagline`, and `favicon`.

### 2- Sections and content
- **Edit text and layout** inside section components in [`src/components`](src/components). Keep one component per folder with file name `index.tsx`. Use CSS Modules (`*.module.css`).
- **Add a new section**: create `src/components/<new-section>/index.tsx`, then import and place it in [`src/pages/index.tsx`](src/pages/index.tsx) to control order and layout.

### 3- Styling
- Use CSS Modules (e.g., `hero.module.css`) to keep styles scoped to the component.

### 4- Assets and links
- Place images in `static/` and reference them with `/img/...`. Respect `baseUrl` when deploying under a subpath.
- Prefer relative internal links so they work locally and on GitHub Pages.

---

## Deployment (GitHub Pages)

Deployment uses GitHub Actions on pushes to the default branch.

1. In GitHub: **Settings → Pages → Source = GitHub Actions**.
2. Confirm your workflow files in [`.github/workflows`](.github/workflows).
3. Ensure `url`, `baseUrl`, `organizationName`, and `projectName` are correct in [`docusaurus.config.ts`](#docusaurus.config.ts).
4. Push to the default branch. GitHub Pages publishes the latest commit.

