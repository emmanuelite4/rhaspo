const { Translate } = require("@google-cloud/translate").v2;

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
    console.log(e);
    throw new Error(e);
  }
};

console.log(process.env.REACT_APP_BACKEND_URI);

export const handleTextToSpeech = async ({ text, lang }) => {
  console.log(text);
  let result = await fetch("https://rhapso.herokuapp.com/text-to-speech", {
    method: "POST",
    body: JSON.stringify({ text, lang }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.body)
    .then((response) => {
      const reader = response.getReader();
      return new ReadableStream({
        start(controller) {
          // The following function handles each data chunk
          function push() {
            // "done" is a Boolean and value a "Uint8Array"
            reader.read().then(({ done, value }) => {
              // If there is no more data to read
              if (done) {
                controller.close();
                return;
              }
              // Get the data and send it to the browser via the controller
              controller.enqueue(value);

              push();
            });
          }

          push();
        },
      });
    })
    .then((stream) => new Response(stream))
    .then((response) => response.blob())
    .then((blob) => URL.createObjectURL(blob))
    .then((url) => url)
    .catch((err) => console.error(err));

  return result;
};

export const logger = (param) => {
  if (process.env.NODE_ENV === "development") {
    console.log(param);
  }
};
