"use client";

// // store
// import { Provider } from "react-redux";
// import { store } from "@/store/code";

// context
import {
  PanelRefsContextProvider,
  usePanelRefs,
} from "@/context/PanelRefsContext";

// components
import Editor from "@monaco-editor/react";
import { Panel, PanelGroup } from "react-resizable-panels";

// default components
import PlaygroundHeader from "@/standalone/PlaygroundHeader";
import SideTabSelectorNav from "@/standalone/SideTabSelectorNa";
import Explorer from "@/standalone/Explorer";
import FileTabs from "@/standalone/FileTabs";
import PanelResizeHandle from "@/standalone/PanelResizeHandle";
import Xterm from "@/standalone/Xterm";
import PreviewWindow from "@/standalone/PreviewIWindow";
import WindowController from "@/standalone/WindowController";
import type { File } from "@/ui/FolderExplorer";

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

const CodePageContent = () => {
  const {
    explorerPanelRef,
    codeGroupPanelRef,
    monacoPanelRef,
    consolePanelRef,
    previewWindowPanelRef,
  } = usePanelRefs();

  return (
    <div className="flex min-h-screen flex-col">
      <PlaygroundHeader name="My Playground" />

      <div className="flex grow">
        <SideTabSelectorNav />

        <PanelGroup
          disablePointerEventsDuringResize={true}
          direction="horizontal"
          className="!h-auto grow"
        >
          <Panel ref={explorerPanelRef} defaultSize={20} minSize={0}>
            <Explorer files={files} />
          </Panel>

          <PanelResizeHandle direction="horizontal" />

          <Panel ref={codeGroupPanelRef} defaultSize={50} minSize={0}>
            <PanelGroup direction="vertical">
              <FileTabs files={activeFiles} />

              <Panel ref={monacoPanelRef} defaultSize={70} minSize={0}>
                <Editor
                  defaultLanguage="javascript"
                  theme="vs-dark"
                  defaultValue={"console.log('wassup world')"}
                />
              </Panel>

              <PanelResizeHandle direction="vertical" />

              <Panel ref={consolePanelRef} defaultSize={30} minSize={0}>
                <Xterm />
              </Panel>
            </PanelGroup>
          </Panel>

          <PanelResizeHandle direction="horizontal" />

          <Panel ref={previewWindowPanelRef} defaultSize={30} minSize={0}>
            <PreviewWindow />
          </Panel>
        </PanelGroup>
      </div>

      <WindowController />
    </div>
  );
};

export default function CodePage() {
  return (
    <PanelRefsContextProvider>
      <CodePageContent />
    </PanelRefsContextProvider>
  );
}
