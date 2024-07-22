import { configureStore, ReducerType } from "@reduxjs/toolkit";
import todoSlice from "../../features/todo/todoSlice";
// import { todoSlice } from "../features/todo/todoSlice";
export const store= configureStore(
    {
        reducer:todoSlice
    }
);