import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./language/language.slice";
import rhapsoSlice from "./rhapso/rhapso.slice";
import translateSlice from "./translate.slice";

const store = configureStore({
  reducer: {
    translate: translateSlice,
    rhapso: rhapsoSlice,
    language: languageSlice,
  },
});

export default store;
