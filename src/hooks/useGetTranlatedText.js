import { useSelector } from "react-redux";

const useGetTranlatedText = () => {
  const text = useSelector((state) => state.translate.tranlatedText);
  console.log(text);
  return [text];
};

export default useGetTranlatedText;
