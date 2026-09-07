import React, { useRef, useCallback, useEffect } from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, onChange, theme = "dark", onCursorChange }) => {
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const bookmarksRef = useRef(new Set()); // Store bookmarked line numbers
  const decorationsRef = useRef([]); // Store bookmark decoration IDs
  const ghostDecorationsRef = useRef([]); // Store ghost decoration IDs
  const lastHoveredLineRef = useRef(null); // Optimize: only update if line changes

  const handleEditorBeforeMount = (monaco) => {
    monaco.editor.defineTheme("jvoid-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "676775", fontStyle: "italic" },
        { token: "keyword", foreground: "f59e0b" },
        { token: "string", foreground: "10b981" },
        { token: "number", foreground: "38bdf8" },
        { token: "type", foreground: "a78bfa" },
      ],
      colors: {
        "editor.background": "#121316",
        "editor.foreground": "#ededf0",
        "editorLineNumber.foreground": "#42434d",
        "editorLineNumber.activeForeground": "#ededf0",
        "editorCursor.foreground": "#f59e0b",
        "editor.lineHighlightBackground": "#17181c",
        "editorGutter.background": "#121316",
        "editorIndentGuide.background": "#1d1f25",
        "editorIndentGuide.activeBackground": "#2e313b",
        "editor.selectionBackground": "#2a2e3d",
        "editor.inactiveSelectionBackground": "#1e212b",
      },
    });

    monaco.editor.defineTheme("jvoid-light", {
      base: "vs",
      inherit: true,
      rules: [
        { token: "comment", foreground: "888796", fontStyle: "italic" },
        { token: "keyword", foreground: "d97706" },
        { token: "string", foreground: "059669" },
        { token: "number", foreground: "0284c7" },
        { token: "type", foreground: "7c3aed" },
      ],
      colors: {
        "editor.background": "#faf9f5",
        "editor.foreground": "#191a1e",
        "editorLineNumber.foreground": "#b8b6ab",
        "editorLineNumber.activeForeground": "#191a1e",
        "editorCursor.foreground": "#d97706",
        "editor.lineHighlightBackground": "#f3f1ec",
        "editorGutter.background": "#faf9f5",
        "editorIndentGuide.background": "#eae7df",
        "editorIndentGuide.activeBackground": "#ccc8bd",
        "editor.selectionBackground": "#e2dfd7",
        "editor.inactiveSelectionBackground": "#ebe8df",
      },
    });
  };

  const notifyCursorChange = useCallback(() => {
    if (!editorRef.current || !onCursorChange) return;
    const position = editorRef.current.getPosition() || { lineNumber: 1, column: 1 };
    onCursorChange({
      line: position.lineNumber,
      column: position.column,
      totalLines: editorRef.current.getModel()?.getLineCount() || 1,
      bookmarksCount: bookmarksRef.current.size,
    });
  }, [onCursorChange]);

  // Clean bookmarks when code changes externally (e.g. problem switch or reset)
  useEffect(() => {
    if (editorRef.current && editorRef.current.getValue() !== code) {
      bookmarksRef.current.clear();
      if (decorationsRef.current.length > 0) {
        decorationsRef.current = editorRef.current.deltaDecorations(
          decorationsRef.current,
          [],
        );
      }
      notifyCursorChange();
    }
  }, [code, notifyCursorChange]);

  const updateDecorations = useCallback(() => {
    if (!editorRef.current || !monacoRef.current) return;

    const newDecorations = Array.from(bookmarksRef.current).map(
      (lineNumber) => ({
        range: new monacoRef.current.Range(lineNumber, 1, lineNumber, 1),
        options: {
          isWholeLine: false,
          glyphMarginClassName: "bookmark-glyph",
          stickiness:
            monacoRef.current.editor.TrackedRangeStickiness
              .NeverGrowsWhenTypingAtEdges,
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

    notifyCursorChange();
  }, [notifyCursorChange]);

  const handleEditorDidMount = useCallback(
    (editor, monaco) => {
      editorRef.current = editor;
      monacoRef.current = monaco;

      // Report initial cursor position
      notifyCursorChange();

      // Listen to cursor position changes
      editor.onDidChangeCursorPosition(() => {
        notifyCursorChange();
      });

      // Synchronize bookmarks with dynamic line additions/deletions
      editor.onDidChangeModelContent(() => {
        if (!decorationsRef.current.length) {
          notifyCursorChange();
          return;
        }
        const model = editor.getModel();
        if (!model) return;

        const updatedBookmarks = new Set();
        const survivingDecorations = [];

        for (const id of decorationsRef.current) {
          const range = model.getDecorationRange(id);
          if (
            range &&
            range.startLineNumber >= 1 &&
            range.startLineNumber <= model.getLineCount() &&
            range.startLineNumber === range.endLineNumber
          ) {
            updatedBookmarks.add(range.startLineNumber);
            survivingDecorations.push(id);
          }
        }

        bookmarksRef.current = updatedBookmarks;
        decorationsRef.current = survivingDecorations;
        notifyCursorChange();
      });

      // Prevent default browser Ctrl+S / Cmd+S save prompt
      editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {});

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
    },
    [updateDecorations, notifyCursorChange],
  );

  return (
    <div className="editor-container full-width">
      <Editor
        height="100%"
        defaultLanguage="java"
        beforeMount={handleEditorBeforeMount}
        theme={theme === "dark" ? "jvoid-dark" : "jvoid-light"}
        value={code}
        onChange={onChange}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          fontFamily: '"JetBrains Mono", Consolas, "Courier New", monospace',
          fontLigatures: true,
          letterSpacing: 0.1,
          lineHeight: 22,
          automaticLayout: true,
          glyphMargin: true,
          folding: true,
          showFoldingControls: "mouseover",
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
          padding: { top: 14, bottom: 40 },
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
