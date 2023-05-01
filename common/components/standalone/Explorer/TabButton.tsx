import FileIcon from "@/components/ui/FileIcon";
import { HTMLAttributes, MouseEvent, ReactElement } from "react";

export type TrailingIconBtn = {
  icon: ReactElement;
  onClick: () => void;
};

export type Props = {
  name: string;
  iconName: string;
  trailingIconBtns?: TrailingIconBtn[];
} & HTMLAttributes<HTMLButtonElement>;

const TabButton = ({ name, iconName, trailingIconBtns, ...props }: Props) => {
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
      className="group flex w-full items-center gap-1.5 rounded px-2 py-1 hover:bg-neutral-700 focus-visible:bg-neutral-700"
    >
      <FileIcon filename={iconName} className="w-4 shrink-0" />
      <span>{name}</span>

      <div className="ml-auto hidden gap-1.5 group-hover:flex">
        {trailingIconBtns &&
          trailingIconBtns.map((iconBtn, index) => (
            <span
              key={index}
              tabIndex={1}
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
