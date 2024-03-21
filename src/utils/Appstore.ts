import { configureStore } from "@reduxjs/toolkit";
import useReducer from './userslice.ts'
import useReducer2 from './suggestionslice.ts'
export const store = configureStore({
    reducer:{
        user:useReducer,
        suggested:useReducer2
    }
})