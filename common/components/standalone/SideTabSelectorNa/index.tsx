"use client";

import { useState } from "react";
import { VscFiles, VscSearch, VscSettingsGear } from "react-icons/vsc";

const buttons = [
  {
    icon: <VscFiles />,
  },
  {
    icon: <VscSearch />,
  },
  {
    icon: <VscSettingsGear />,
  },
];
const SideTabSelectorNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="flex flex-col border-r border-r-neutral-600 bg-neutral-800 text-2xl text-neutral-400">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`relative px-2.5 py-3 transition-[color] duration-100 after:absolute after:bottom-0 after:left-0 after:top-0 after:w-[2px] after:bg-white after:transition-opacity ${
            index === activeIndex
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
