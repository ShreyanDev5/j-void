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
        <img src="/logo.png" alt="J-Void Logo" className="header-logo" />
        <h1>J-Void</h1>
      </div>
      <div className="header-controls">
        <QuestionSelector
          onSelect={onQuestionSelect}
          selectedId={selectedQuestion?.id}
        />
        <button
          className={`copy-button ${copied ? "copied" : ""}`}
          onClick={handleCopy}
          title={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
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
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : (
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
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          )}
        </button>
        <button
          className="copy-button"
          onClick={onResetCode}
          title="Reset to default code"
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
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
          </svg>
        </button>
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        <div className={`help-container ${showHelp ? "show-mobile-help" : ""}`} ref={helpRef}>
          {showHelp && (
            <div
              className="help-backdrop"
              onClick={(e) => {
                e.stopPropagation();
                setShowHelp(false);
              }}
            />
          )}
          <div className="tooltip-text">
            <strong>Welcome to J-Void</strong>
            <br />
            Your distraction-free sanctuary for mastering Java syntax. No
            execution, no output, no noise—just you and the code.
            <div className="tooltip-divider"></div>
            <span className="tooltip-subtitle">Ready for more?</span>
            <br />
            Explore <strong>Shreyan's Arc</strong>—a premium interactive DSA
            roadmap with curated problems and visual learning paths.
            <div className="tooltip-note">
              J-Void contains the exact same 59 curated problems as Shreyan's
              Arc—tailored for Freshers, SDE 1, and Junior Developer roles.
            </div>
            <a
              href="https://shreyans-arc.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="arc-link"
            >
              Discover Shreyan's Arc →
            </a>
          </div>
          <button
            className="help-button"
            onClick={() => setShowHelp(!showHelp)}
            title="Help & Info"
          >
            ?
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
