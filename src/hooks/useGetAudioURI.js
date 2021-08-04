import { useSelector } from "react-redux";

const useGetAudioURI = () => {
  const uri = useSelector((state) => state.translate.audioURi);

  return [uri];
};

export default useGetAudioURI;
