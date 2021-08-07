import { useDispatch, useSelector } from "react-redux";
import {
  fetchTranslatedLargeLanguage,
  setLargeText,
} from "../redux/translate/translate.slice";
import useGetLanguage from "./useGetLanguage";

const useAdvanTranslate = () => {
  const dispatch = useDispatch();
  const currentText = useSelector((state) => state.translate.largeText);
  const loading = useSelector(
    (state) => state.translate.translatedLargeTextLoading
  );

  console.log(loading);

  const [translatedLang] = useGetLanguage();

  const onChange = ({ target: { value } }) => {
    dispatch(setLargeText(value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchTranslatedLargeLanguage({
        text: currentText,
        lang: translatedLang.code,
      })
    );
  };

  return [currentText, loading, onChange, onSubmit];
};

export default useAdvanTranslate;
