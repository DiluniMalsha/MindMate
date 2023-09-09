import { configureStore } from "@reduxjs/toolkit";
import parentSlice from "./slices/parentSlice";
import childSlice from "./slices/childSlice";

export const store = configureStore({
  reducer: {
    parent: parentSlice,
    child: childSlice,
  },
});
