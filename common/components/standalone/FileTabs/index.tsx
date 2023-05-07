"use client";

import { MouseEvent, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectActiveFile,
  closeActiveFile,
} from "@/store/code/slices/activeFile";

import { VscChromeClose } from "react-icons/vsc";
import FileIcon from "@/ui/FileIcon";

import type { RootState } from "@/store";

const FileTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFiles = useSelector((state: RootState) => state.activeFiles);
  const dispatch = useDispatch();

  const handleClose = (e: MouseEvent, fileId: string) => {
    e.stopPropagation();
    dispatch(closeActiveFile(fileId));
  };

  const { activeFiles: fileIds, selectedFileId } = activeFiles.value;

  if (!fileIds) return <></>;

  return (
    <nav className="scroll-thin flex overflow-auto text-sm">
      {fileIds.map((file, index) => (
        <button
          key={file}
          onClick={() => dispatch(selectActiveFile(file))}
          className={`group relative flex items-center gap-2 py-2 pl-4 pr-3 transition-[background-color,color,opacity] duration-100 after:absolute after:left-0 after:right-0 after:top-0 after:h-[2px] after:bg-blue-400 after:transition-opacity ${
            file === selectedFileId
              ? "bg-transparent text-white after:opacity-100"
              : "bg-neutral-800 text-neutral-400 after:opacity-0  hover:bg-neutral-700/25 hover:text-neutral-200"
          }`}
        >
          <FileIcon filename={file} className="w-4 shrink-0" />
          {file}

          <div
            onClick={(e) => handleClose(e, file)}
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
