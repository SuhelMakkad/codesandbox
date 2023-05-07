import { configureStore } from "@reduxjs/toolkit";

import filesReferenceReducer from "@/store/code/slices/filesReferenceSlice";

export const store = configureStore({
  reducer: {
    filesReference: filesReferenceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
