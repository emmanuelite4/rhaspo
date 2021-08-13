import axios from "axios";
import { handleTranlateText } from "../../utils/helper";

export const handleTextFromAudio = async (url) => {
  let formData = new FormData();
  formData.append("file", url);
  let data = await axios
    .post("https://rhapso.herokuapp.com/audio-to-text", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })

    // .then((res) => console.log(res))
    .catch((e) => console.log(e));

  return data;
};

export const handleTranslatedPreaching = async (data) => {
  console.log(data);
  let { text, lang } = data;
  let { code } = lang;
  let newText = await handleTranlateText(text, code);
  return newText;
};
