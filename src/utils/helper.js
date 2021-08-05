const { Translate } = require("@google-cloud/translate").v2;
const textToSpeech = require("@google-cloud/text-to-speech");
const fs = require("fs");
const util = require("util");

const CREDENTIALS = JSON.parse(process.env.REACT_APP_CREDENTIALS);

export const handleTranlateText = async (text, lang) => {
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
  }
};

export const handleTextToSpeech = async (text = "Hello world") => {
  const client = new textToSpeech.TextToSpeechClient(CREDENTIALS);
  const request = {
    input: { text: text },
    // Select the language and SSML voice gender (optional)
    voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
    // select the type of audio encoding
    audioConfig: { audioEncoding: "MP3" },
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  let res = await writeFile("output.mp3", response.audioContent, "binary");
  logger(res);

  logger("Audio content written to file: output.mp3");
  return res;
};

// handleTextToSpeech();

export const logger = (param) => {
  if (process.env.NODE_ENV === "development") {
    console.log(param);
  }
};
