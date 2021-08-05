import styled from "@emotion/styled";
import { Mic, X } from "react-feather";
import { COLOR_WHITE } from "../../../constant/styles";
import { CSS_CARD } from "../../../style/shared";
import { TextNorm } from "../../Text/Text";
import useMic from "../../../hooks/useMic";
import { useHistory } from "react-router-dom";

const SpeechStateUI = () => {
  const [onMicStart, onMicStop] = useMic();
  const history = useHistory();
  return (
    <Holder>
      <CancelButtonHolder role="button" onClick={() => history.goBack()}>
        <X />
      </CancelButtonHolder>
      <InitialStateWrapper role="button" onClick={onMicStart}>
        <Mic size={40} color={COLOR_WHITE} />
      </InitialStateWrapper>
      <TextNorm onClick={onMicStop}>Spanish</TextNorm>
    </Holder>
  );
};

export default SpeechStateUI;

const Holder = styled.div`
  ${CSS_CARD};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 400px;
  position: relative;
`;

const InitialStateWrapper = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  margin-bottom: 10px;
`;

const CancelButtonHolder = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
