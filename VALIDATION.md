# Redesign validation

Validated on September 16, 2026 against local desktop and mobile previews.

## Build and dependency checks

- `npm run lint` and `npm run typecheck` pass.
- `npm run build` generates a statically prerendered home page.
- `npm audit` reports 0 vulnerabilities.
- `git diff --check` passes.

## Project explorer revision

The abstract hero sculpture was replaced with three simplified workflows from the resume: ONLC knowledge retrieval, SAGAFS biomedical feature selection, and the agentic PDF application. All nine steps describe Tirth’s contribution. Metrics are reported project outcomes, not live telemetry.

Browser coverage includes:

- Switching all three workflows and all nine steps.
- Matching project titles, contextual explanations, and pressed states.
- Opening each matching project dialog directly from the hero.
- Escape-to-close and restoring focus to the real triggering link.
- Opening projects while their cards are filtered out.
- Loading a shared `#project-02` URL directly.
- Checking horizontal overflow and workflow text at 360, 390, 680, 768, 1024, and 1440 pixels.
- Visual review of desktop and mobile presentation.

The earlier complete-site checks also covered mobile navigation, project filtering, clipboard copying, optimized portrait loading, and the resume download. The resume is byte-identical to the supplied PDF. The NeuzNow repository link returned HTTP 200.

Testing uses Chromium through locally installed Google Chrome. Safari and Firefox were not run in this environment.

## Delivery state

The source is maintained in `Tirth401/Tirth_portfolio`. The redesign was prepared on `redesign/systems-portfolio` for publication to `main` and the connected Vercel production projects. GitHub and Vercel deployment checks record the live release status. The optional local preview runs on port 3100 while its server is active.
