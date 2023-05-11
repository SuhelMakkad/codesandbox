import { useSelector } from "react-redux";

import Explorer from "./Explorer";
import ProjectSearch from "./ProjectSearch";
import Settings from "./Settings";

import type { RootState } from "@/store";

const SideNav = () => {
  const activeTab = useSelector((state: RootState) => state.sidePanel);

  switch (activeTab.value.selectedPanel) {
    case "FILE_EXPLORER":
      return <Explorer />;

    case "SEARCH":
      return <ProjectSearch />;

    case "SETTINGS":
      return <Settings />;

    default:
      return <Explorer />;
  }
};

export default SideNav;
