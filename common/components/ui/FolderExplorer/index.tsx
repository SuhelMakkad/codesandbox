"use client";

import { useState, useMemo } from "react";

import { VscNewFolder, VscNewFile, VscTrash } from "react-icons/vsc";

import AnimateHeight from "@/ui/AnimateHeight";
import TabButton from "./TabButton";
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
};

const Explorer = ({
  id,
  name,
  isFirst,
  files,
  createNewFile,
  deleteFolder,
}: Props) => {
  const [isFolderOpen, setIsFolderOpen] = useState(true);

  if (!files) return <></>;

  const sortedFiles = useMemo(
    () => [...files].sort((a, b) => (a.type > b.type ? -1 : 1)),
    [files]
  );

  return (
    <ul className="flex flex-col text-sm text-neutral-200">
      {name && (
        <li>
          <TabButton
            name={name}
            isActive={isFolderOpen}
            iconName={isFolderOpen ? "folderOpen" : "folder"}
            type={"folder"}
            onClick={() => setIsFolderOpen((prev) => !prev)}
            trailingIconBtns={[
              {
                icon: <VscNewFile />,
                onClick: () => createNewFile(id, "file", "new file"),
              },
              {
                icon: <VscNewFolder />,
                onClick: () => createNewFile(id, "folder", "new folder"),
              },
              {
                icon: <VscTrash />,
                onClick: () => deleteFolder(id),
              },
            ]}
          />
        </li>
      )}

      {sortedFiles.map((file) => (
        <li className={`${isFirst ? "" : "pl-2"}`} key={file.id}>
          <AnimateHeight isActive={isFolderOpen}>
            {file.type === "folder" ? (
              <Explorer
                id={file.id}
                name={file.name}
                files={file.children}
                createNewFile={createNewFile}
                deleteFolder={deleteFolder}
              />
            ) : (
              <TabButton
                type={"file"}
                iconName={file.name}
                name={file.name}
                trailingIconBtns={[
                  {
                    icon: <VscTrash />,
                    onClick: () => console.log("delete"),
                  },
                ]}
              />
            )}
          </AnimateHeight>
        </li>
      ))}
    </ul>
  );
};

export default Explorer;
