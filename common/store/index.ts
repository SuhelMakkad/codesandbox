import { configureStore } from "@reduxjs/toolkit";

import filesReferenceReducer from "@/store/code/slices/filesReferenceSlice";
import activeFileIdReducer from "@/store/code/slices/activeFileId";

export const store = configureStore({
  reducer: {
    filesReference: filesReferenceReducer,
    activeFileId: activeFileIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
