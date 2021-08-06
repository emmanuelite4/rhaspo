import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTranslatedVerse,
  fetchVerseRandom,
} from "../redux/verse/verse.slice";
import useGetLanguage from "./useGetLanguage";

const useDailyVerse = () => {
  const dispatch = useDispatch();
  const [currentLang] = useGetLanguage();
  const translatedVerse = useSelector((state) => state.verse.translatedVerse);

  const fetchVerse = () => {
    dispatch(fetchVerseRandom());
  };

  const onTranslateVerse = (lang) => () => {
    dispatch(
      fetchTranslatedVerse({ content: translatedVerse, lang: currentLang })
    );
  };

  useEffect(() => {
    fetchVerse();
  }, []);

  return [translatedVerse, onTranslateVerse];
};

export default useDailyVerse;
