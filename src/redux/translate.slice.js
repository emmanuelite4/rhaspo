import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  handleGetTextSpeech,
  handleTranlateLanguage,
} from "./translate.helper";

const initialState = {
  currentLang: "English",
  translatedLanguage: "Spanish",
  currentText: "",
  tranlatedText: "",
  text: "Nothing to translate",
  audioURi: "",
  error: "",
  type: "",
};

export const fetchAudioURi = createAsyncThunk(
  "translate/getAudioURi",
  async (text) => await handleGetTextSpeech(text)
);

export const fetchTranlatedLanguage = createAsyncThunk(
  "tranlate/tranlateLanguage",
  async (text, lang) => {
    await handleTranlateLanguage(text, lang);
  }
);

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    setCurrentText: (state, action) => {
      state.currentText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAudioURi.fulfilled, (state, action) => {
      console.log(action.payload);
      state.audioURi = action.payload;
    });
    builder.addCase(fetchAudioURi.rejected, (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
    });
    builder.addCase(fetchTranlatedLanguage.fulfilled, (state, action) => {
      console.log(action.payload);
      state.text = action.payload;
    });
  },
});

export default translateSlice.reducer;

export const { setCurrentText } = translateSlice.actions;
