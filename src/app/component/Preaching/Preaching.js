import styled from "@emotion/styled";
import IconButton from "../Button/IconButton";
import { Volume2 } from "react-feather";
import useGetPreachingText from "../../../hooks/useGetPreachingText";
import useSendAudioForText from "../../../hooks/useSendAudioForText";
import {
  CSS_CONTAINER_BORDER,
  CSS_CONTAINER_BORDER_RADIUS,
  CSS_CONTAINER_PADDING,
} from "../../../style/shared";
import Button from "../Button/Button";
import RhapsoSelectLang from "../Rhapso/RhapsoSelectLang";
import {
  COLOR_PRIMARY,
  COLOR_TEXT_PRIMARY,
  COLOR_WHITE,
} from "../../../constant/styles";
import useTextToSpeech from "../../../hooks/useTextToSpeech";

const Preaching = () => {
  const [loading, text] = useGetPreachingText();
  const [uri, onUrlChange, onSendAudio] = useSendAudioForText();
  const [voice, onGetVoice, onPlayEnd] = useTextToSpeech();
  return (
    <Holder>
      {/* <Form onSubmit={onSendAudio}> */}
      {/* <TextInput
          onChange={onUrlChange}
          value={uri}
          placeholder="Enter youtube url"
          pattern="(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[^&\s\?]+(?!\S))\/)|(?:\S*v=|v\/)))([^&\s\?]+)"
        /> */}
      {voice && <VideoWrapper voice={voice} onPlayEnd={onPlayEnd} />}
      <input type="file" id="audio-text" hidden onChange={onSendAudio} />
      <Label htmlFor="audio-text">
        <span>Upload Message</span>
      </Label>
      {/* </Form> */}
      <Divider />
      <SettingWrap>
        <RhapsoSelectLang />
        <IconButton onClick={() => onGetVoice(text)}>
          <Volume2 color={COLOR_TEXT_PRIMARY} />
        </IconButton>
      </SettingWrap>
      <TextWrap>{text}</TextWrap>
    </Holder>
  );
};

export default Preaching;

const VideoWrapper = ({ voice, onPlayEnd }) => {
  return (
    <video autoPlay controls hidden onEnded={onPlayEnd}>
      <source src={voice} />
    </video>
  );
};

const Holder = styled.div`
  height: 100%;
`;

const TextWrap = styled.div`
  ${CSS_CONTAINER_BORDER};
  ${CSS_CONTAINER_BORDER_RADIUS};
  ${CSS_CONTAINER_PADDING};
  min-height: 300px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextInput = styled.input`
  padding: 20px;
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
  outline: none;
  ${CSS_CONTAINER_BORDER};
  ${CSS_CONTAINER_BORDER_RADIUS}
`;

const Divider = styled.div`
  border: 1px solid var(--color-line);
  margin: 20px 0px;
`;

const SettingWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  padding: 10px 20px;
  background-color: ${COLOR_PRIMARY};
  border-radius: 10px;
  margin-bottom: 20px;
  color: ${COLOR_WHITE};
`;
