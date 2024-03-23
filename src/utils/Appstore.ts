import { configureStore } from "@reduxjs/toolkit";
import useReducer from './userslice.ts'
import useReducer2 from './suggestionslice.ts'
import useReducer3 from './Postslice.ts'
export const store = configureStore({
    reducer:{
        user:useReducer,
        suggested:useReducer2,
        post:useReducer3
    }
})