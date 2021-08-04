import { useSelector } from "react-redux";

const useGetRhaspo = () => {
  const data = useSelector((state) => state.rhapso.defaultContent);

  return [data];
};

export default useGetRhaspo;
