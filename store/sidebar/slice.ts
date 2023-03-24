import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { StateType } from "./types";

const initialState: StateType = {
  isSidebarWrapped: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    wrapSidebar: (state, action) => {
      state.isSidebarWrapped = action.payload;
    },
  },
 
});

export const SelectSidebar = (state: RootState) => state.sidebar;
export const { wrapSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
