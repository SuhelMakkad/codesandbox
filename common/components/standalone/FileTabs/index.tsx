"use client";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  selectActiveFile,
  closeActiveFile,
} from "@/store/code/slices/activeFile";
import { collectFileDetailsFromId } from "@/store/code/slices/filesReferenceSlice";

import { VscChromeClose } from "react-icons/vsc";
import FileIcon from "@/ui/FileIcon";

import type { MouseEvent } from "react";
import type { RootState } from "@/store";

const activeFileDetails = (state: RootState) => {
  const fileReference = state.filesReference.value;
  const activeFiles = state.activeFiles.value.activeFiles;

  const fileDetails = new Map<string, { name: string }>();
  collectFileDetailsFromId(fileReference, activeFiles, fileDetails);

  return fileDetails;
};

const FileTabs = () => {
  const activeFiles = useSelector((state: RootState) => state.activeFiles);
  const fileDetails = useSelector(activeFileDetails);

  const dispatch = useDispatch();

  const handleClose = (e: MouseEvent, fileId: string) => {
    e.stopPropagation();
    dispatch(closeActiveFile(fileId));
  };

  const { activeFiles: fileIds, selectedFileId } = activeFiles.value;

  useEffect(() => {
    const tab = document.getElementById(`tab-btn-${selectedFileId}`);
    if (!tab) return;

    tab.scrollIntoView();
  }, [selectedFileId]);

  if (!fileIds) return <></>;

  return (
    <nav className="scroll-thin flex min-h-[2.375rem] overflow-auto scroll-smooth text-sm">
      {fileIds.map((fileId) => (
        <button
          id={`tab-btn-${fileId}`}
          key={fileId}
          onClick={() => dispatch(selectActiveFile(fileId))}
          className={`group relative flex items-center gap-2 py-2 pl-4 pr-3 transition-[background-color,color,opacity] duration-100 after:absolute after:left-0 after:right-0 after:top-0 after:h-[2px] after:bg-blue-400 after:transition-opacity ${
            fileId === selectedFileId
              ? "bg-transparent text-white after:opacity-100"
              : "bg-neutral-800 text-neutral-400 after:opacity-0  hover:bg-neutral-700/25 hover:text-neutral-200"
          }`}
        >
          <FileIcon
            filename={fileDetails.get(fileId)?.name || ""}
            className="w-4 shrink-0"
          />
          {fileDetails.get(fileId)?.name}

          <div
            onClick={(e) => handleClose(e, fileId)}
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
