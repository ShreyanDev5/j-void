# ☕ J-Void: Java Practice

A simple Java editor to practice writing code syntax without the wait of compilation or execution.

![J-Void Home Page](frontend-app/public/readme_home_page.png)

Built to accompany [Shreyan's Arc](https://shreyans-arc.vercel.app/) (a visual DSA roadmap). It contains 59 standard DSA problems tailored for developer interview prep.

---

## ✨ Features

- **Instant Editor**: Write Java code immediately with zero setup or compilation delays.
- **Allman Formatting**: Generates method signatures using Allman-style braces.
- **Gutter Bookmarks**: Bookmark lines directly in the Monaco editor gutter (click to save, hover to preview).
- **Responsive Layout**: Works on mobile and desktop, using a bottom-sheet selector for mobile navigation.
- **Theme Support**: Light and dark modes that persist via `localStorage`.

---

## 🛠️ Tech Stack

- **Frontend**: React (v19), Vite
- **Editor**: Monaco Editor (`@monaco-editor/react`)
- **Styling**: Vanilla CSS
- **Backend**: None (pure client-side application)
- **AI Tools**: GitHub Copilot, Antigravity

---

## 💻 Local Development

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ShreyanDev5/j-void.git
   cd j-void
   ```

2. **Install Dependencies**
   ```bash
   cd frontend-app
   npm install
   ```

3. **Run the App**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚀 Deployment

To deploy on **Vercel**:

1. Import the repository.
2. Set the root directory to `frontend-app`.
3. Click deploy.
