const { Translate } = require("@google-cloud/translate").v2;

const CREDENTIALS = JSON.parse(process.env.REACT_APP_CREDENTIALS);

export const handleTranlateLanguage = async ({ text, lang }) => {
  const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id,
  });

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
