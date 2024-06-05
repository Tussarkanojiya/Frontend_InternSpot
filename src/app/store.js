import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Userslice"
export const store=configureStore({
    reducer:{
        user:userReducer,
    }
})