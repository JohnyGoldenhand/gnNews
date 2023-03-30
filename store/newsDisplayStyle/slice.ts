import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { StateType } from "./types";
import { NewsStyles } from "./types";

const initialState: StateType = {
  newsStyle: NewsStyles.tiles,
};

export const newsDisplayStyleSlice = createSlice({
  name: "newsDisplayStyle",
  initialState,
  reducers: {
    changeNewsStyle: (state, action) => {
      state.newsStyle = action.payload;
    },
  },
});

export const SelectNewsDisplayStyle = (state: RootState) =>
  state.newsDisplayStyle;
export const { changeNewsStyle } = newsDisplayStyleSlice.actions;
export default newsDisplayStyleSlice.reducer;
