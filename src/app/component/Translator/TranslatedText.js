import styled from "@emotion/styled";
import { Check, Copy, Volume2 } from "react-feather";
import { COLOR_PRIMARY, COLOR_TEXT_PRIMARY } from "../../../constant/styles";
import useGetTranlatedText from "../../../hooks/useGetTranlatedText";
import {
  CSS_CONTAINER_BORDER_RADIUS,
  CSS_CONTAINER_PADDING,
  CSS_CONTAINER_BORDER,
} from "../../../style/shared";
import { TextNorm } from "../../Text/Text";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useCopy from "../../../hooks/useCopy";
import useTextToSpeech from "../../../hooks/useTextToSpeech";
import IconButton from "../Button/IconButton";

const TranslatedText = () => {
  const [text] = useGetTranlatedText();

  const [copy, onCopy] = useCopy();

  const [voice, onGetVoice, onPlayEnd] = useTextToSpeech();

  return (
    <Holder>
      <Header>
        {voice && <VideoWrapper voice={voice} onPlayEnd={onPlayEnd} />}
        <IconButton onClick={() => onGetVoice(text)}>
          <Volume2 color={COLOR_TEXT_PRIMARY} />
        </IconButton>
        <IconButton>
          <CopyToClipboard text={text} onCopy={onCopy}>
            {copy ? (
              <Check color={COLOR_PRIMARY} />
            ) : (
              <Copy color={COLOR_TEXT_PRIMARY} />
            )}
          </CopyToClipboard>
        </IconButton>
      </Header>
      <Textolder>
        <TextNorm>{text}</TextNorm>
      </Textolder>
    </Holder>
  );
};

export default TranslatedText;

const Holder = styled.div`
  ${CSS_CONTAINER_PADDING}
  ${CSS_CONTAINER_BORDER_RADIUS}
  ${CSS_CONTAINER_BORDER}
  background-color: var(--color-white);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Textolder = styled.div`
  margin-top: 30px;
  height: 250px;
  overflow: auto;
`;

const VideoWrapper = ({ voice, onPlayEnd }) => {
  return (
    <video autoPlay controls hidden onEnded={onPlayEnd}>
      <source src={voice} />
    </video>
  );
};
