import { useSelector } from "react-redux";

const useGetTextFromStore = () => {
  const text = useSelector((state) => state.translate.currentText);

  return [text];
};

export default useGetTextFromStore;
