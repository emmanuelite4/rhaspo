import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { handleTextToSpeech } from "../../utils/helper";
import {
  handleTextFromAudio,
  handleTranslatedPreaching,
} from "./preaching.helper";

const initialState = {
  text: "",
  loading: false,
  lastPreachingUrl: "",
};

export const fetchTextFromAudio = createAsyncThunk(
  "preaching/getTextFromAudio",
  async (uri) => await handleTextFromAudio(uri)
);

export const fetchTranslatedPreaching = createAsyncThunk(
  "book/getTranslatedPreaching",
  async (content) => await handleTranslatedPreaching(content)
);

const preachingSlice = createSlice({
  name: "preaching",
  initialState,
  reducers: {
    // setCurrentText: (state, action) => {
    //   state.currentText = action.payload;
    // },
    // setLargeText: (state, action) => {
    //   state.largeText = action.payload;
    // },
    // resetAudioURi: (state) => {
    //   state.audioURi = "";
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTextFromAudio.fulfilled, (state, action) => {
      state.text = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTextFromAudio.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTranslatedPreaching.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTranslatedPreaching.fulfilled, (state, action) => {
      state.text = action.payload;
      console.log(state.text);
      state.loading = false;
    });
    builder.addCase(fetchTranslatedPreaching.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default preachingSlice.reducer;

// export const { setCurrentText, setLargeText, resetAudioURi } =
//   preachingSlice.actions;
