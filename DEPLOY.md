# Deployment Guide

This guide provides instructions for deploying the Java Compiler application to various cloud platforms.

## Prerequisites

- A GitHub repository containing this codebase.
- Accounts on the respective hosting platforms (Render, Vercel, Heroku, etc.).

## Option 1: Render (Recommended for Full Stack)

Render is excellent for hosting both the Node.js backend and the React frontend.

1.  **Create a Web Service:**
    - Connect your GitHub repository.
    - **Runtime:** Node
    - **Build Command:** `npm run build`
        - *Note: This runs the script in `package.json` which installs dependencies and builds the frontend.*
    - **Start Command:** `npm start`
    - **Environment Variables:**
        - Add any necessary env vars (none required for basic setup).

2.  **Deploy:**
    - Click "Create Web Service". Render will build and deploy your app.

## Option 2: Separate Frontend & Backend

You can host the frontend on Vercel/Netlify and the backend on Render/Heroku.

### Backend (Render/Heroku)

1.  **Build Command:** `npm install`
2.  **Start Command:** `node server.js`
3.  **Note:** You will need to update the frontend API URL to point to your deployed backend URL.

### Frontend (Vercel/Netlify)

1.  **Root Directory:** `frontend-app`
2.  **Build Command:** `npm run build` or `vite build`
3.  **Output Directory:** `dist`
4.  **Environment Variables:**
    - `VITE_API_URL`: Set this to your deployed backend URL.

## Docker Deployment

If you have a VPS or a platform supporting Docker (like Railway or Fly.io):

1.  **Dockerfile:** The project includes a `Dockerfile` in the root.
2.  **Deploy:** Point your platform to the `Dockerfile`.
3.  **Port:** Expose port `3000`.

## Troubleshooting

- **CORS Issues:** If frontend and backend are on different domains, ensure `cors` is configured in `server.js` to allow the frontend origin.
- **Build Failures:** Check the build logs. Ensure `npm install` is running for both root and `frontend-app`.
