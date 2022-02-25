import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features/index";
export const store = configureStore({
  reducer,
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
