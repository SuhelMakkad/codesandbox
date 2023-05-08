import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const SIDE_PANELS = ["FILE_EXPLORER", "SEARCH", "SETTINGS"] as const;

export type Panel = (typeof SIDE_PANELS)[number];

export interface SidePanelState {
  value: {
    selectedPanel: Panel;
  };
}

const initialState: SidePanelState = {
  value: {
    selectedPanel: "FILE_EXPLORER",
  },
};

export const sidePanelSlice = createSlice({
  name: "sidePanel",
  initialState,
  reducers: {
    selectSidePanel: (state, fileId: PayloadAction<Panel>) => {
      state.value.selectedPanel = fileId.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectSidePanel } = sidePanelSlice.actions;

export default sidePanelSlice.reducer;
