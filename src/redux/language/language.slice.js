import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLang: { code: "en", name: "English" },
  tranlatedLang: { code: "en", name: "English" },
};

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
