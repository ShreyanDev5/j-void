# J-Void: Java Syntax Practice

A minimalist, distraction-free environment designed purely for practicing Java syntax. No compilation, no execution, no output—just you and the code.

## Philosophy

J-Void is built on the belief that sometimes, the best way to learn is to focus on the structure and syntax of the language without the distraction of immediate execution or debugging output. It encourages "whiteboard coding" skills and mental compilation.

## Features

- **Distraction-Free**: No console, no run button, no output window.
- **Professional Editor**: Powered by Monaco Editor (VS Code's core) for a familiar typing experience.
- **Syntax Highlighting**: Full Java syntax highlighting.
- **Responsive**: Practice on desktop or mobile.

## Tech Stack

- **Frontend**: React, Vite
- **Editor**: Monaco Editor

## Local Development

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd j-void
    ```

2.  **Install Dependencies**
    ```bash
    cd frontend-app
    npm install
    ```

3.  **Start the Application**
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view it in the browser.

## Deployment

This project is optimized for deployment on Vercel.

1.  Push your code to GitHub.
2.  Import the repository in Vercel.
3.  Set the **Root Directory** to `frontend-app`.
4.  The framework preset should automatically detect Vite.
5.  Deploy!

## License

MIT
