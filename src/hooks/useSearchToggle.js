import { useState } from "react";

const useSearchToggle = () => {
  const [open, setOpen] = useState();
  const [type, setType] = useState("");

  const onOpen = (type) => () => {
    setOpen(true);
    setType(type);
  };
  const onClose = () => {
    setOpen(false);
    setType("");
  };
  return [open, type, onClose, onOpen];
};

export default useSearchToggle;
