import * as googleTTS from "google-tts-api"; // ES6 or TypeScript

const { Translate } = require("@google-cloud/translate").v2;

export const handleGetTextSpeech = (text) => {
  return new Promise((resolve, reject) => {
    try {
      const url = googleTTS.getAudioBase64(text, {
        lang: "en",
        slow: false,
        host: "https://translate.google.com",
      });

      resolve(url);
    } catch (err) {
      reject(err);
    }
  });
};

const CREDENTIALS = JSON.parse(process.env.REACT_APP_CREDENTIALS);

export const handleTranlateLanguage = async ({ text, lang }) => {
  // Creates a client
  const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id,
  });

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  const target = lang;
  const model = "nmt";

  const options = {
    to: target,
    model: model,
  };

  try {
    let [translations] = await translate.translate(text, options);

    return translations;
  } catch (e) {
    throw new Error(e);
  } finally {
    console.log("hello world");
  }
};
