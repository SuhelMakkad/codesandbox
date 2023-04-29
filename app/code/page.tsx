"use client";

import Editor from "@monaco-editor/react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import Explorer from "@/standalone/Explorer";

export default function CodePage() {
  return (
    <PanelGroup direction="horizontal">
      <Panel>
        <Explorer />
      </Panel>

      <PanelResizeHandle className="w-1 bg-neutral-400 hover:bg-blue-300 data-[resize-handle-active]:bg-blue-300" />

      <Panel>
        <Editor
          className="h-screen"
          height={"100vh"}
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue={"span"}
        />
      </Panel>
    </PanelGroup>
  );
}
