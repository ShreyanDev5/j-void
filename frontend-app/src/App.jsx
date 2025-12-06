
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CodeEditor from './components/CodeEditor';
import { generateBoilerplate } from './data/boilerplateGenerator';
import './index.css';
import './App.css';

// Default code when no problem is selected
const DEFAULT_CODE = `public class Main
{
    public static void main(String[] args)
    {
        System.out.println("Hello, World!");
    }
}`;

function App() {
  // Theme state with localStorage persistence
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('j-void-theme');
    return saved || 'dark';
  });

  // Selected question state
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Editor code state
  const [code, setCode] = useState(DEFAULT_CODE);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('j-void-theme', theme);
  }, [theme]);

  // Handle theme toggle
  const handleThemeToggle = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Handle question selection
  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
    const boilerplate = generateBoilerplate(question.title);
    setCode(boilerplate);
  };

  const handleEditorDidMount = (editor, monaco) => {
    // Expose monaco to window if needed
    window.monaco = monaco;
  };

  return (
    <div className={`app-container theme-${theme}`}>
      <Header
        selectedQuestion={selectedQuestion}
        onQuestionSelect={handleQuestionSelect}
        theme={theme}
        onThemeToggle={handleThemeToggle}
      />
      <div className="main-content">
        <CodeEditor
          code={code}
          onChange={(value) => setCode(value)}
          onMount={handleEditorDidMount}
          theme={theme}
        />
      </div>
    </div>
  );
}

export default App;

