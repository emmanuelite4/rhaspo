import { useSelector } from "react-redux";

const useGetTranlatedText = () => {
  const text = useSelector((state) => state.translate.text);
  console.log(text);
  return [text];
};

export default useGetTranlatedText;
