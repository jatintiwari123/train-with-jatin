# Train with JATIN — Website + Client Tracker

Two simple websites built with plain HTML, CSS and JavaScript — nothing to
install or compile.

```
train-with-jatin/
├── index.html        →  Redirects visitors to the landing page
├── landing-page/     →  Your public website (for clients to find you)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── images/       →  Your photos (keep the same file names)
└── coach-tracker/    →  Private app to track your clients
    └── index.html    →  Self-contained coaching app
```

## Live links (after GitHub Pages is on)

- **Landing page:** `https://jatintiwari123.github.io/train-with-jatin/`
- **Coach tracker:** `https://jatintiwari123.github.io/train-with-jatin/coach-tracker/`

> The tracker is reachable by its URL, so don't share that link publicly.

## The Coach Tracker

A full coaching app: dashboard, clients, live workout logging (sets/reps/weight,
rest timer, auto PRs), exercise library, programs & templates, calendar,
progress charts, fees/payments, and backup/restore.

**Where is data stored?** In your browser (localStorage) on the device you use.
Use **Settings → Backup and restore** to keep a safe copy. (A free cloud-sync
upgrade with Firebase can be added later.)

## Updating the site

1. Edit files locally.
2. Commit and push:
   ```bash
   git add -A
   git commit -m "Update site"
   git push
   ```
3. GitHub Pages redeploys automatically in about a minute.
