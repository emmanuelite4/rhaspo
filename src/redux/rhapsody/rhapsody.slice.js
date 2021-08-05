import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleTranslateRhapsody } from "./rhapsody.helper";

const initialState = {
  content: {
    title: "THE KINGDOM IN YOU",
    bibleVerse:
      "“Now after that John was put in prison, Jesus came into Galilee, preaching the gospel of the kingdom of God (Mark 1:14).“",
    message:
      "Jesus came preaching the Gospel of the Kingdom of God. He said the time was fulfilled, and that the Kingdom of God was near (Mark 1:15). What is the Kingdom of God? The Kingdom of God isn’t a place; it’s the reign of God, where He rules as Lord, and expresses Himself—His glory and His goodness.That’s why Jesus cautioned that when we’re told, “the Kingdom of God is over there,” or “it’s over here,” don’t believe it, because the Kingdom doesn’t come by observation; it’s within you (Luke 17:20-21). God’s plan in this age is to set up His Kingdom in the hearts of men as a spiritual kingdom.Recall when Jesus was brought before Pilate, in John 18:36-37; Pilate asked Him some questions to which He responded, “…My Kingdom is not of this world…” (John 18:36). God’s Kingdom isn’t a physical structure; yet Jesus said, “It has come!” Indeed, it has, because it’s in our hearts.The Gospel today is that God’s Kingdom can be set up in the hearts of men; it has arrived! Jesus said, “…If a man love me, he will keep my words: and my Father will love him, and we will come unto him, and make our abode with him” (John 14:23). This wasn’t provided in the days of Abraham, Moses, Elijah, Elisha, David, Solomon and the patriarchs of old; but it is in our day.When Jesus came, He brought the Kingdom in Him. Now that we’ve received Him, we have the Kingdom in us: the glory, grace and the life of God— all of divinity has been set up in your heart! God is at home in you now. You’ve become, not just a citizen of the Kingdom, but also the bearer or carrier of the Kingdom, of divine verities. Hallelujah!",
    prayer:
      "Dear Father, I thank you for your Kingdom that’s in my heart; your glory and righteousness that are in me and revealed through me. Your Kingdom reigns, and it’s established in the earth, and in the hearts of men as the Gospel is proclaimed around the world today, in Jesus’ Name. Amen.",
    date: "Rhapsody Of Realities Thursday 1st",
    prayerConclusionLabel: "Prayer / Conclusion",
  },
  translated: false,
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
    builder.addCase(fetchTranslatedRhaspo.fulfilled, (state, action) => {
      state.content = action.payload;
    });
    builder.addCase(fetchTranslatedRhaspo.rejected, (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
    });
  },
});

export default rhapsody.reducer;
