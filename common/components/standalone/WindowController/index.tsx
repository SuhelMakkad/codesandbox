import { usePanelRefs } from "@/context/PanelRefsContext";
import type { ContextValue } from "@/context/PanelRefsContext";

const WindowController = () => {
  const {
    explorerPanelRef,
    codeGroupPanelRef,
    monacoPanelRef,
    consolePanelRef,
    previewWindowPanelRef,
  } = usePanelRefs();

  const collapseAll = () => {
    explorerPanelRef.current?.resize(0);
    codeGroupPanelRef.current?.resize(0);
    previewWindowPanelRef.current?.resize(0);
  };

  const openAll = () => {
    explorerPanelRef.current?.resize(20);
    codeGroupPanelRef.current?.resize(50);
    previewWindowPanelRef.current?.resize(30);
    monacoPanelRef.current?.resize(70);
    consolePanelRef.current?.resize(30);
  };

  const togglePanel = (panelRef: ContextValue, id: string) => {
    if (!panelRef.current) return;

    collapseAll();
    const panel = panelRef.current;
    if (id === "editor" || id === "console") {
      codeGroupPanelRef.current?.resize(100);
    }

    panel.resize(100);
  };

  const toggleButtons = [
    {
      id: "explorer",
      label: "explorer",
      onClick: () => togglePanel(explorerPanelRef, "explorer"),
    },
    {
      id: "console",
      label: "terminal",
      onClick: () => togglePanel(consolePanelRef, "terminal"),
    },
    {
      id: "monaco",
      label: "editor",
      onClick: () => togglePanel(monacoPanelRef, "monaco"),
    },
    {
      id: "previewWindow",
      label: "browser",
      onClick: () => togglePanel(previewWindowPanelRef, "previewWindow"),
    },
    {
      id: "all",
      label: "all",
      onClick: () => openAll(),
    },
  ];

  return (
    <footer className="mr-2 flex items-center justify-end border-b border-t border-neutral-600 text-sm text-neutral-200">
      {toggleButtons.map((button) => (
        <button
          key={button.id}
          onClick={button.onClick}
          className="px-2 py-1 capitalize transition-colors hover:bg-neutral-800 hover:text-neutral-50"
        >
          {button.label}
        </button>
      ))}
    </footer>
  );
};

export default WindowController;
