import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleTranslateRhapsody } from "./rhapsody.helper";

const initialState = {
  content: {
    title: "TDISCOVER WHO YOU ARE IN HIM",
    bibleVerse:
      "“And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God (Romans 12:2).“",
    message:
      "Before the coming of the Messiah, it was prophesied that Elijah would come first (Malachi 4:5-6). The Scribes used this prophecy as evidence against the messiahship of Jesus. But the disciples, having seen Elijah with their own eyes talking with Jesus on the Mount of Transfiguration (Read Matthew 17:1-3), asked Jesus, “…Why then say the scribes that Elias must first come?” (Matthew 17:10). To their surprise, Jesus confirmed the Scribes insistence that Elijah must come first before the Messiah. He said, “…Elias truly shall first come, and restore all things. But I say unto you, That Elias is come already, and they knew him not, but have done unto him whatsoever they listed. Likewise shall also the Son of man suffer of them” (Matthew 17:11-12). The Bible says, “Then the disciples understood that he spake unto them of John the Baptist” (Matthew 17:13). Elijah already came, but they didn’t know it, because they were looking in the flesh! There’re many Christians who are like that today. All they’re dreaming, praying, struggling to be and have in God, they already are, and already have, but they don’t know it. This is why you must know the Word. Through the knowledge of the Word, you’re enlightened as to your identity and heritage in Christ. Nothing could be greater or better than Christ in you, and you in Christ. You’ve got to come to the full realization that as He is, so are you (1 John 4:17). You’re His righteousness, the expression of all the perfect things that are consistent with His nature—His goodness, His kindness, His love, His humility, and excellence! This is why our theme verse admonishes that you renew your mind, because it’s only through the Scriptures, by the Spirit, that you discover what God has already made you and granted you in Christ.",
    prayer:
      "Everything I require for life and godliness has been granted me by God. I refuse to look in the flesh. I don’t struggle, and I don’t fret. Every provision of the Gospel is both legally and vitally my possession NOW! I walk in my inheritance, in the full blessings of the Gospel, in Jesus’ Name. Amen.",
    date: "Rhapsody Of Realities Thursday 1st",
    prayerConclusionLabel: "Prayer / Conclusion",
  },
  translated: false,
  loading: false,
  error: "",
};

export const fetchTranslatedRhaspo = createAsyncThunk(
  "rhapsody/getContent",
  async (data) => {
    console.log(data);
    console.log("another");
    return await handleTranslateRhapsody(data);
  }
);

const rhapsody = createSlice({
  name: "rhapsody",
  initialState,
  reducers: {
    //   getDefaultContent()
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTranslatedRhaspo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTranslatedRhaspo.fulfilled, (state, action) => {
      state.content = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTranslatedRhaspo.rejected, (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default rhapsody.reducer;
