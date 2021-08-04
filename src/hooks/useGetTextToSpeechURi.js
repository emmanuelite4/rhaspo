import textToSpeech from "../services/textToSpeech";

const useGetTextToSpeechURi = () => {
  const uri = textToSpeech();

  return [uri];
};

export default useGetTextToSpeechURi;
