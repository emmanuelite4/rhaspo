import styled from "@emotion/styled";
import { BarChart, Mic, X } from "react-feather";
import { COLOR_WHITE } from "../../../constant/styles";
import {
  CSS_CARD,
  CSS_CONTAINER_BORDER,
  CSS_CONTAINER_BORDER_RADIUS,
  CSS_CONTAINER_PADDING,
} from "../../../style/shared";
import useMic from "../../../hooks/useMic";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import { TextMid } from "../../Text/Text";
import VoiceAnimation from "../VoiceAnimation/VoiceAnimation";

const SpeechStateUI = () => {
  const [loading, transcript, startListening, stopListening, resetTranscript] =
    useMic();
  const history = useHistory();

  return (
    <Holder>
      <CancelButtonHolder role="button" onClick={() => history.goBack()}>
        <X />
      </CancelButtonHolder>
      {loading && (
        <TextWrap>
          <TextMid>{transcript}</TextMid>
        </TextWrap>
      )}
      <InitialStateWrapper
        role="button"
        // ref={microphoneRef}
        onClick={startListening}
      >
        {loading ? <VoiceAnimation /> : <Mic size={40} color={COLOR_WHITE} />}
      </InitialStateWrapper>
      <ButtonHolder>
        {loading && <Button onClick={stopListening}>Stop</Button>}
        {loading && <Button onClick={resetTranscript}>Rest</Button>}
      </ButtonHolder>
      {/* <TextNorm onClick={onMicStop}>Spanish</TextNorm> */}
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
const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  & > :first-child {
    margin-right: 10px;
  }
`;

const TextWrap = styled.div`
  ${CSS_CONTAINER_BORDER}
  ${CSS_CONTAINER_BORDER_RADIUS}
  ${CSS_CONTAINER_PADDING}
  margin-bottom: 15px;
`;
