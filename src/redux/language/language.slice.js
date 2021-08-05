import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleTranslateLanguage } from "./language.helper";

const initialState = {
  currentLang: { code: "en", name: "English" },
  tranlatedLang: { code: "en", name: "English" },
};

// export const setTranslatedLanguageTo = createAsyncThunk(
//   "language/setTranslatedLanguageTo",
//   (lang) => handleTranslateLanguage(lang)
// );

const language = createSlice({
  name: "language",
  initialState,
  reducers: {
    setTranslatedLanguageFrom(state, action) {
      state.currentLang = action.payload;
    },
    setTranslatedLanguageTo(state, action) {
      state.tranlatedLang = action.payload;
    },
  },
});

export default language.reducer;

export const { setTranslatedLanguageFrom, setTranslatedLanguageTo } =
  language.actions;
