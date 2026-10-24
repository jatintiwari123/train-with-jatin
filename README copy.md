# Train with JATIN — Website + Client Tracker

This project has **two simple websites**, both built with plain HTML, CSS and
JavaScript. No coding tools, no installs, nothing to compile. If you can edit a
text file and upload files, you can run everything here.

```
jatin_gtym/
├── landing-page/     →  Your public website (for clients to find you)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── images/       →  Put your photos here (see images/README.md)
├── coach-tracker/    →  Private app to track your clients
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md         →  This file
```

---

## 1. Preview it on your computer (no internet needed)

Just **double-click** `landing-page/index.html` (or `coach-tracker/index.html`).
It opens in your web browser. That's it.

---

## 2. Edit your details

Everything is plain text. Open the files in any editor (even Notepad) and change
the words:

- **Your name, bio, prices, testimonials** → `landing-page/index.html`
- **Your photos** → put them in `landing-page/images/` (read the short guide in
  that folder — keep the same file names and you won't touch any code)
- **Colours / look** → top of `landing-page/style.css` (the `:root` section)

---

## 3. The Client Tracker (like Hevy)

Open `coach-tracker/index.html`. You can:

- **Add clients** (name, age, goal, phone)
- For each client, log:
  - **Workouts** — exercise, sets, reps, weight, **RPE**, notes
  - **Measurements** — bodyweight, chest, waist, hips, arms, thighs, body fat %
  - **Sleep** — hours, quality, notes
- See an **Overview** of all clients and recent activity.

### Where is the data stored?
All data is saved **in your browser on that device** (nothing is sent anywhere).
This keeps it free and private.

**Important:** because it's stored in the browser, the data lives on the device
you use. To move it to another device or keep a backup:
- Go to **Overview → Export Data** → saves a backup file.
- On the other device, **Overview → Import Data** → load that file.

> Tip: Export a backup now and then so you never lose records.

---

## 4. Put it online for free with GitHub Pages

This hosts your **landing page** on the internet for free.

1. Create a free account at **https://github.com**.
2. Click **New repository**. Name it something like `train-with-jatin`. Make it
   **Public**. Click **Create repository**.
3. On the repo page, click **Add file → Upload files**.
4. Drag in **everything inside the `landing-page/` folder** (the `index.html`,
   `style.css`, `script.js` and the `images` folder). Click **Commit changes**.
5. Go to **Settings → Pages** (left menu).
6. Under **Branch**, pick **main** and the **/(root)** folder, then **Save**.
7. Wait ~1 minute. GitHub shows a link like
   `https://your-username.github.io/train-with-jatin/` — that's your live site!

### Want the tracker online too?
Repeat the same steps in a **second repository** (e.g. `coach-tracker`) and
upload the files from the `coach-tracker/` folder. Keep that link private to
yourself — it's your coaching tool, not for the public.

---

## 5. Common edits cheat-sheet

| I want to change…           | Open this file                     | Look for…                    |
|-----------------------------|------------------------------------|------------------------------|
| My name / tagline           | `landing-page/index.html`          | the Hero section at the top  |
| Prices / plans              | `landing-page/index.html`          | the "Choose Your Plan" part  |
| Testimonials                | `landing-page/index.html`          | the "What Clients Say" part  |
| Phone / email / Instagram   | `landing-page/index.html`          | the "Contact" + footer parts |
| WhatsApp number on the form | `landing-page/script.js`           | `COACH_PHONE`                |
| Colours                     | `landing-page/style.css`           | `:root` at the very top      |

---

Built to be simple. If something breaks, you can always re-upload the original
files and start fresh — nothing here can harm your computer.
