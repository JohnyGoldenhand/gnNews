import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { fetchNewsData } from "./thunk";
import { InitialStateType } from "./types";

const initialState: InitialStateType = {
  news: {},
  status: "idle",
  error: "",
  currentCountry: "pl",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    changeCurrentCountry: (state, action) => {
      state.currentCountry = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNewsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = action.payload;
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const SelectNews = (state: RootState) => state.news;
export const { changeCurrentCountry } = newsSlice.actions;
export default newsSlice.reducer;
