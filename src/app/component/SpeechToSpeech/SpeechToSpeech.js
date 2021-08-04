import styled from "@emotion/styled";
import { BarChart, Mic } from "react-feather";
import { COLOR_WHITE } from "../../../constant/styles";
import { TextNorm } from "../../Text/Text";
import SpeechStateUI from "./component/SpeechStateUI";
const SpeechToSpeech = () => {
  return (
    <Holder>
      <StateHolder>
        <SpeechStateUI />
      </StateHolder>
      <BigMic>
        <BarChart size={40} color={COLOR_WHITE} />
        {/* <Mic size={40} color={COLOR_WHITE} /> */}
      </BigMic>
      <CurrentLangWrap>
        <TextNorm>English</TextNorm>
      </CurrentLangWrap>
    </Holder>
  );
};

export default SpeechToSpeech;

const Holder = styled.div`
  height: calc(100% - 90px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  position: fixed;
`;

const StateHolder = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const BigMic = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
`;

const CurrentLangWrap = styled.div`
  margin-top: 20px;
`;
