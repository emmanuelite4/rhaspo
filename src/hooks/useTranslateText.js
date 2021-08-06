import { useDispatch, useSelector } from "react-redux";
import {
  fetchTranlatedLanguage,
  setCurrentText,
} from "../redux/translate/translate.slice";
import useGetTextFromStore from "./useGetTextFromStore";

const useTranslateText = () => {
  const dispatch = useDispatch();
  const currentText = useSelector((state) => state.translate.currentText);

  const [text] = useGetTextFromStore();
  const tranlatedLang = useSelector(
    (state) => state.language.tranlatedLang.code
  );

  const onChange = ({ target: { value } }) => {
    dispatch(setCurrentText(value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchTranlatedLanguage({ text: currentText, lang: tranlatedLang })
    );
  };

  return [text, onChange, onSubmit];
};

export default useTranslateText;
