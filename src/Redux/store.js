import { configureStore } from "@reduxjs/toolkit";
import calcSlice  from "./reducer";
export const store = configureStore({
    reducer: {
        calculator: calcSlice ,
    },
})