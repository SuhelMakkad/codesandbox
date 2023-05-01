import FileIcon from "@/components/ui/FileIcon";
import { HTMLAttributes } from "react";

export type Props = {
  name: string;
  iconName: string;
} & HTMLAttributes<HTMLButtonElement>;

const TabButton = ({ name, iconName, ...props }: Props) => {
  return (
    <button
      {...props}
      className="flex w-full items-center gap-1.5 rounded px-2 py-1 hover:bg-neutral-700"
    >
      <FileIcon filename={iconName} className="w-4" />
      <span>{name}</span>
    </button>
  );
};

export default TabButton;
