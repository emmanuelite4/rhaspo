import { handleTranlateText } from "../../utils/helper";

export const handleFetchVerseRandom = async () => {
  let verseFetch = await fetch("https://bible-api.com/john%203:16")
    .then((res) => res.json())
    .then((res) => res)
    .catch((e) => console.log(e));

  let { text, reference } = verseFetch;

  return { text, reference };
};

export const handleTranslateVerse = async (data) => {
  const lang = data.lang.code;
  const { text } = data.dailyVerse;
  const verseTranslated = await handleTranlateText(text, lang);

  let result = { text: verseTranslated, reference: data.dailyVerse.reference };

  return result;
};
