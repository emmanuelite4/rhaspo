import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Tesseract from "tesseract.js";
import { setCurrentText } from "../redux/translate/translate.slice";

const useGetTextFromImage = () => {
  const dispatch = useDispatch();
  const [imageURI, setImageURI] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSetImage = (uri) => () => {
    setImageURI(uri);
  };

  useEffect(() => {
    if (imageURI) {
      Tesseract.recognize(imageURI, "eng", {
        logger: (m) => {
          console.log(m);
          setLoading(true);
        },
      }).then(({ data: { text } }) => {
        console.log(text);
        setLoading(false);
        dispatch(setCurrentText(text));
        setText(text);
        history.goBack();
      });
    }
  }, [imageURI]);
  return [loading, text, onSetImage];
};

export default useGetTextFromImage;
