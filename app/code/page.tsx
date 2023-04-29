"use client";

import Editor from "@monaco-editor/react";

import Explorer from "@/standalone/Explorer";
import Wrapper from "@/layout/ResizableTabs/Wrapper";
import Tab from "@/layout/ResizableTabs/Tab";

export default function CodePage() {
  return (
    <Wrapper>
      <Explorer />

      <Editor
        className="h-screen"
        height={"100vh"}
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={"span"}
      />
    </Wrapper>
  );
}
