import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./book/book.slice";
import languageSlice from "./language/language.slice";
import rhapsodySlice from "./rhapsody/rhapsody.slice";
import translateSlice from "./translate/translate.slice";
import verseSlice from "./verse/verse.slice";

const store = configureStore({
  reducer: {
    translate: translateSlice,
    rhapsody: rhapsodySlice,
    language: languageSlice,
    verse: verseSlice,
    book: bookSlice,
  },
});

export default store;
