import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY_NEWS;

export const fetchNewsData = createAsyncThunk(
  "news/fetchNews",
  async (country: string) => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
    );
    return response.data;
  }
);
