"use client";

import Editor from "@monaco-editor/react";

import Explorer from "@/standalone/Explorer";
import Wrapper from "@/layout/ResizableTabs/Wrapper";

export default function CodePage() {
  return (
    <Wrapper>
      <div>
        <Explorer />
      </div>

      <div className="hover w-1 bg-neutral-600" />

      <div>
        <Editor
          height={"100vh"}
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue={"span"}
        />
      </div>
    </Wrapper>
  );
}
