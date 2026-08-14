# <img src="frontend-app/public/logo.png" height="24" align="absmiddle" alt="J-Void Logo" /> J-Void

A lightweight, in-browser Java editor to practice syntax and interview patterns with zero compilation lag. Built as the companion editor for [Shreyan's Arc](https://shreyans-arc.vercel.app/).

[![Live Demo](https://img.shields.io/badge/Live_Demo-j--void.vercel.app-blue?style=flat-square)](https://j-void.vercel.app/)
[![Roadmap Companion](https://img.shields.io/badge/Companion_App-Shreyan's_Arc-purple?style=flat-square)](https://shreyans-arc.vercel.app/)

![J-Void Home Page](frontend-app/public/readme_home_page.png)

---

## Features

- **Instant Editor:** Write and edit Java code immediately with zero setup or build wait times.
- **58 Curated Problems:** Pre-loaded problem templates matching [Shreyan's Arc](https://shreyans-arc.vercel.app/) DSA roadmap.
- **Allman Formatting:** Auto-generated method signatures with Allman-style braces.
- **Gutter Bookmarks:** Click editor gutter line numbers to bookmark lines; hover to preview.
- **Responsive & Themed:** Dark/light mode persistence and mobile-ready problem drawer.

---

## Tech Stack

- **Frontend:** React 19, Vite
- **Editor:** Monaco Editor (`@monaco-editor/react`)
- **Styling:** Vanilla CSS
- **AI Tooling:** Antigravity, GitHub Copilot
- **Deployment:** Vercel

---

## Local Setup

**Prerequisites:** [Node.js](https://nodejs.org/) (v18+) and [Git](https://git-scm.com/)

```bash
# 1. Clone repository & enter frontend directory
git clone https://github.com/ShreyanDev5/j-void.git
cd j-void/frontend-app

# 2. Install dependencies & run dev server
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
