import { useSelector } from "react-redux";

const useGetRhaspo = () => {
  const rhapso = useSelector((state) => state.rhapsody);
  const { content, loading } = rhapso;

  return [content, loading];
};

export default useGetRhaspo;
