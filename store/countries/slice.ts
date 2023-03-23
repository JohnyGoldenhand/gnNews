import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { fetchCountries } from "./thunk";
import { StateType } from "./types";

const initialState: StateType = {
  countries: [],
  status: "idle",
  error: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    displayCountries: (state) => {
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.countries = action.payload;
        state.error = "";
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const SelectCountries = (state: RootState) => state.countries;
export const { displayCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
