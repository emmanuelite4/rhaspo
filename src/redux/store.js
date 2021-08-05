import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./language/language.slice";
import rhapsodySlice from "./rhapsody/rhapsody.slice";
import translateSlice from "./translate/translate.slice";

const store = configureStore({
  reducer: {
    translate: translateSlice,
    rhapsody: rhapsodySlice,
    language: languageSlice,
  },
});

export default store;
