# Redesign validation

Validated on September 16, 2026 against the local production build.

## Automated checks

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; the home page is statically prerendered.
- `npm audit`: 0 reported vulnerabilities.
- `git diff --check`: passed.
- 22 browser checks passed in Chromium using the locally installed Google Chrome.

## Browser coverage

- Four projects render and filtering updates the result count and displayed cards.
- Project dialogs open, close with Escape, and restore focus to the initiating button.
- All three sculpture modes update their visuals and captions.
- Animation runs when motion is allowed; pause stops it; pointer dragging changes the view.
- Reduced-motion rendering and desktop/mobile presentation were visually inspected.
- Copy-email writes the intended address to the clipboard.
- The resume route returns HTTP 200 and is byte-identical to the supplied new resume.
- No horizontal overflow at 360, 390, 680, 768, 1024, or 1440 pixels after layout settles.
- Mobile navigation opens and closes after section selection.
- No uncaught browser errors were observed.
- The portrait loads through the image optimizer. The NeuzNow repository link returns HTTP 200.

Desktop, mobile, and project-dialog screenshots were reviewed. Safari and Firefox were not run in this environment.

## Delivery state

The original GitHub repository was cloned, with changes on local branch `redesign/systems-portfolio`. No push or production deployment was performed. The local production preview runs on port 3100 while its server process is active.
