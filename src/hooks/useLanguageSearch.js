import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import languageData from "../constant/language";
import { fetchTranslatedBook } from "../redux/book/book.slice";
import {
  setTranslatedLanguageFrom,
  setTranslatedLanguageTo,
} from "../redux/language/language.slice";
import { fetchTranslatedRhaspo } from "../redux/rhapsody/rhapsody.slice";
import { fetchTranslatedVerse } from "../redux/verse/verse.slice";
import useDailyVerse from "./useDailyVerse";
import useFetchBook from "./useFetchBook";
import useFetchBookList from "./useFetchBookList";

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

const useLanguageSearch = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [searchResult, setSearchResult] = useState(languageData);

  const content = useSelector((state) => state.rhapsody.content);
  const [dailyVerse] = useDailyVerse();
  console.log(dailyVerse);

  const onSearch = ({ target: { value } }) => {
    setValue(value);
    const regex = new RegExp(escapeRegex(value), "gi");
    let res = languageData.filter((lang) => regex.test(lang.name));
    console.log(regex);
    setSearchResult(res);
  };
  const [books] = useFetchBookList();
  const [book, contents] = useFetchBook();
  let bookObj = { books, book, contents };
  const onSelect = (lang, type) => {
    if (type === "To") {
      console.log(lang);
      dispatch(setTranslatedLanguageTo(lang));
      console.log("pls dispatch");
      dispatch(fetchTranslatedRhaspo({ content, lang }));
      dispatch(fetchTranslatedVerse({ dailyVerse, lang }));
      console.log(bookObj);
      dispatch(fetchTranslatedBook({ bookObj, lang }));
      console.log("hi");
    } else {
      dispatch(setTranslatedLanguageFrom(lang));
    }
  };
  return [searchResult, value, onSearch, onSelect];
};
export default useLanguageSearch;
