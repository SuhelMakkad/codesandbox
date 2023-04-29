"use client";

import Editor from "@monaco-editor/react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import Explorer from "@/standalone/Explorer";
import FileTabs from "@/standalone/FileTabs";

export default function CodePage() {
  return (
    <PanelGroup direction="horizontal">
      <Panel minSize={0} defaultSize={20}>
        <Explorer />
      </Panel>

      <PanelResizeHandle className="w-[0.2rem] bg-neutral-700 transition-[background-color] hover:bg-blue-300 data-[resize-handle-active]:bg-blue-300" />

      <Panel minSize={50}>
        <FileTabs className="h-[2rem]" />

        <Editor
          className="h-screen"
          height={"calc(100vh - 2rem)"}
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue={"span"}
        />
      </Panel>
    </PanelGroup>
  );
}
