import { useSelector } from "react-redux";

const useGetAdvanTranslatedText = () => {
  const text = useSelector((state) => state.translate.translatedLargeText);

  return [text];
};

export default useGetAdvanTranslatedText;
