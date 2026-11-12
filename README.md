# Portfolio by Tom Lamb

My portfolio website, live at [tom-lamb.com](https://tom-lamb.com/): my experience, projects, skills and how to contact me.

Built with [Next.js](https://nextjs.org/) (App Router), Tailwind CSS v4 and react-intl.

## Requirements

### NodeJS
You must use nvm to install NodeJS (version in `.nvmrc`).
To install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Pnpm
Pnpm is the node package manager used on this project.
To install pnpm, please run

```bash
$ npm install -g pnpm
```

## Installation

### Clone project

```bash
$ git clone https://github.com/Lambtsa/portfolio.git
```

### Install dependencies

```bash
$ pnpm install
```

## Getting Started

```bash
pnpm dev
```

Open [http://localhost:8080](http://localhost:8080).

### Environment variables

| Name | Required | What it does |
|------|----------|--------------|
| `GTAG` | no | Google Analytics id, read when pages are served. Without it, no analytics script is loaded. |

## Project structure

```
src/
  app/          Routes (App Router): layout, home page, 404
  components/   One folder per section or UI piece
  screens/      Page bodies, composed from components
  assets/       Logos and images, imported as static images
  locales/      react-intl messages
  utils/        Metadata, routes, base URL
```

The theme (colours, widths, intro animations) lives in `src/app/globals.css`.

## Tests and lint

```bash
pnpm test       # Vitest
pnpm lint       # ESLint
pnpm lint:tsc   # Type check
```

A pre-commit hook runs the linter and the type check; commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/) (checked by commitlint).

## Releases

Versions and the changelog are managed by [release-please](https://github.com/googleapis/release-please) (`release-please-config.json`, `.release-please-manifest.json`):

1. Merge pull requests into `main` with conventional commit messages (with squash merging, the **PR title** is the commit message): `feat: …` bumps the minor version, `fix: …` the patch, `feat!: …` or a `BREAKING CHANGE:` footer the major.
2. After each push to `main`, the **Release Please** workflow opens or updates a `chore(main): release x.y.z` pull request with the new version in `package.json` and the notes in `CHANGELOG.md`.
3. Merging that pull request creates the `vx.y.z` tag and a **draft** GitHub release.
4. Review the draft (Releases → Edit), then **Publish release** to deploy it (below).

## Deployment

Publishing a GitHub release runs the **Release** workflow: tests and lint run as usual, then the `Dockerfile` builds the app (Next.js standalone) into an image pushed to `ghcr.io/lambtsa/portfolio` with two tags: the commit SHA and `latest`.

The image has no build-time settings, so the same image runs anywhere: `GTAG` is read from the server's environment when the container runs, and the site's own address (for link previews) from each request.

**Run the production image locally:**

```bash
docker build -t portfolio .
docker run --rm -p 8080:8080 --env-file .env.local portfolio
```
