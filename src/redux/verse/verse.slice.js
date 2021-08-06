import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleFetchVerseRandom, handleTranslateVerse } from "./verse.helper";

const initialState = {
  defaultVerse: { text: "", reference: "" },
  translatedVerse: { text: "", reference: "" },
  loading: false,
  error: false,
};

export const fetchVerseRandom = createAsyncThunk(
  "verse/getVerse",
  async () => await handleFetchVerseRandom()
);

export const fetchTranslatedVerse = createAsyncThunk(
  "verse/getContent",
  async (data) => {
    return await handleTranslateVerse(data);
  }
);

const verseSlice = createSlice({
  name: "verse",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVerseRandom.fulfilled, (state, action) => {
      state.defaultLang = action.payload;
      state.translatedVerse = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchVerseRandom.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTranslatedVerse.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTranslatedVerse.fulfilled, (state, action) => {
      console.log(action.payload);
      state.translatedVerse = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTranslatedVerse.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default verseSlice.reducer;
