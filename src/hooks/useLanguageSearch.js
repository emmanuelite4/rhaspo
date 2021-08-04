import { useState } from "react";
import { useDispatch } from "react-redux";
import languageData from "../constant/language";
import {
  setTranslatedLanguageFrom,
  setTranslatedLanguageTo,
} from "../redux/language/language.slice";

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

const useLanguageSearch = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [searchResult, setSearchResult] = useState(languageData);

  const onSearch = ({ target: { value } }) => {
    setValue(value);
    const regex = new RegExp(escapeRegex(value), "gi");
    let res = languageData.filter((lang) => regex.test(lang.name));
    console.log(regex);
    setSearchResult(res);
  };
  const onSelect = (lang, type) => {
    if (type === "To") {
      dispatch(setTranslatedLanguageTo(lang));
    } else {
      dispatch(setTranslatedLanguageFrom(lang));
    }
  };
  return [searchResult, value, onSearch, onSelect];
};
export default useLanguageSearch;
