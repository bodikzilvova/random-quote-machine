import { createSlice } from "@reduxjs/toolkit";
import { fetchQuotes } from "./quotesOperation";

const quotesInitialState = {
  quote: "",
  author: "",
  error: null,
};

const quoteSlice = createSlice({
  name: "quote",
  initialState: quotesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.quote = action.payload.quote;
        state.author = action.payload.author;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default quoteSlice.reducer;
export const selectQuote = (state) => state.quotes.quote;
export const selectAuthor = (state) => state.quotes.author;
export const selectQuoteError = (state) => state.quotes.error;