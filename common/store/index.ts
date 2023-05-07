import { configureStore } from "@reduxjs/toolkit";

import filesReferenceReducer from "@/store/code/slices/filesReferenceSlice";
import activeFilesReducer from "@/store/code/slices/activeFile";

export const store = configureStore({
  reducer: {
    filesReference: filesReferenceReducer,
    activeFiles: activeFilesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
