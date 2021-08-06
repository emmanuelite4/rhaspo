import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleTextToSpeech } from "../../utils/helper";
import { handleTranlateLanguage } from "./translate.helper";

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
  "translate/translateAudio",
  async ({ text, lang }) => await handleTextToSpeech({ text, lang })
);

export const fetchTranlatedLanguage = createAsyncThunk(
  "tranlate/tranlateLanguage",
  async ({ text, lang }) => await handleTranlateLanguage({ text, lang })
);

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    setCurrentText: (state, action) => {
      state.currentText = action.payload;
    },
    resetAudioURi: (state) => {
      state.audioURi = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAudioURi.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(fetchTranlatedLanguage.fulfilled, (state, action) => {
      state.tranlatedText = action.payload;
    });
    builder.addCase(fetchAudioURi.fulfilled, (state, action) => {
      state.audioURi = action.payload;
    });
  },
});

export default translateSlice.reducer;

export const { setCurrentText, resetAudioURi } = translateSlice.actions;
