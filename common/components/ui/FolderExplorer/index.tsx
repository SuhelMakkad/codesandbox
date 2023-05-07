"use client";

import { useState, useMemo, useCallback } from "react";

import { VscNewFolder, VscNewFile, VscTrash } from "react-icons/vsc";

import AnimateHeight from "@/ui/AnimateHeight";
import TabButton from "./TabButton";
import TabEditableButton from "./TabEditableButton";

import type { FileType } from "@/store/code/slices/filesReferenceSlice";

export type Props = {
  id: string;
  name?: string;
  isFirst?: boolean;
  files?: FileType[];
  createNewFile: (
    folderId: string,
    type: "file" | "folder",
    name: string
  ) => void;
  deleteFolder: (fileId: string) => void;
  selectFile: (fileId: string) => void;
};

const Explorer = ({
  id,
  name,
  isFirst,
  files,
  selectFile,
  createNewFile,
  deleteFolder,
}: Props) => {
  const [isFolderOpen, setIsFolderOpen] = useState(true);
  const [newFile, setNewFile] = useState<{
    isVisible: boolean;
    name: string;
    type: "file" | "folder";
  }>({
    isVisible: false,
    name: "",
    type: "file",
  });

  if (!files) return <></>;

  const sortedFiles = useMemo(
    () => [...files].sort((a, b) => (a.type > b.type ? -1 : 1)),
    [files]
  );

  const handleNewFileCreateSubmit = () => {
    if (newFile.name) {
      createNewFile(id, newFile.type, newFile.name);
    }

    setIsFolderOpen(true);
    setNewFile({
      isVisible: false,
      name: "",
      type: "file",
    });
  };

  const folderTrailingIconBtns = useMemo(
    () => [
      {
        icon: <VscNewFile />,
        onClick: () =>
          setNewFile({
            isVisible: true,
            name: "",
            type: "file",
          }),
      },
      {
        icon: <VscNewFolder />,
        onClick: () =>
          setNewFile({
            isVisible: true,
            name: "",
            type: "folder",
          }),
      },
      {
        icon: <VscTrash />,
        onClick: () => deleteFolder(id),
      },
    ],
    [deleteFolder, newFile]
  );

  const getFileTrailingBtns = useCallback(
    (id: string) => [
      {
        icon: <VscTrash />,
        onClick: () => deleteFolder(id),
      },
    ],
    [deleteFolder]
  );

  return (
    <ul className="flex flex-col text-sm text-neutral-200">
      {/* Name of the folder or file */}
      {name && (
        <li>
          <TabButton
            name={name}
            isActive={isFolderOpen}
            iconName={isFolderOpen ? "folderOpen" : "folder"}
            type={"folder"}
            onClick={() => setIsFolderOpen((prev) => !prev)}
            trailingIconBtns={folderTrailingIconBtns}
          />
        </li>
      )}

      {/* Input field for new file or folder */}
      {newFile.isVisible && (
        <li className="pl-2">
          <TabEditableButton
            name={newFile.name}
            iconName={newFile.type === "folder" ? newFile.type : newFile.name}
            type={newFile.type}
            setName={(name) => setNewFile((prev) => ({ ...prev, name }))}
            submit={handleNewFileCreateSubmit}
          />
        </li>
      )}

      {/* folder children */}
      {sortedFiles.map((file) => (
        <li className={`${isFirst ? "" : "pl-2"}`} key={file.id}>
          <AnimateHeight isActive={isFolderOpen}>
            {file.type === "folder" ? (
              <Explorer
                id={file.id}
                name={file.name}
                files={file.children}
                selectFile={selectFile}
                createNewFile={createNewFile}
                deleteFolder={deleteFolder}
              />
            ) : (
              <TabButton
                type={"file"}
                name={file.name}
                iconName={file.name}
                onClick={() => selectFile(file.id)}
                trailingIconBtns={getFileTrailingBtns(file.id)}
              />
            )}
          </AnimateHeight>
        </li>
      ))}
    </ul>
  );
};

export default Explorer;
