import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface NewsAPIResavation {
  news: string[];
  loading: boolean;
  success: boolean;
  errormessage: null;
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
    reset: (state, action: PayloadAction<string>) => {
      state.errormessage = null;
      state.success = false;
      state.loading = false;
    },
  },
  extraReducers: () => {},
});
export const { reset } = newsSlice.actions;

export default newsSlice.reducer;
