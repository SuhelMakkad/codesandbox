"use client;";

import { useState } from "react";

import { VscNewFolder, VscNewFile, VscTrash } from "react-icons/vsc";

import TabButton from "./TabButton";

export type File = {
  name: string;
  type: "folder" | "file";
  children?: File[];
};

export type Props = {
  files?: File[];
  name?: string;
  isFirst?: boolean;
};

const Explorer = ({ files, name, isFirst }: Props) => {
  const [isFolderOpen, setIsFolderOpen] = useState(true);

  if (!files) return <></>;

  return (
    <ul className="flex flex-col text-xs text-neutral-200">
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
                onClick: () => console.log("new file"),
              },
              {
                icon: <VscNewFolder />,
                onClick: () => console.log("new folder"),
              },
              {
                icon: <VscTrash />,
                onClick: () => console.log("delete"),
              },
            ]}
          />
        </li>
      )}

      {files.map((file) => (
        <li
          className={`${isFolderOpen ? "" : "hidden"} ${isFirst ? "" : "pl-2"}`}
          key={file.name}
        >
          {file.type === "folder" ? (
            <Explorer files={file.children} name={file.name} />
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
        </li>
      ))}
    </ul>
  );
};

export default Explorer;
