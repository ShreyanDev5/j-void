import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, onChange, onMount }) => {
    return (
        <div className="editor-container full-width">
            <Editor
                height="100%"
                defaultLanguage="java"
                theme="vs-dark"
                value={code}
                onChange={onChange}
                onMount={onMount}
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
    );
};

export default CodeEditor;
