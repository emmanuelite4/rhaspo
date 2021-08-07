import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleTranslateRhapsody } from "./rhapsody.helper";

const initialState = {
  content: {
    title: "CHRIST AT HOME IN YOU",
    bibleVerse:
      "“To whom God would make known what is the riches of the glory of this mystery among the Gentiles; which is Christ in you, the hope of glory (Colossians 1:27).“",
    message:
      "“Christ in you” refers to all that’s in the character, personality, potency of the glory and graces of Christ embodied in you. And that’s done by the Holy Spirit. Recall the words of Jesus in John 14:23; “…If a man love me, he will keep my words: and my Father will love him, and we will come unto him, and make our abode with him.” This was before His death, burial, resurrection and ascension to heaven. He had said in John 14:16-17, “And I will pray the Father, and he shall give you another Comforter… ye know him; for he dwelleth with you, and shall be in you.” He made good on His promise, and on the day of Pentecost, the Holy Spirit came and indwelt the disciples. Today, being born again, we’ve become His living temple; He’s set up His abode in us. This was a mystery in the Old Testament; the prophets and even the angels wondered how it would be possible for God to make His home in men’s hearts. But it was ever God’s desire; He said in Proverbs 8:31, “…my delights were with the sons of men.” Paul, by the Spirit, eventually writes and unveils this mystery as read in our theme scripture. So, when we say, “Christ in you,” we’re looking at the character, the beauty, all of the glory, power, and the righteousness of God encapsulated in a man. Ephesians 3:17 says, “That Christ may dwell in your hearts by faith….” That word “dwell” means “settle”; so, you’re one in whom Christ has settled. He has made His home in your heart by faith; there’s a mingling; a oneness of spirit. His very life, the very quality of His personality and the characteristics of His glory are all in you today. Glory to His Name forever!",
    prayer:
      "Blessed Lord, thank you for setting up your abode in the quarters of my heart. You sanctified me, and made me your living tabernacle, with your very life—the very quality of your personality and the characteristics of your glory—resident in, and expressed through me. What a blessed reality; for this, I’m forever grateful.",
    date: "Rhapsody Of Realities August 6th",
    prayerConclusionLabel: "Prayer",
  },
  translated: false,
  loading: false,
  error: "",
};

export const fetchTranslatedRhaspo = createAsyncThunk(
  "rhapsody/getContent",
  async (data) => {
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
