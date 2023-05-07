import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type FileId = string | null;

export interface ActiveFileIdState {
  value: FileId;
}

const initialState: ActiveFileIdState = {
  value: null,
};

export const activeFileIdSlice = createSlice({
  name: "activeFileId",
  initialState,
  reducers: {
    setActiveId: (state, fileId: PayloadAction<FileId | null>) => {
      state.value = fileId.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveId } = activeFileIdSlice.actions;

export default activeFileIdSlice.reducer;
