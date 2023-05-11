"use client";

// store
import { Provider } from "react-redux";
import { RootState, store } from "@/store";

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
import PanelResizeHandle from "@/ui/PanelResizeHandle";
import Xterm from "@/standalone/Xterm";
import PreviewWindow from "@/standalone/PreviewIWindow";
import WindowController from "@/standalone/WindowController";

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
            <Explorer />
          </Panel>

          <PanelResizeHandle direction="horizontal" />

          <Panel ref={codeGroupPanelRef} defaultSize={50} minSize={0}>
            <PanelGroup direction="vertical">
              <FileTabs />

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
    <Provider store={store}>
      <PanelRefsContextProvider>
        <CodePageContent />
      </PanelRefsContextProvider>
    </Provider>
  );
}
