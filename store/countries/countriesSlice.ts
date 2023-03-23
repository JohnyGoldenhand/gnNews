import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface InitialStateType {
  countries: any;
  status: string;
  error: string | undefined;
}

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/subregion/central%20europe,western%20europe?fields=flag`
    );
    return response.data;
  }
);

const initialState: InitialStateType = {
  countries: {},
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
