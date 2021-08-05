import { useDispatch } from "react-redux";
import { fetchTranslatedRhaspo } from "../rhapsody/rhapsody.slice";

export const handleTranslateLanguage = async (lang) => {
  try {
    return lang;
  } catch (e) {
    throw new Error(e);
  }
};
