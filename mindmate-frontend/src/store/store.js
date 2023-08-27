import {configureStore} from "@reduxjs/toolkit";
import parentSlice from "./slices/parentSlice";

const store = configureStore({
    reducer: {
        parent: parentSlice
    }
})

export default store