import React, { useRef, useCallback } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, onChange, onMount, theme = 'dark' }) => {
    const editorRef = useRef(null);
    const monacoRef = useRef(null);
    const bookmarksRef = useRef(new Set()); // Store bookmarked line numbers
    const decorationsRef = useRef([]); // Store decoration IDs

    const updateDecorations = useCallback(() => {
        if (!editorRef.current) return;

        const newDecorations = Array.from(bookmarksRef.current).map(lineNumber => ({
            range: new monacoRef.current.Range(lineNumber, 1, lineNumber, 1),
            options: {
                isWholeLine: false,
                glyphMarginClassName: 'bookmark-glyph',
                glyphMarginHoverMessage: { value: 'Click to remove bookmark' },
            },
        }));

        decorationsRef.current = editorRef.current.deltaDecorations(
            decorationsRef.current,
            newDecorations
        );
    }, []);

    const handleEditorDidMount = useCallback((editor, monaco) => {
        editorRef.current = editor;
        monacoRef.current = monaco;

        // Handle click on glyph margin
        editor.onMouseDown((e) => {
            if (e.target.type === monaco.editor.MouseTargetType.GUTTER_GLYPH_MARGIN) {
                const lineNumber = e.target.position?.lineNumber;
                if (lineNumber) {
                    if (bookmarksRef.current.has(lineNumber)) {
                        bookmarksRef.current.delete(lineNumber);
                    } else {
                        bookmarksRef.current.add(lineNumber);
                    }
                    updateDecorations();
                }
            }
        });

        // Call the parent's onMount if provided
        if (onMount) {
            onMount(editor, monaco);
        }
    }, [onMount, updateDecorations]);

    return (
        <div className="editor-container full-width">
            <Editor
                height="100%"
                defaultLanguage="java"
                theme={theme === 'dark' ? 'vs-dark' : 'vs'}
                value={code}
                onChange={onChange}
                onMount={handleEditorDidMount}
                options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    fontFamily: 'Consolas, "Courier New", monospace',
                    automaticLayout: true,
                    glyphMargin: true,
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
                    padding: { top: 12 },
                }}
            />
        </div>
    );
};

export default CodeEditor;
