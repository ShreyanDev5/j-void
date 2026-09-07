import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CodeEditor from "./components/CodeEditor";
import { generateBoilerplate } from "./data/boilerplateGenerator";
import "./index.css";
import "./App.css";

// Default code when no problem is selected
const DEFAULT_CODE = `public class Main
{
    public static void main(String[] args)
    {
        
    }
}`;

function App() {
  // Theme state with localStorage persistence
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("j-void-theme");
    return saved || "dark";
  });

  // Selected question state
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Editor code state
  const [code, setCode] = useState(DEFAULT_CODE);

  // Reset confirmation modal state
  const [showResetModal, setShowResetModal] = useState(false);

  // Cursor & document stats for status bar
  const [cursorInfo, setCursorInfo] = useState({
    line: 1,
    column: 1,
    totalLines: 8,
    bookmarksCount: 0,
  });

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("j-void-theme", theme);
  }, [theme]);

  // Handle theme toggle
  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Handle question selection
  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
    if (question) {
      setCode(generateBoilerplate(question.title));
    } else {
      setCode(DEFAULT_CODE);
    }
  };

  // Handle resetting code to default boilerplate
  const handleResetCode = () => {
    setShowResetModal(true);
  };

  const handleConfirmReset = () => {
    if (selectedQuestion) {
      setCode(generateBoilerplate(selectedQuestion.title));
    } else {
      setCode(DEFAULT_CODE);
    }
    setShowResetModal(false);
  };

  const handleCancelReset = () => {
    setShowResetModal(false);
  };

  return (
    <div className={`app-container theme-${theme}`}>
      <Header
        selectedQuestion={selectedQuestion}
        onQuestionSelect={handleQuestionSelect}
        theme={theme}
        onThemeToggle={handleThemeToggle}
        code={code}
        onResetCode={handleResetCode}
      />
      <div className="main-content">
        <CodeEditor
          code={code}
          onChange={(value) => setCode(value)}
          theme={theme}
          onCursorChange={setCursorInfo}
        />
      </div>

      <footer className="status-bar">
        <div className="status-bar-left">
          <span className="footer-project">J-Void</span>
          <span className="footer-dot">·</span>
          <span className="footer-desc">Distraction-free Java practice</span>
          {cursorInfo.bookmarksCount > 0 && (
            <span className="status-item status-bookmark">
              <span className="bookmark-status-dot" />
              {cursorInfo.bookmarksCount}{" "}
              {cursorInfo.bookmarksCount === 1 ? "bookmark" : "bookmarks"}
            </span>
          )}
        </div>
        <div className="status-bar-right">
          <a
            href="https://shreyandev.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="status-link"
          >
            <span>Shreyan Sardar</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="link-icon"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
          <span className="status-divider">/</span>
          <a
            href="https://github.com/ShreyanDev5/j-void"
            target="_blank"
            rel="noreferrer"
            className="status-link"
          >
            <span>GitHub</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="link-icon"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
      </footer>

      {showResetModal && (
        <div className="modal-overlay" onClick={handleCancelReset}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Reset Code</h3>
            <p>
              Reset to the starter template? Your current changes will be cleared.
            </p>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={handleCancelReset}>
                Cancel
              </button>
              <button className="btn-danger" onClick={handleConfirmReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
