"use client";

import Editor from "@monaco-editor/react";

export default function CodePage() {
  return (
    <div>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={"span"}
      />
    </div>
  );
}
