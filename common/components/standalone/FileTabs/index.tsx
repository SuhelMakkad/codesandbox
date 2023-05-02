"use client";

import FileIcon from "@/ui/FileIcon";
import { useState } from "react";

export type Props = {
  files?: File[];
};

export type File = {
  name: string;
  isActive?: boolean;
};

const FileTabs = ({ files }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!files) return <></>;

  return (
    <nav>
      <ol className="flex text-sm">
        {files.map((file, index) => (
          <li
            key={file.name}
            className={`relative transition-[background-color,color,opacity] duration-100 after:absolute after:left-0 after:right-0 after:top-0 after:h-[2px] after:bg-blue-400 after:transition-opacity ${
              index === activeIndex
                ? "bg-transparent text-white after:opacity-100"
                : "bg-neutral-800 text-neutral-400 after:opacity-0  hover:bg-neutral-700/25 hover:text-neutral-200"
            } ${index === files.length - 1 ? "border-r-0" : ""}`}
          >
            <button
              onClick={() => setActiveIndex(index)}
              className="flex items-center gap-2 px-4 py-1.5"
            >
              <FileIcon filename={file.name} className="w-4 shrink-0" />
              {file.name}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default FileTabs;
