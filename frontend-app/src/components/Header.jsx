import React from 'react';
import QuestionSelector from './QuestionSelector';
import ThemeToggle from './ThemeToggle';

const Header = ({ selectedQuestion, onQuestionSelect, theme, onThemeToggle }) => {
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
                <ThemeToggle
                    theme={theme}
                    onToggle={onThemeToggle}
                />
                <div className="help-container">
                    <div className="tooltip-text">
                        <strong>Welcome to J-Void</strong><br />
                        Your distraction-free sanctuary for mastering Java syntax. No execution, no output, no noise—just you and the code.
                        <div className="tooltip-divider"></div>
                        <span className="tooltip-subtitle">Ready for more?</span><br />
                        Explore <strong>Shreyan's Arc</strong>—a premium interactive DSA roadmap with curated problems and visual learning paths.
                        <div className="tooltip-note">J-Void contains the exact same 114 curated questions as Shreyan's Arc—tailored for Freshers, SDE 1, and Junior Developer roles.</div>
                        <a
                            href="https://shreyans-arc.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="arc-link"
                        >
                            Discover Shreyan's Arc →
                        </a>
                    </div>
                    <button className="help-button">
                        ?
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
