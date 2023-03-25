import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { StateType } from "./types";

const initialState: StateType = {
  isNewsStyleList: false,
};

export const newsDisplayStyleSlice = createSlice({
  name: "newsDisplayStyle",
  initialState,
  reducers: {
    changeStyleForList: (state, action) => {
      state.isNewsStyleList = action.payload;
    },
  },
});

export const SelectNewsDisplayStyle = (state: RootState) =>
  state.newsDisplayStyle;
export const { changeStyleForList } = newsDisplayStyleSlice.actions;
export default newsDisplayStyleSlice.reducer;
