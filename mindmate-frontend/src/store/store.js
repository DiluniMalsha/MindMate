import {configureStore} from "@reduxjs/toolkit";
import parentSlice from "./slices/parentSlice";
import childSlice from "./slices/childSlice";
import passwordSlice from "./slices/passwordSlice";
import dailyTimeTableSlice from "./slices/dailyTimeTableSlice";

const store = configureStore({
    reducer: {
        parent: parentSlice,
        child: childSlice,
        password: passwordSlice,
        dailyTimeTable: dailyTimeTableSlice,
    }
})

export default store