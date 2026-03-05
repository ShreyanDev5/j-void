import React from "react";

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button
      className="theme-toggle-button"
      onClick={onToggle}
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
};

export default ThemeToggle;
