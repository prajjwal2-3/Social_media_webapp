import { configureStore } from "@reduxjs/toolkit";
import useReducer from './userslice.ts'
export const store = configureStore({
    reducer:{
        user:useReducer
    }
})