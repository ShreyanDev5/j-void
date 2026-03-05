import React, { useRef, useCallback } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, onChange, onMount, theme = "dark" }) => {
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const bookmarksRef = useRef(new Set()); // Store bookmarked line numbers
  const decorationsRef = useRef([]); // Store bookmark decoration IDs
  const ghostDecorationsRef = useRef([]); // Store ghost decoration IDs
  const lastHoveredLineRef = useRef(null); // Optimize: only update if line changes

  const updateDecorations = useCallback(() => {
    if (!editorRef.current) return;

    const newDecorations = Array.from(bookmarksRef.current).map(
      (lineNumber) => ({
        range: new monacoRef.current.Range(lineNumber, 1, lineNumber, 1),
        options: {
          isWholeLine: false,
          glyphMarginClassName: "bookmark-glyph",
        },
      }),
    );

    decorationsRef.current = editorRef.current.deltaDecorations(
      decorationsRef.current,
      newDecorations,
    );

    // Clear ghost to avoid collision if a bookmark was added where ghost was
    if (
      lastHoveredLineRef.current &&
      bookmarksRef.current.has(lastHoveredLineRef.current)
    ) {
      ghostDecorationsRef.current = editorRef.current.deltaDecorations(
        ghostDecorationsRef.current,
        [],
      );
      lastHoveredLineRef.current = null;
    }
  }, []);

  const handleEditorDidMount = useCallback(
    (editor, monaco) => {
      editorRef.current = editor;
      monacoRef.current = monaco;

      // Handle click on glyph margin to toggle bookmark
      editor.onMouseDown((e) => {
        if (
          e.target.type === monaco.editor.MouseTargetType.GUTTER_GLYPH_MARGIN
        ) {
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

      // Handle mouse move for "ghost" bookmark
      editor.onMouseMove((e) => {
        const lineNumber = e.target.position?.lineNumber;
        // If not on glyph margin or no line, clear ghost
        if (
          e.target.type !== monaco.editor.MouseTargetType.GUTTER_GLYPH_MARGIN ||
          !lineNumber
        ) {
          if (ghostDecorationsRef.current.length > 0) {
            ghostDecorationsRef.current = editor.deltaDecorations(
              ghostDecorationsRef.current,
              [],
            );
            lastHoveredLineRef.current = null;
          }
          return;
        }

        // If same line, do nothing (PERFORMANCE OPTIMIZATION)
        if (lineNumber === lastHoveredLineRef.current) return;

        // If real bookmark exists, do not show ghost
        if (bookmarksRef.current.has(lineNumber)) {
          ghostDecorationsRef.current = editor.deltaDecorations(
            ghostDecorationsRef.current,
            [],
          );
          lastHoveredLineRef.current = lineNumber; // Track to prevent repeated checks
          return;
        }

        // Apply ghost decoration
        const newDecorations = [
          {
            range: new monaco.Range(lineNumber, 1, lineNumber, 1),
            options: {
              isWholeLine: false,
              glyphMarginClassName: "bookmark-ghost",
            },
          },
        ];

        ghostDecorationsRef.current = editor.deltaDecorations(
          ghostDecorationsRef.current,
          newDecorations,
        );
        lastHoveredLineRef.current = lineNumber;
      });

      // Clear ghost on leave
      editor.onMouseLeave(() => {
        if (ghostDecorationsRef.current.length > 0) {
          ghostDecorationsRef.current = editor.deltaDecorations(
            ghostDecorationsRef.current,
            [],
          );
          lastHoveredLineRef.current = null;
        }
      });

      // Call the parent's onMount if provided
      if (onMount) {
        onMount(editor, monaco);
      }
    },
    [onMount, updateDecorations],
  );

  return (
    <div className="editor-container full-width">
      <Editor
        height="100%"
        defaultLanguage="java"
        theme={theme === "dark" ? "vs-dark" : "vs"}
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
          autoIndent: "advanced",
          trimAutoWhitespace: false,
          formatOnType: false,

          formatOnPaste: false,
          // Visual Scope & Structure
          bracketPairColorization: { enabled: true },
          guides: {
            indentation: true,
            highlightActiveIndentation: true,
          },
          // Mechanical Accelerators
          autoSurround: "languageDefined",
          autoClosingBrackets: "always",
          autoClosingQuotes: "always",
          // Fluidity & Feel
          cursorSmoothCaretAnimation: "on",
          smoothScrolling: true,
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
};

export default CodeEditor;
