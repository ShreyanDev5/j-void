# J-Void: Minimalist Java Compiler

A minimalist, web-based Java compiler designed for Data Structures and Algorithms (DSA) practice. This application provides a clean, distraction-free environment for coding, compiling, and executing Java code.

## Live Demo

🚀 **[Try it live here](https://j-void.onrender.com/)**

## Features

- **Minimalist Interface**: Clean design focused purely on code.
- **Real-time Compilation**: Fast feedback loop for Java code execution.
- **Syntax Highlighting**: Professional-grade editor experience (Monaco Editor).
- **No AI Assistance**: Intentionally disabled to encourage raw coding skills.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Language**: Java (Compilation handled on server)

## Setup Instructions

### Prerequisites

- **Node.js**: v22+ (Required for Vite compatibility)
- **Java Development Kit (JDK)**: JDK 17+ installed and available in system PATH.

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd java-compiler
    ```

2.  **Install Dependencies:**
    ```bash
    # Install backend dependencies
    npm install

    # Install frontend dependencies
    cd frontend-app
    npm install
    cd ..
    ```

3.  **Start the Application:**
    ```bash
    # Start the backend server
    node server.js

    # In a separate terminal, start the frontend
    cd frontend-app
    npm run dev
    ```

4.  **Access the App:**
    Open `http://localhost:5173` (or the port shown in your terminal).

## Deployment

### Docker (Recommended)

The application is containerized using a lightweight Alpine Linux image for fast startup and easy deployment.

1.  **Build the image:**
    ```bash
    docker build -t java-compiler .
    ```

2.  **Run the container:**
    ```bash
    docker run -p 3001:3001 java-compiler
    ```
    Access at `http://localhost:3001`.

### Render

This project is configured for deployment on [Render](https://render.com/).
- **Build Command**: `npm run build` (This triggers the frontend build script)
- **Start Command**: `node server.js`
- **Environment**: Ensure `JAVA_HOME` is available (handled by the Dockerfile if using Docker deployment).

## License

MIT
