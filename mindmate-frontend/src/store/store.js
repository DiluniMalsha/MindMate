import {configureStore} from "@reduxjs/toolkit";
import parentSlice from "./slices/parentSlice";
import childSlice from "./slices/childSlice";
import passwordSlice from "./slices/passwordSlice";

const store = configureStore({
    reducer: {
        parent: parentSlice,
        child : childSlice,
        password:passwordSlice,
    }
})

export default store