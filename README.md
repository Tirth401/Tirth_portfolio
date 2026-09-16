# Tirth Shah — Portfolio

An editorial portfolio for Tirth Shah’s work in AI engineering, applied research, and full-stack development. Built with Next.js, React, and TypeScript.

The redesign pairs warm paper tones and cobalt with an interactive map of real project workflows, four project studies, and clear evidence of real work. All resume facts and the downloadable PDF were updated from the supplied Tirth_resume.pdf.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To choose another port: `npm run dev -- --port 3100`.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## What is included

- A hero project explorer connects three real projects to their inputs, implementation, and outcomes: ONLC knowledge retrieval, SAGAFS biomedical feature selection, and a multi-agent PDF application. Each step explains Tirth’s contribution, and each project opens its matching case study.
- Four filterable project studies with accessible native dialog details, Escape-to-close, focus restoration, and shareable links (`/#project-01` through `/#project-04`).
- Current resume, accurate employment dates, education, community involvement, and grouped capabilities.
- Mobile navigation, keyboard focus states, a skip link, expandable experience, and a copy-email action.
- Local fonts, portrait optimization, favicon, metadata, and a generated Open Graph image.
- Direct email, GitHub, and LinkedIn links. No contact service credentials are required.

## Updating the content

| Content                                   | Location                                                            |
| ----------------------------------------- | ------------------------------------------------------------------- |
| Resume PDF                                | `public/resume.pdf`                                                 |
| Hero and impact metrics                   | `components/Intro.tsx`                                              |
| Project stories and illustrations         | `components/SelectedWork.tsx`                                       |
| Work history, education, skills, portrait | `components/AboutExperience.tsx`                                    |
| Contact and social links                  | `components/ContactFooter.tsx`                                      |
| Interactive project workflows             | `components/WorkExplorer.tsx`, `components/WorkExplorer.module.css` |
| Page composition                          | `app/page.tsx`                                                      |
| Colors, typography, navigation, hero      | `app/globals.css`                                                   |
| Search and sharing metadata               | `app/layout.tsx`, `app/opengraph-image.tsx`                         |

Project illustrations are architecture studies and an interface concept, not screenshots or live telemetry. Professional work has no invented demo or repository link. The NeuzNow repository link comes from the original portfolio.

## Deployment

The project remains compatible with the existing Vercel setup. Review the redesign branch, merge or push it to the intended branch, then let the connected Vercel project build it. The preview work does not publish or alter the existing live site.

Set `metadataBase` in `app/layout.tsx` if your production URL changes. The current value preserves the resume’s portfolio URL, `https://bytirth.vercel.app`.

## Dependencies and assets

Next.js and React use patched releases in the existing version lines. A PostCSS override keeps Next’s CSS processing dependency on the same maintained 8.x release as the project. Keep this override until the upstream dependency is patched; rerun the build after dependency updates.

Space Grotesk and DM Sans are self-hosted under their SIL Open Font Licenses, included in `public/fonts/`. The portrait and resume belong to Tirth Shah.
