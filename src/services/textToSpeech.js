import * as googleTTS from "google-tts-api"; // ES6 or TypeScript

// get audio URL
function textToSpeech(speech) {
  const url = googleTTS.getAudioBase64("Hello World", {
    lang: "en",
    slow: false,
    host: "https://translate.google.com",
  });
  return url;
}
export default textToSpeech;
