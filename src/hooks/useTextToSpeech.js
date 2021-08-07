import { useDispatch, useSelector } from "react-redux";
import {
  fetchAudioURi,
  resetAudioURi,
} from "../redux/translate/translate.slice";

const useTextToSpeech = () => {
  const lang = useSelector((state) => state.language.currentLang.code);
  const voice = useSelector((state) => state.translate.audioURi);
  // const text = useSelector((state) => state.translate.tranlatedText);

  const dispatch = useDispatch();

  const onGetVoice = async (text) => {
    dispatch(fetchAudioURi({ text, lang }));
  };
  const onSetTextToSpeech = (text) => {
    dispatch(fetchAudioURi({ text, lang }));
  };
  const onPlayEnd = () => {
    dispatch(resetAudioURi());
  };
  return [voice, onGetVoice, onPlayEnd, onSetTextToSpeech];
};

export default useTextToSpeech;
