"use client";

import FileIcon from "@/common/FileIcon";
import Editor from "@monaco-editor/react";

export default function CodePage() {
  return (
    <div>
      <FileIcon filename="react.ts" />

      <Editor
        height="90vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={"span"}
      />
    </div>
  );
}
