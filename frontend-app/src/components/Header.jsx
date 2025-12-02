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
                    This is a deliberately distraction-free space to practice writing clean Java code.
                    <br />
                    No execution, no output, no interruptions—just you and the syntax.
                </div>
                <button className="help-button">
                    ?
                </button>
            </div>
        </header>
    );
};

export default Header;
