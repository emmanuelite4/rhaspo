import { handleTranlateText } from "../../utils/helper";

export const handleTranslateRhapsody = async (data) => {
  const lang = data.lang.code;
  const { title, bibleVerse, message, prayer, prayerConclusionLabel, date } =
    data.content;
  const titleTranslated = await handleTranlateText(title, lang);
  const bibleVerseTranslated = await handleTranlateText(bibleVerse, lang);
  const messageTranslated = await handleTranlateText(message, lang);
  const prayerTranslated = await handleTranlateText(prayer, lang);
  const prayerConclusionLabelTranlated = await handleTranlateText(
    prayerConclusionLabel,
    lang
  );
  const dateTranslated = await handleTranlateText(date, lang);

  return {
    title: titleTranslated,
    bibleVerse: bibleVerseTranslated,
    message: messageTranslated,
    prayer: prayerTranslated,
    prayerConclusionLabel: prayerConclusionLabelTranlated,
    date: dateTranslated,
  };
};
