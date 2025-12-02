import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-branding">
                <img src="/logo.png" alt="J-Void Logo" className="header-logo" />
                <h1>J-Void</h1>
            </div>
            <div className="help-container">
                <div className="tooltip-text">
                    <strong>Welcome to J-Void</strong><br />
                    Your distraction-free sanctuary for mastering Java syntax.<br />
                    No execution, no output, no noise—just you and the code.
                </div>
                <button className="help-button">
                    ?
                </button>
            </div>
        </header>
    );
};

export default Header;
