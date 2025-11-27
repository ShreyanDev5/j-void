import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import SuccessAnimation from './SuccessAnimation';
import ErrorDisplay from './components/ErrorDisplay';
import { parseJavaOutput } from './utils/javaErrorParser';
import './index.css';

function App() {
  const [code, setCode] = useState('public class Main\n{\n    public static void main(String[] args)\n    {\n        System.out.println("Hello, World!");\n    }\n}');
  const [output, setOutput] = useState('// Output will appear here...');
  const [isRunning, setIsRunning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [outputWidth, setOutputWidth] = useState(400); // Initial width in pixels
  const [isDragging, setIsDragging] = useState(false);
  const [editorRef, setEditorRef] = useState(null);
  const [errorData, setErrorData] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const newWidth = window.innerWidth - e.clientX;
      // Min width 200px, Max width 80% of screen
      if (newWidth > 200 && newWidth < window.innerWidth * 0.8) {
        setOutputWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = 'default';
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none'; // Prevent text selection
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = ''; // Restore text selection
    };
  }, [isDragging]);

  const handleRun = async () => {
    setIsRunning(true);
    setShowSuccess(false);
    setErrorData(null);
    setOutput('Running...');

    // Clear existing markers
    if (editorRef) {
      const model = editorRef.getModel();
      if (model) {
        window.monaco.editor.setModelMarkers(model, 'owner', []);
      }
    }

    try {
      const response = await fetch('/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();

      if (data.error) {
        const parsed = parseJavaOutput(data.error);
        setErrorData(parsed);
        setOutput(parsed.message); // Keep raw message for copy/view

        // Set markers if compilation error
        if (parsed.markers && parsed.markers.length > 0 && editorRef) {
          const model = editorRef.getModel();
          if (model) {
            window.monaco.editor.setModelMarkers(model, 'owner', parsed.markers);
          }
        }
      } else {
        setOutput(data.output);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds
      }
    } catch (error) {
      setOutput('Error: Could not connect to server.');
      setErrorData({
        type: 'error',
        category: 'Connection Error',
        message: 'Could not connect to server.',
        friendlyMessage: 'I couldn\'t reach the server. Is it running?'
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleEditorDidMount = (editor, monaco) => {
    setEditorRef(editor);
    // Expose monaco to window for marker usage if needed, or just use monaco instance passed here
    window.monaco = monaco;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  const handleClear = () => {
    setOutput('// Output will appear here...');
    setShowSuccess(false);
    setErrorData(null);
    if (editorRef) {
      const model = editorRef.getModel();
      if (model) {
        window.monaco.editor.setModelMarkers(model, 'owner', []);
      }
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-branding">
          <img src="/logo.png" alt="J-Void Logo" className="header-logo" />
          <h1>J-Void</h1>
        </div>
        <button className="run-button" onClick={handleRun} disabled={isRunning}>
          {isRunning ? (
            <span className="loading-spinner"></span>
          ) : (
            'Run Code'
          )}
        </button>
      </header>
      <div className="main-content">
        <div className="editor-container">
          <Editor
            height="100%"
            defaultLanguage="java"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
            onMount={handleEditorDidMount}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: 'Consolas, "Courier New", monospace',
              automaticLayout: true,
              suggest: {
                showKeywords: false,
                showSnippets: false,
                showClasses: false,
                showFunctions: false,
                showVariables: false,
                showModules: false,
                showProperties: false,
                showConstructors: false,
                showFields: false,
                showInterfaces: false,
                showMethods: false,
                showEvents: false,
                showOperators: false,
                showUnits: false,
                showValues: false,
                showConstants: false,
                showEnums: false,
                showEnumMembers: false,
                showStructs: false,
                showTypeParameters: false,
                showWords: false,
                showColors: false,
                showFiles: false,
                showReferences: false,
                showFolders: false,
                showTypeDefinitions: false,
                showUsers: false,
                showIssues: false,
              },
              quickSuggestions: false,
              parameterHints: { enabled: false },
              wordBasedSuggestions: false,
            }}
          />
        </div>
        <div
          className="resizer"
          onMouseDown={() => setIsDragging(true)}
        />
        <div className="output-container" style={{ width: outputWidth, flex: 'none' }}>
          <div className="output-header">
            <span>Output</span>
            <div className="output-actions">
              <button className="icon-button" onClick={handleCopy} title="Copy Output">
                {copyFeedback ? 'Copied!' : 'Copy'}
              </button>
              <button className="icon-button" onClick={handleClear} title="Clear Output">
                Clear
              </button>
            </div>
          </div>
          <div className="output-content">
            {errorData ? (
              <ErrorDisplay error={errorData} />
            ) : (
              <pre className="output-text">{output}</pre>
            )}
            {showSuccess && <SuccessAnimation />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
