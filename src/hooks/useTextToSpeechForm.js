import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAudioURi,
  fetchTranlatedLanguage,
  setCurrentText,
} from "../redux/translate.slice";
import useGetTextFromStore from "./useGetTextFromStore";

const useTextToSpeech = () => {
  const dispatch = useDispatch();
  const [text] = useGetTextFromStore();
  const tranlatedLang = useSelector(
    (state) => state.language.tranlatedLang.code
  );
  const [value, setValue] = useState();

  const onChange = ({ target: { value } }) => {
    setValue(value);
    dispatch(setCurrentText(value));
    // dispatch(fetchTranlatedLanguage(value, tranlatedLang));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAudioURi(value));
  };

  return [text, onChange, onSubmit];
};

export default useTextToSpeech;
