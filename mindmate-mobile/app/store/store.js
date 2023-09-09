import { configureStore } from "@reduxjs/toolkit";
import parentSlice from "./slices/parentSlice";

export const store = configureStore({
  reducer: {
    parent: parentSlice,
  },
});
