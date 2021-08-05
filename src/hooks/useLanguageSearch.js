import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import languageData from "../constant/language";
import {
  setTranslatedLanguageFrom,
  setTranslatedLanguageTo,
} from "../redux/language/language.slice";
import { fetchTranslatedRhaspo } from "../redux/rhapsody/rhapsody.slice";

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

const useLanguageSearch = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [searchResult, setSearchResult] = useState(languageData);

  const content = useSelector((state) => state.rhapsody.content);
  const tranlatedLang = useSelector((state) => state.language.tranlatedLang);

  const onSearch = ({ target: { value } }) => {
    setValue(value);
    const regex = new RegExp(escapeRegex(value), "gi");
    let res = languageData.filter((lang) => regex.test(lang.name));
    console.log(regex);
    setSearchResult(res);
  };
  const onSelect = (lang, type) => {
    if (type === "To") {
      console.log(lang);
      dispatch(setTranslatedLanguageTo(lang));
      console.log("pls dispatch");
      dispatch(fetchTranslatedRhaspo({ content, lang }));
      console.log("hi");
    } else {
      dispatch(setTranslatedLanguageFrom(lang));
    }
  };
  return [searchResult, value, onSearch, onSelect];
};
export default useLanguageSearch;
