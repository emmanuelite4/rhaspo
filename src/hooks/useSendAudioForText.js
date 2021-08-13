import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTextFromAudio } from "../redux/preaching/preaching.slice";

const useSendAudioForText = () => {
  const [uri, setUri] = useState();
  const dispatch = useDispatch();

  const onUrlChange = (event) => {
    setUri(event.target.value);
  };

  const onSendAudio = (event) => {
    console.log("hi");
    console.log(event.target.files[0]);
    // event.preventDefault();
    dispatch(fetchTextFromAudio(event.target.files[0]));
  };
  return [uri, onUrlChange, onSendAudio];
};

export default useSendAudioForText;
