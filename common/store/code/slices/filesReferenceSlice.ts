import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { uuid } from "uuidv4";

export type FileType = {
  id: string;
  name: string;
  type: "folder" | "file";
  children?: FileType[];
  isActive?: boolean;
};

export interface FilesReferenceState {
  value: FileType;
}

export type AddFileArgs = PayloadAction<{
  folderId: string;
  file: FileType;
}>;

const initialState: FilesReferenceState = {
  value: {
    id: "root",
    name: "root",
    type: "folder",
    children: [
      {
        id: "1",
        name: "node_modules",
        type: "folder",
        children: [],
      },
      {
        id: "2",
        name: "src",
        type: "folder",
        children: [
          {
            id: "9",
            name: "index.scss",
            type: "file",
          },
          {
            id: "19",
            name: "state.ts",
            type: "file",
          },
          {
            id: "3",
            name: "components",
            type: "folder",
            children: [
              // {
              //   id: "4",
              //   name: "Header.tsx",
              //   type: "file",
              // },
              // {
              //   id: "5",
              //   name: "Header.scss",
              //   type: "file",
              // },
              // {
              //   id: "6",
              //   name: "Body.tsx",
              //   type: "file",
              // },
              {
                id: "7",
                name: "Footer.tsx",
                type: "file",
              },
            ],
          },
          {
            id: "8",
            name: "index.tsx",
            type: "file",
            isActive: true,
          },
        ],
      },
      // {
      //   id: "10",
      //   name: "favicon.ico",
      //   type: "file",
      // },
      // {
      //   id: "11",
      //   name: "package.json",
      //   type: "file",
      // },
    ],
  },
};

const addFileToFolder = (
  folderTree: FileType,
  folderId: string,
  file: FileType
) => {
  if (!folderTree.children) {
    folderTree.children = [];
  }

  if (folderTree.id === folderId && folderTree.type === "folder") {
    if (file.type === "folder" && !file.children) file.children = [];

    folderTree.children = [file, ...folderTree.children];
    return folderTree;
  }

  const newChildren = folderTree.children.map((folder) =>
    addFileToFolder(folder, folderId, file)
  ) as FileType[];

  folderTree.children = newChildren;

  return folderTree;
};

const deleteFileFromFolder = (parentFolder: FileType, fileId: string) => {
  const children = parentFolder.children;
  if (!children) return;

  for (let index = 0; index < children.length; index++) {
    const file = children[index];

    if (file.id === fileId) {
      children.splice(index, 1);
      return;
    }

    if (file.type === "folder") {
      deleteFileFromFolder(file, fileId);
    }
  }
};

export const filesReferenceSlice = createSlice({
  name: "filesReference",
  initialState,
  reducers: {
    createFile: (state, args: AddFileArgs) => {
      const folderTree = state.value;
      const payload = args.payload;
      const { folderId, file } = payload;

      addFileToFolder(folderTree, folderId, file);
    },

    deleteFile: (state, fileIdPayload: PayloadAction<string>) => {
      const folderTree = state.value;
      const fileId = fileIdPayload.payload;

      deleteFileFromFolder(folderTree, fileId);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createFile, deleteFile } = filesReferenceSlice.actions;

export default filesReferenceSlice.reducer;
