import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./mainglobal";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
