import { HTMLAttributes, MouseEvent, ReactElement } from "react";

import { IoIosArrowDown } from "react-icons/io";

import FileIcon from "@/components/ui/FileIcon";

export type TrailingIconBtn = {
  icon: ReactElement;
  onClick: () => void;
};

export type Props = {
  name: string;
  iconName: string;
  type: "file" | "folder";
  isActive?: boolean;
  trailingIconBtns?: TrailingIconBtn[];
} & HTMLAttributes<HTMLButtonElement>;

const TabButton = ({
  name,
  iconName,
  isActive,
  type,
  trailingIconBtns,
  ...props
}: Props) => {
  const handleTrialingBtnClick = (
    e: MouseEvent<HTMLSpanElement>,
    trailingIconIndex: number
  ) => {
    if (!trailingIconBtns) return;

    e.stopPropagation();
    trailingIconBtns[trailingIconIndex].onClick();
  };

  return (
    <button
      {...props}
      className={`group flex w-full items-center gap-1 rounded px-2 py-[0.2rem] text-neutral-300 hover:bg-neutral-700 hover:text-white focus-visible:bg-neutral-900 ${
        type === "folder" ? "" : "pl-6"
      }`}
    >
      {type === "folder" && (
        <IoIosArrowDown
          className={`${
            isActive ? "" : "-rotate-90"
          } shrink-0 transition-transform`}
        />
      )}

      <FileIcon filename={iconName} className="w-4 shrink-0" />
      <span className="ml-0.5">{name}</span>

      <div className="ml-auto hidden gap-1.5 group-hover:flex">
        {trailingIconBtns &&
          trailingIconBtns.map((iconBtn, index) => (
            <span
              key={index}
              className="text-stone-200"
              onClick={(e) => handleTrialingBtnClick(e, index)}
            >
              {iconBtn.icon}
            </span>
          ))}
      </div>
    </button>
  );
};

export default TabButton;