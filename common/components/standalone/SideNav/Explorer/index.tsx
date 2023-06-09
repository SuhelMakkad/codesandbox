import { v4 as uuid } from "uuid";

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  createFile,
  deleteFile,
} from "@/store/code/slices/filesReferenceSlice";
import {
  selectActiveFile,
  closeActiveFile,
} from "@/store/code/slices/activeFile";

import { VscNewFolder, VscNewFile, VscCloudDownload } from "react-icons/vsc";

import Accordion from "@/ui/Accordion";
import FolderExplorer from "@/ui/FolderExplorer";
import TabEditableButton from "@/ui/FolderExplorer/TabEditableButton";

import type { MouseEvent } from "react";
import type { RootState } from "@/store";
import type { FileType } from "@/store/code/slices/filesReferenceSlice";

export type Props = {
  files?: FileType[];
};

const Explorer = () => {
  const [newFile, setNewFile] = useState<{
    isVisible: boolean;
    name: string;
    type: "file" | "folder";
  }>({
    isVisible: false,
    name: "",
    type: "file",
  });

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
    dispatch(selectActiveFile(file.id));
  };

  const deleteFolder = (fileId: string) => {
    dispatch(deleteFile(fileId));
    dispatch(closeActiveFile(fileId));
  };

  const selectFile = (fileId: string) => {
    dispatch(selectActiveFile(fileId));
  };

  const handleNewFileCreateSubmit = () => {
    if (newFile.name) {
      createNewFile("root", newFile.type, newFile.name);
    }

    setNewFile({
      isVisible: false,
      name: "",
      type: "file",
    });
  };

  const buttons = [
    {
      icon: <VscNewFile />,
      label: "Create New File",
      onClick: (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setNewFile({
          isVisible: true,
          name: "",
          type: "file",
        });
      },
    },
    {
      icon: <VscNewFolder />,
      label: "Create New Folder",
      onClick: (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setNewFile({
          isVisible: true,
          name: "",
          type: "folder",
        });
      },
    },
    {
      icon: <VscCloudDownload />,
      label: "Download Playground",
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
      <>
        {/* Input field for new file or folder */}
        {newFile.isVisible && (
          <div className="pl-1.5">
            <TabEditableButton
              name={newFile.name}
              iconName={newFile.type === "folder" ? "folder" : newFile.name}
              type={newFile.type}
              setName={(name) => setNewFile((prev) => ({ ...prev, name }))}
              submit={handleNewFileCreateSubmit}
            />
          </div>
        )}

        {filesReference.value.children && (
          <FolderExplorer
            id="root"
            files={filesReference.value.children}
            selectFile={selectFile}
            createNewFile={createNewFile}
            deleteFolder={deleteFolder}
          />
        )}
      </>
    </Accordion>
  );
};

export default Explorer;
