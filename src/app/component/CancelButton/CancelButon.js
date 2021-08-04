import styled from "@emotion/styled";

import { X } from "react-feather";

const CancelButton = ({ onCancel }) => {
  return (
    <Holder role="button" onClick={onCancel}>
      <X />
    </Holder>
  );
};

export default CancelButton;

const Holder = styled.div`
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 10px;
`;
