import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Loader, Mic, X } from "react-feather";
import { COLOR_TEXT_PRIMARY, COLOR_WHITE } from "../../../../constant/styles";
import { CSS_CARD } from "../../../../style/shared";
import { TextNorm } from "../../../Text/Text";
import { ReactMic } from "react-mic";
import useMic from "../../../../hooks/useMic";
import { useHistory } from "react-router-dom";
import { HOME_URL } from "../../../../constant/navigation";

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
      {/* <LoaindStateWrapper>
        <Loader size={40} color={COLOR_TEXT_PRIMARY} />
      </LoaindStateWrapper> */}
      {/* <ReactMic
        // record={this.state.record}
        className="sound-wave"
        // onStop={this.onStop}
        // onData={this.onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      /> */}
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

const rotation = keyframes`
    from {
        transform:rotate(0deg);
    } to {
        transform: rotate(360deg)
    }
`;

const LoaindStateWrapper = styled.div`
  animation: ${rotation} 0.8s ease infinite;
`;
