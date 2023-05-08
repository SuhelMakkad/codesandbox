import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ActiveFileState {
  value: {
    selectedFileId: string | null;
    activeFiles: string[];
  };
}

const initialState: ActiveFileState = {
  value: {
    selectedFileId: null,
    activeFiles: [],
  },
};

const pushActiveFile = (activeFiles: string[], fileId: string) => {
  if (activeFiles.includes(fileId)) return;

  activeFiles.push(fileId);
};

const removeActiveFile = (activeFiles: string[], fileId: string) => {
  const index = activeFiles.indexOf(fileId);
  if (index === -1) return;

  activeFiles.splice(index, 1);
};

export const activeFileSlice = createSlice({
  name: "activeFile",
  initialState,
  reducers: {
    selectActiveFile: (state, fileId: PayloadAction<string | null>) => {
      state.value.selectedFileId = fileId.payload;
      if (fileId.payload)
        pushActiveFile(state.value.activeFiles, fileId.payload);
    },

    addToActiveFile: (state, fileId: PayloadAction<string>) => {
      pushActiveFile(state.value.activeFiles, fileId.payload);
    },

    closeActiveFile: (state, fileId: PayloadAction<string>) => {
      removeActiveFile(state.value.activeFiles, fileId.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectActiveFile, addToActiveFile, closeActiveFile } =
  activeFileSlice.actions;

export default activeFileSlice.reducer;
