import styled from "@emotion/styled";

import { X } from "react-feather";
import { TextMid } from "../../../Text/Text";

const TranslateType = ({ type, onCancel }) => {
  return (
    <Holder>
      <CancelButton role="button" onClick={onCancel}>
        <X />
      </CancelButton>
      <div>
        <TextMid>Translate {type}</TextMid>
      </div>
    </Holder>
  );
};

export default TranslateType;

const Holder = styled.div`
  display: flex;
  align-items: center;
  & > :last-child {
    flex: 1;
    text-align: center;
  }
`;

const CancelButton = styled.div`
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
