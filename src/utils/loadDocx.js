import JSZipUtils from "jszip-utils";

const loadFile = function (url, callback) {
  JSZipUtils.getBinaryContent(url, callback);
};

export default loadFile;
