import { useState, useEffect } from "react";
import createSpeechServicesPonyfill from "web-speech-cognitive-services";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useHistory } from "react-router-dom";
import { HOME_URL } from "../constant/navigation";
import { useDispatch } from "react-redux";
import { setCurrentText } from "../redux/translate/translate.slice";

const SUBSCRIPTION_KEY = "f23235972e5c4432854dfd85d9403472";
const REGION = "eastus";
const TOKEN_ENDPOINT = `https://${REGION}.api.cognitive.microsoft.com/sts/v1.0/issuetoken`;

const useMic = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const startListening = () => {
    setLoading(true);
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });
  };

  const loadSpeechRecognition = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: { "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY },
    });
    const authorizationToken = await response.text();
    const { SpeechRecognition: AzureSpeechRecognition } =
      await createSpeechServicesPonyfill({
        credentials: {
          region: REGION,
          authorizationToken,
        },
      });
    SpeechRecognition.applyPolyfill(AzureSpeechRecognition);
    setLoading(false);
  };

  useEffect(() => {
    loadSpeechRecognition();
  }, []);
  const stopListening = () => {
    history.push(HOME_URL);
    dispatch(setCurrentText(transcript));

    return SpeechRecognition.stopListening;
  };

  return [loading, transcript, startListening, stopListening, resetTranscript];
};

export default useMic;
