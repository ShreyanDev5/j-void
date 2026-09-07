import React, { useState, useEffect, useRef } from "react";
import QuestionSelector from "./QuestionSelector";
import ThemeToggle from "./ThemeToggle";

const Header = ({
  selectedQuestion,
  onQuestionSelect,
  theme,
  onThemeToggle,
  code,
  onResetCode,
}) => {
  const [copied, setCopied] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const helpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (helpRef.current && !helpRef.current.contains(event.target)) {
        setShowHelp(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <header className="header">
      <div className="header-branding">
        <div className="header-logo-badge" title="J-Void">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        </div>
        <h1>J-Void</h1>
      </div>
      <div className="header-controls">
        <QuestionSelector
          onSelect={onQuestionSelect}
          selectedQuestion={selectedQuestion}
        />

        <div className="header-actions-divider" />

        <button
          className={`control-btn ${copied ? "copied" : ""}`}
          onClick={handleCopy}
          title={copied ? "Copied!" : "Copy code"}
          aria-label="Copy code"
        >
          {copied ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          )}
        </button>

        <button
          className="control-btn"
          onClick={onResetCode}
          title="Reset code"
          aria-label="Reset code"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
          </svg>
        </button>

        <ThemeToggle theme={theme} onToggle={onThemeToggle} />

        <div
          className={`help-container ${showHelp ? "show-mobile-help" : ""}`}
          ref={helpRef}
        >
          {showHelp && (
            <div
              className="help-backdrop"
              onClick={(e) => {
                e.stopPropagation();
                setShowHelp(false);
              }}
            />
          )}
          <button
            className="control-btn"
            onClick={() => setShowHelp(!showHelp)}
            title="About"
            aria-label="About"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </button>

          <div className="tooltip-text">
            <div className="tooltip-header-row">
              <span className="tooltip-title">J-Void</span>
              <span className="tooltip-badge">Java</span>
            </div>
            <p className="tooltip-desc">
              Distraction-free Java editor for practicing coding interview patterns.
            </p>
            <div className="tooltip-divider"></div>
            <div className="tooltip-section">
              <span className="tooltip-label">Companion Roadmap</span>
              <a
                href="https://shreyans-arc.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="arc-link"
              >
                Shreyan's Arc (NeetCode-style{" "}
                <span className="arc-link-tail">
                  Roadmap)
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
                </span>
              </a>
            </div>
            <div className="tooltip-tip">
              <span>Tip:</span> Click line numbers to toggle bookmarks.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
