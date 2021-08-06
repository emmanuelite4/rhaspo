import styled from "@emotion/styled";
import { Book, Volume2 } from "react-feather";
import { useHistory } from "react-router-dom";
import { RHAPSODY_URL } from "../../../constant/navigation";
import { COLOR_PRIMARY, COLOR_SECONDARY } from "../../../constant/styles";
import useDailyVerse from "../../../hooks/useDailyVerse";
import useTextToSpeech from "../../../hooks/useTextToSpeech";
import {
  CSS_CONTAINER_BORDER,
  CSS_CONTAINER_BORDER_RADIUS,
} from "../../../style/shared";
import { TextMid, TextNorm } from "../../Text/Text";
import IconButton from "../Button/IconButton";
import { RhapsoButtonHolder, RhapsoIconWrap } from "../Rhapso/RhapsoCategory";

const DailyVerse = () => {
  const [translatedVerse] = useDailyVerse();
  const history = useHistory();
  const { text, reference } = translatedVerse;
  const [voice, onGetVoice, onPlayEnd] = useTextToSpeech();
  return (
    <div>
      <VerseWrapper>
        <TextMid weight="400">
          {text}
          <br />
          <br />
          <b>{reference}</b>
        </TextMid>
      </VerseWrapper>
      <br />
      {voice && <VideoWrapper voice={voice} onPlayEnd={onPlayEnd} />}
      <ButtonWrapper>
        <IconButton onClick={() => onGetVoice(text)}>
          <Volume2 color={COLOR_PRIMARY} size={50} />
        </IconButton>
      </ButtonWrapper>
    </div>
  );
};

export default DailyVerse;

const VerseWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 20px;
  text-align: center;
  ${CSS_CONTAINER_BORDER}
  ${CSS_CONTAINER_BORDER_RADIUS}
`;

const ButtonWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  & > button {
    width: 80px;
    height: 80px;
    border-radius: 40px;
  }
`;

const VideoWrapper = ({ voice, onPlayEnd }) => {
  return (
    <video autoPlay controls hidden onEnded={onPlayEnd}>
      <source src={voice} />
    </video>
  );
};
