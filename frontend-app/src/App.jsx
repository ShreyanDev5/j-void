
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import './index.css';
import './App.css';

function App() {
  const [code, setCode] = useState('public class Main\n{\n    public static void main(String[] args)\n    {\n        System.out.println("Hello, World!");\n    }\n}');
  const handleEditorDidMount = (editor, monaco) => {
    // Expose monaco to window if needed
    window.monaco = monaco;
  };

  return (
    <div className="app-container">
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
      <div className="main-content">
        <div className="editor-container full-width">
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
      </div>
    </div>
  );
}

export default App;

