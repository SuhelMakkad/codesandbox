import { HTMLAttributes, ReactElement } from "react";

import { IoIosArrowDown } from "react-icons/io";

import FileIcon from "@/ui/FileIcon";

export type TrailingIconBtn = {
  icon: ReactElement;
  onClick: () => void;
};

export type Props = {
  name: string;
  iconName: string;
  type: "file" | "folder";
  trailingIconBtns?: TrailingIconBtn[];
  setName: (name: string) => void;
  submit: () => void;
} & HTMLAttributes<HTMLFormElement>;

const TabEditableButton = ({
  name,
  iconName,
  type,
  setName,
  submit,
  ...props
}: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      {...props}
      className={`group flex w-full items-center gap-1 rounded px-2 py-[0.2rem] text-neutral-300 hover:bg-neutral-800 hover:text-white focus-visible:bg-neutral-900 ${
        type === "folder" ? "" : "pl-6"
      }`}
    >
      {type === "folder" && (
        <IoIosArrowDown
          className={"shrink-0 -rotate-90 transition-transform"}
        />
      )}

      <FileIcon filename={iconName} className="w-4 shrink-0" />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={submit}
        autoFocus={true}
        className="text-star ml-0.5 grow truncate overflow-ellipsis rounded bg-transparent outline outline-2 outline-blue-400"
      />
    </form>
  );
};

export default TabEditableButton;
