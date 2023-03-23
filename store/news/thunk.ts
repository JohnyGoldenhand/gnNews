import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { useEffect } from "react";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY_NEWS;

export const fetchNewsData = createAsyncThunk(
  "news/fetchNews",
  async (_, { getState }) => {
    const country = (getState() as RootState).news.currentCountry;
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
    );
    return response.data;
  }
);
