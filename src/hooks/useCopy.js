import { useState } from "react";

const useCopy = () => {
  const [copy, setCopy] = useState(false);

  const onCopy = () => {
    setCopy(true);
  };
  return [copy, onCopy];
};

export default useCopy;
