"use client;";

import { useState } from "react";
import FileIcon from "@/ui/FileIcon";

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
          <button
            onClick={() => setIsFolderOpen((prev) => !prev)}
            className="flex w-full items-center gap-1.5 rounded px-2 py-1 hover:bg-neutral-700"
          >
            <FileIcon
              filename={isFolderOpen ? "folderOpen" : "folder"}
              className="w-4"
            />
            <span>{name}</span>
          </button>
        </li>
      )}

      {isFolderOpen &&
        files.map((file) => (
          <li className="pl-2 " key={file.name}>
            {file.type === "folder" ? (
              <Explorer files={file.children} name={file.name} />
            ) : (
              <button className="flex w-full items-center gap-1.5 rounded px-2 py-1 hover:bg-neutral-700">
                <FileIcon filename={file.name} className="w-4" />
                <span>{file.name}</span>
              </button>
            )}
          </li>
        ))}
    </ul>
  );
};

export default Explorer;
