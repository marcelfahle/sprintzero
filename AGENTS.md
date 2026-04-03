# AGENTS.md — SprintZero

## Project

SprintZero (sprintzero.sh / unfuckyourstack.com) — sprint planning and project tool.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **UI:** Framer Motion, Lucide icons
- **Deployment:** Vercel (team: `marcelfahles-projects`)

## Dev Setup

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
npm run lint       # ESLint
```

## Project Structure

```
src/
├── app/           # Next.js App Router (pages, layouts)
├── components/    # React components
└── ...
```

## Deployment

Deployed on Vercel. Pushes to `main` trigger production deploy.

- Production: sprintzero.sh / unfuckyourstack.com
- Preview: auto-deployed on PRs

Vercel projects: `sprintzero`, `unfuckyourstack`, `sprintzero-diff`

## GitHub

Repo: `marcelfahle/sprintzero`

## Notes

- Plausible analytics configured for both domains (site-specific script)
- OpenGraph metadata configured with environment-aware `metadataBase`
