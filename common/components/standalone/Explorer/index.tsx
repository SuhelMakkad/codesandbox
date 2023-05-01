"use client;";

import { useState } from "react";
import FileIcon from "@/ui/FileIcon";
import TabButton from "./TabButton";

export type File = {
  name: string;
  type: "folder" | "file";
  children?: File[];
};

export type Props = {
  files?: File[];
  name?: string;
};

const Explorer = ({ files, name }: Props) => {
  const [isFolderOpen, setIsFolderOpen] = useState(true);

  if (!files) return <></>;

  return (
    <ul className="flex flex-col text-sm text-neutral-200">
      {name && (
        <li>
          <TabButton
            onClick={() => setIsFolderOpen((prev) => !prev)}
            iconName={isFolderOpen ? "folderOpen" : "folder"}
            name={name}
          />
        </li>
      )}

      {isFolderOpen &&
        files.map((file) => (
          <li className="pl-2 " key={file.name}>
            {file.type === "folder" ? (
              <Explorer files={file.children} name={file.name} />
            ) : (
              <TabButton iconName={file.name} name={file.name} />
            )}
          </li>
        ))}
    </ul>
  );
};

export default Explorer;
