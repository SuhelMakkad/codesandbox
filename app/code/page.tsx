"use client";

import Editor from "@monaco-editor/react";
import { Panel, PanelGroup } from "react-resizable-panels";

import Explorer, { File } from "@/standalone/Explorer";
import FileTabs from "@/standalone/FileTabs";
import PanelResizeHandle from "@/standalone/PanelResizeHandle";
import Xterm from "@/components/standalone/Xterm";

const files: File[] = [
  {
    name: "node_modules",
    type: "folder",
  },
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "components",
        type: "folder",
        children: [
          {
            name: "Header.tsx",
            type: "file",
          },
          {
            name: "Header.scss",
            type: "file",
          },
          {
            name: "Body.tsx",
            type: "file",
          },
          {
            name: "Footer.tsx",
            type: "file",
          },
        ],
      },
      {
        name: "index.tsx",
        type: "file",
      },
      {
        name: "index.scss",
        type: "file",
      },
    ],
  },
  {
    name: "favicon.ico",
    type: "file",
  },
  {
    name: "package.json",
    type: "file",
  },
];

export default function CodePage() {
  return (
    <PanelGroup direction="horizontal">
      <Panel minSize={0} defaultSize={20}>
        <Explorer files={files} />
      </Panel>

      <PanelResizeHandle direction="horizontal" />

      <Panel className="h-screen" minSize={50}>
        <PanelGroup direction="vertical">
          <FileTabs className="h-[2rem]" />

          <Panel minSize={50} defaultSize={80}>
            <Editor
              className="h-screen"
              height={"100vh"}
              defaultLanguage="javascript"
              theme="vs-dark"
              defaultValue={"span"}
            />
          </Panel>

          <PanelResizeHandle direction="vertical" />

          <Panel minSize={0} defaultSize={18}>
            <Xterm />
          </Panel>
        </PanelGroup>
      </Panel>
    </PanelGroup>
  );
}
