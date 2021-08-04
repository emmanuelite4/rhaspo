import { useState, useEffect } from "react";
const useMic = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const mic = new SpeechRecognition();

  mic.continuous = true;
  mic.interimResults = true;
  mic.lang = "en-US";

  const [isMicOn, setOnMic] = useState(false);

  var buttonColour;
  var buttonLabel;

  if (isMicOn) {
    buttonColour = "secondary";
    buttonLabel = "Recording...";
  } else {
    buttonColour = "primary";
    buttonLabel = "Record";
  }

  useEffect(() => {
    handleListen();
  }, [isMicOn]);

  const handleListen = () => {
    if (isMicOn) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };
  const onMicStart = () => {
    setOnMic(true);
  };
  const onMicStop = () => {
    setOnMic(false);
  };

  return [onMicStart, onMicStop];
};

export default useMic;
