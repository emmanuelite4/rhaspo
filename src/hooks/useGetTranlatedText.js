import { useSelector } from "react-redux";

const useGetTranlatedText = () => {
  const text = useSelector((state) => state.translate.tranlatedText);

  return [text];
};

export default useGetTranlatedText;
