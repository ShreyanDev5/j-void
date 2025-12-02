
import React, { useState } from 'react';
import Header from './components/Header';
import CodeEditor from './components/CodeEditor';
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
      <Header />
      <div className="main-content">
        <CodeEditor
          code={code}
          onChange={(value) => setCode(value)}
          onMount={handleEditorDidMount}
        />
      </div>
    </div>
  );
}

export default App;

