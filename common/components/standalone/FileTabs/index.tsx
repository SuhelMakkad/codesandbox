"use client";

import { MouseEvent, useState } from "react";

import { VscChromeClose } from "react-icons/vsc";

import FileIcon from "@/ui/FileIcon";

export type Props = {
  files?: File[];
};

export type File = {
  name: string;
  isActive?: boolean;
};

const FileTabs = ({ files }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClose = (e: MouseEvent, index: number) => {
    e.stopPropagation();
  };

  if (!files) return <></>;

  return (
    <nav className="scroll-thin flex overflow-auto text-sm">
      {files.map((file, index) => (
        <button
          key={file.name}
          onClick={() => setActiveIndex(index)}
          className={`group relative flex items-center gap-2 py-2 pl-4 pr-3 transition-[background-color,color,opacity] duration-100 after:absolute after:left-0 after:right-0 after:top-0 after:h-[2px] after:bg-blue-400 after:transition-opacity ${
            index === activeIndex
              ? "bg-transparent text-white after:opacity-100"
              : "bg-neutral-800 text-neutral-400 after:opacity-0  hover:bg-neutral-700/25 hover:text-neutral-200"
          }`}
        >
          <FileIcon filename={file.name} className="w-4 shrink-0" />
          {file.name}

          <div
            onClick={(e) => handleClose(e, index)}
            className="rounded p-1 opacity-0 hover:bg-neutral-600 group-hover:opacity-100"
          >
            <VscChromeClose />
          </div>
        </button>
      ))}
    </nav>
  );
};

export default FileTabs;
