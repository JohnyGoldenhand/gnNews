import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news/slice";
import countriesReducer from "./countries/slice";
import sidebarReducer from "./sidebar/slice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    countries: countriesReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
