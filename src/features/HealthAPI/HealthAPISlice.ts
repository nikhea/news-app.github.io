import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface NewsAPIResavation {
  news: string[];
  loading: boolean;
  success: boolean;
  errormessage?: null | any;
}
const initialState: NewsAPIResavation = {
  news: [],
  loading: false,
  success: false,
  errormessage: null,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    reset: (state, action: PayloadAction<string>) => initialState,
    loadNews(state) {
      state.loading = true;
      state.errormessage = null;
    },
    loadNewsError(state, action) {
      state.loading = false;
      state.success = false;
      state.errormessage = action.payload;
    },
    loadNewsSuccess(state, action) {
      state.loading = false;
      state.success = true;
      state.errormessage = null;
      state.news = action.payload
      
    },
  },
});
export const { reset, loadNewsSuccess, loadNewsError, loadNews } =
  newsSlice.actions;

export default newsSlice.reducer;
