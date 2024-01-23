import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../redux/TodoSlice";
export const store = configureStore({
  reducer: {
    Todo: TodoSlice,
  },
});
