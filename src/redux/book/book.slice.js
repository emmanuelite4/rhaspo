import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  handleFetchBook,
  handleFetchBookDetail,
  handleFetchBooks,
  handleTranslateBook,
} from "./book.helper";

const initialState = {
  books: [],
  book: {},
  contents: [],
};

export const fetchBooks = createAsyncThunk(
  "book/getBooks",
  async () => await handleFetchBooks()
);

export const fetchBook = createAsyncThunk(
  "book/getBook",
  async (documentID) => await handleFetchBook(documentID)
);

export const fetchBookContent = createAsyncThunk(
  "book/getDetail",
  async (documentID) => await handleFetchBookDetail(documentID)
);

export const fetchTranslatedBook = createAsyncThunk(
  "book/getTranslated",
  async (content) => await handleTranslateBook(content)
);

// export const fetchTranslatedVerse = createAsyncThunk(
//   "verse/getContent",
//   async (data) => {
//     return await handleTranslateVerse(data);
//   }
// );

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //   builder.addCase(fetchVerseRandom.fulfilled, (state, action) => {
    //     state.defaultLang = action.payload;
    //     state.translatedVerse = action.payload;
    //     state.loading = false;
    //   });
    //   builder.addCase(fetchVerseRandom.pending, (state, action) => {
    //     state.loading = true;
    //   });
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      console.log(action.payload);
      state.books = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      console.log(action.payload);

      state.error = action.payload;
      state.loading = false;
    });
    //
    builder.addCase(fetchBook.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      console.log(action.payload);
      state.book = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchBook.rejected, (state, action) => {
      console.log(action.payload);

      state.error = action.payload;
      state.loading = false;
    });
    //
    builder.addCase(fetchBookContent.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchBookContent.fulfilled, (state, action) => {
      console.log(action.payload);
      state.contents = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchBookContent.rejected, (state, action) => {
      console.log(action.payload);

      state.error = action.payload;
      state.loading = false;
    });
    //
    builder.addCase(fetchTranslatedBook.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTranslatedBook.fulfilled, (state, action) => {
      console.log(action.payload);
      state.book = action.payload.book;
      state.contents = action.payload.contents;
      state.books = action.payload.books;
      state.loading = false;
    });
    builder.addCase(fetchTranslatedBook.rejected, (state, action) => {
      console.log(action.payload);

      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default bookSlice.reducer;
