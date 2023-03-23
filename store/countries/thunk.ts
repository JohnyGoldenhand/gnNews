import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get(
      "https://restcountries.com/v3.1/subregion/central%20europe?fields=flag,name"
    );
    return response.data;
  }
);
