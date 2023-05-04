import { useRef, createContext, useContext } from "react";

import type { RefObject } from "react";
import type { ImperativePanelHandle } from "react-resizable-panels";
import type { ReactChildren } from "@/utils/type";

export const PANELS = [
  "explorer",
  "codeGroup",
  "monaco",
  "console",
  "previewWindow",
] as const;

export type PanelRefKey = `${(typeof PANELS)[number]}PanelRef`;
export type ContextValue = RefObject<ImperativePanelHandle>;
export type ContextType = Record<PanelRefKey, ContextValue>;

export const PanelRefsContext = createContext<ContextType | null>(null);

export type ProviderProps = {
  children: ReactChildren;
};

export const PanelRefsContextProvider = ({ children }: ProviderProps) => {
  const value = PANELS.reduce((acc, panel) => {
    acc[`${panel}PanelRef`] = useRef(null);
    return acc;
  }, {} as ContextType);

  return (
    <PanelRefsContext.Provider value={value}>
      {children}
    </PanelRefsContext.Provider>
  );
};

export const usePanelRefs = () => {
  const value = useContext(PanelRefsContext);

  if (!value) {
    throw new Error(
      "Can not use usePanelRefs outside of PanelRefsContextProvider"
    );
  }

  return value;
};
