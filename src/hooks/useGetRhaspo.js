import { useSelector } from "react-redux";

const useGetRhaspo = () => {
  const data = useSelector((state) => state.rhapsody.content);

  return [data];
};

export default useGetRhaspo;
