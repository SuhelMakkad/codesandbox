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

  const toggleButtons = [
    {
      id: "explorer",
      label: "explorer",
      onClick: () => {
        codeGroupPanelRef.current?.resize(0);
        previewWindowPanelRef.current?.resize(0);

        explorerPanelRef.current?.resize(100);
      },
    },
    {
      id: "console",
      label: "terminal",
      onClick: () => {
        previewWindowPanelRef.current?.resize(0);
        explorerPanelRef.current?.resize(0);

        monacoPanelRef.current?.resize(0);
        codeGroupPanelRef.current?.resize(100);
        consolePanelRef.current?.resize(100);
      },
    },
    {
      id: "monaco",
      label: "editor",
      onClick: () => {
        previewWindowPanelRef.current?.resize(0);
        explorerPanelRef.current?.resize(0);

        consolePanelRef.current?.resize(0);
        codeGroupPanelRef.current?.resize(100);
        monacoPanelRef.current?.resize(100);
      },
    },
    {
      id: "previewWindow",
      label: "browser",
      onClick: () => {
        explorerPanelRef.current?.resize(0);
        consolePanelRef.current?.resize(0);

        previewWindowPanelRef.current?.resize(100);
      },
    },
    {
      id: "all",
      label: "all",
      onClick: () => {
        previewWindowPanelRef.current?.resize(30);
        explorerPanelRef.current?.resize(20);
        codeGroupPanelRef.current?.resize(50);
        monacoPanelRef.current?.resize(70);
        consolePanelRef.current?.resize(30);
      },
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
