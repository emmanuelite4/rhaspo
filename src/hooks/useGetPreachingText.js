import { useSelector } from "react-redux";

const useGetPreachingText = () => {
  const data = useSelector((state) => state.preaching);
  const { loading, text } = data;
  return [loading, text];
};

export default useGetPreachingText;
