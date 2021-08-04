import { useSelector } from "react-redux";

const useGetLanguage = () => {
  const data = useSelector((state) => state.language);
  const { currentLang, tranlatedLang } = data;
  return [currentLang, tranlatedLang];
};

export default useGetLanguage;
