import { v4 as uuid } from "uuid";

import { useSelector, useDispatch } from "react-redux";
import {
  createFile,
  deleteFile,
} from "@/store/code/slices/filesReferenceSlice";

import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { VscNewFolder, VscNewFile } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";

import Accordion from "@/ui/Accordion";
import FolderExplorer from "@/ui/FolderExplorer";

import type { MouseEvent } from "react";
import type { RootState } from "@/store";
import type { FileType } from "@/store/code/slices/filesReferenceSlice";

export type Props = {
  files?: FileType[];
};

const Explorer = () => {
  const filesReference = useSelector(
    (state: RootState) => state.filesReference
  );
  const dispatch = useDispatch();

  const createNewFile = (
    folderId: string,
    type: "file" | "folder",
    name: string
  ) => {
    const file: FileType = { id: uuid(), name, type };
    dispatch(createFile({ file, folderId }));
  };

  const deleteFolder = (fileId: string) => {
    dispatch(deleteFile(fileId));
  };

  const buttons = [
    {
      icon: <VscNewFile />,
      label: "create new file",
      onClick: (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        const file: FileType = {
          id: uuid(),
          name: "test.ts",
          type: "file",
        };
        dispatch(createFile({ file, folderId: "2" }));
      },
    },
    {
      icon: <VscNewFolder />,
      label: "create new folder",
      onClick: (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        const file: FileType = {
          id: uuid(),
          name: "test.ts",
          type: "folder",
          children: [],
        };
        dispatch(createFile({ file, folderId: "2" }));
      },
    },
    {
      icon: <TbLayoutNavbarCollapse />,
      label: "collapse all open folders",
      onClick: (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
      },
    },
    {
      icon: <BsThreeDotsVertical />,
      label: "more options",
      onClick: (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
      },
    },
  ];

  return (
    <Accordion
      label={
        <div className="flex justify-between gap-2 text-neutral-200">
          <span className="font-semibold">code</span>

          <div className="flex gap-2 text-base transition-[color]">
            {buttons.map((button, index) => (
              <button
                key={index}
                title={button.label}
                className="hover:text-neutral-100"
                onClick={button.onClick}
              >
                {button.icon}
              </button>
            ))}
          </div>
        </div>
      }
    >
      {filesReference.value.children ? (
        <FolderExplorer
          id="root"
          files={filesReference.value.children}
          createNewFile={createNewFile}
          deleteFolder={deleteFolder}
        />
      ) : (
        <></>
      )}
    </Accordion>
  );
};

export default Explorer;
