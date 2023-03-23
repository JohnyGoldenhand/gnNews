import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news/newsSlice";
import countriesReducer from "./countries/countriesSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
