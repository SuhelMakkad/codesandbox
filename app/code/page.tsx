"use client";

import Editor from "@monaco-editor/react";
import { Panel, PanelGroup } from "react-resizable-panels";

import PlaygroundHeader from "@/standalone/PlaygroundHeader";
import SideTabSelectorNav from "@/standalone/SideTabSelectorNa";
import Explorer from "@/standalone/Explorer";
import FileTabs from "@/standalone/FileTabs";
import PanelResizeHandle from "@/standalone/PanelResizeHandle";
import Xterm from "@/standalone/Xterm";
import Accordion from "@/ui/Accordion";
import WindowController from "@/standalone/WindowController";

import type { File } from "@/standalone/Explorer";

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
        isActive: true,
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

const activeFiles = [
  {
    name: "index.tsx",
  },
  {
    name: "index.scss",
    isActive: true,
  },
  {
    name: "logo.svg",
  },
];

export default function CodePage() {
  return (
    <div>
      <PlaygroundHeader name="My Playground" />

      <div className="flex">
        <SideTabSelectorNav />

        <PanelGroup direction="horizontal">
          <Panel minSize={0} defaultSize={20}>
            <Accordion label="code">
              <Explorer files={files} isFirst={true} />
            </Accordion>
          </Panel>

          <PanelResizeHandle direction="horizontal" />

          <Panel className="h-screen" minSize={50}>
            <PanelGroup direction="vertical">
              <FileTabs files={activeFiles} />

              <Panel minSize={50} defaultSize={80}>
                <Editor
                  defaultLanguage="javascript"
                  theme="vs-dark"
                  defaultValue={"console.log('wassup world')"}
                />
              </Panel>

              <PanelResizeHandle direction="vertical" />

              <Panel minSize={0} defaultSize={18}>
                <Xterm />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>

      <WindowController />
    </div>
  );
}
