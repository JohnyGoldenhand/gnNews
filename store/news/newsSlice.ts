import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ArticleType {
  source: { id: number | null; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publisedAt: string;
}

interface NewsType {
  status?: string;
  totalResults?: number;
  articles?: Array<ArticleType>;
}

interface InitialStateType {
  data: NewsType;
  status: string;
  error: string | undefined;
}

// const initialState: NewsType = {
//   status: "ok",
//   totalResults: 10,
//   articles: [
//     {
//       source: {
//         id: null,
//         name: "remek",
//       },
//       author: "Remigiusz",
//       title: "test",
//       description: "example",
//       url: "https://www.cnbc.com/2023/03/22/trump-grand-jury-live-updates-awaiting-indictment-in-porn-star-payoff.html",
//       urlToImage:
//         "https://image.cnbcfm.com/api/v1/image/107213079-1679489229551-gettyimages-1248214899-TRUMP-IOWA.jpg?v=1679489455&w=1920&h=1080",
//       publisedAt: "2023-03-22T14:21:00Z",
//     },
//   ],
// };

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const fetchNewsData = createAsyncThunk("news/fetchNews", async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  return response.data;
});

const initialState: InitialStateType = {
  data: {},
  status: "idle",
  error: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    displayNews: (state) => {
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNewsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const SelectNews = (state: RootState) => state.news;
export const { displayNews } = newsSlice.actions;
export default newsSlice.reducer;
