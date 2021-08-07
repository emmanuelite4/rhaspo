import { useState } from "react";
import loadFile from "../utils/loadDocx";
import useAdvanTranslate from "./useAdvanTranslate";
import Docxtemplater from "docxtemplater";

function useGetDocxText() {
  const [text, setText] = useState();
  //   const [] = useAdvanTranslate();

  const onLoadDocx = (event) => {
    let el = event.target.files[0];
    console.log(el);
    let reader = new FileReader();
    reader.fileName = el.name; // file came from a input file element. file = el.files[0];
    reader.onload = function (readerEvt) {
      console.log(readerEvt.target.fileName);
      loadFile(readerEvt.target.fileName, function (err, content) {
        //     console.log(content);
        var doc = new Docxtemplater(content);
        text = doc.getFullText();
        console.log(text);
        //   setText(text);
      });
    };
    // reader.onload = (url) => {
    //   console.log(url);
    //   loadFile(url, function (err, content) {
    //     console.log(content);
    //     var doc = new Docxtemplater(content);
    //     text = doc.getFullText();
    //     console.log(text);
    //     //   setText(text);
    //   });
    // };
    reader.readAsDataURL(el);
  };

  return [onLoadDocx];
}

export default useGetDocxText;
