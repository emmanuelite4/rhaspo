import { useState } from "react";

import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      500,
      500,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

const useResize = () => {
  const [resize, setResize] = useState();
  const onResize = async (src) => {
    let res = await resizeFile(src);
    setResize(res);
  };
  return [resize, onResize];
};

export default useResize;
