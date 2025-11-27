import React from 'react';

const ErrorDisplay = ({ error }) => {
    if (!error) return null;

    return (
        <div className="error-display">
            <div className="error-friendly-box">
                <div className="error-icon">⚠️</div>
                <div className="error-content">
                    <h4 className="error-title">{error.category || 'Error'}</h4>
                    <p className="error-friendly-msg">{error.friendlyMessage}</p>
                </div>
            </div>
            <div className="error-raw-details">
                <details>
                    <summary>View Technical Details</summary>
                    <pre className="error-raw-text">{error.message}</pre>
                </details>
            </div>
        </div>
    );
};

export default ErrorDisplay;
