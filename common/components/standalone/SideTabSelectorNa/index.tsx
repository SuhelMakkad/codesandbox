import { useDispatch, useSelector } from "react-redux";
import { selectSidePanel } from "@/store/code/slices/sidePanel";

import { VscFiles, VscSearch, VscSettingsGear } from "react-icons/vsc";

import type { RootState } from "@/store";
import type { Panel } from "@/store/code/slices/sidePanel";

export type Button = {
  id: Panel;
  icon: JSX.Element;
};

const buttons: Button[] = [
  {
    id: "FILE_EXPLORER",
    icon: <VscFiles />,
  },
  {
    id: "SEARCH",
    icon: <VscSearch />,
  },
  {
    id: "SETTINGS",
    icon: <VscSettingsGear />,
  },
];
const SideTabSelectorNav = () => {
  const activeTab = useSelector((state: RootState) => state.sidePanel);
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col border-r border-r-neutral-600 bg-neutral-800 text-2xl text-neutral-400">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => dispatch(selectSidePanel(button.id))}
          className={`relative px-2.5 py-3 transition-[color] duration-100 after:absolute after:bottom-0 after:left-0 after:top-0 after:w-[2px] after:bg-white after:transition-opacity ${
            button.id === activeTab.value.selectedPanel
              ? "text-white after:opacity-100"
              : "after:opacity-0"
          }`}
        >
          {button.icon}
        </button>
      ))}
    </nav>
  );
};

export default SideTabSelectorNav;
