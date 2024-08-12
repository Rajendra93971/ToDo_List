import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../feature/todoSlice";
const store=configureStore({reducer:todoSlice})
export default store;