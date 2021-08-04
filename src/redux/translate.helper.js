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

export const handleTranlateLanguage = async (text, lang) => {
  console.log(text, lang);

  // Creates a client
  const translate = new Translate();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  const target = lang;
  const model = "nmt";

  return new Promise((resolve, reject) => {
    const options = {
      // The target language, e.g. "ru"
      to: target,
      // Make sure your project is on the allow list.
      // Possible values are "base" and "nmt"
      model: model,
    };

    // Translates the text into the target language. "text" can be a string for
    // translating a single piece of text, or an array of strings for translating
    // multiple texts.
    let [translations] = translate.translate(text, options);
    translations = Array.isArray(translations) ? translations : [translations];
    console.log("Translations:");
    translations.forEach((translation, i) => {
      resolve(`${text[i]} => (${target}) ${translation}`);
    });
  });

  // const uri = "https://translation.googleapis.com/language/translate/v2";
  // var options = {
  //   method: "POST",
  //   form: { key: process.env.TRANSLATE, q: text, target: lang },
  // };

  // let result = await fetch(uri, options);

  // return result
  //   .then((res) => res.json())
  //   .then((res) => {
  //     console.log(res);
  //     return res;
  //   });
};
