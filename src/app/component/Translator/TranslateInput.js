import styled from "@emotion/styled";
import { useEffect } from "react";
import { Camera, Mic, Volume2 } from "react-feather";
import { useHistory, useParams } from "react-router-dom";
import {
  HOME_ROUTE_SCAN,
  HOME_ROUTE_SPEECH,
  HOME_URL,
} from "../../../constant/navigation";
import { COLOR_PRIMARY } from "../../../constant/styles";
import useGetTextFromImage from "../../../hooks/useGetTextFromImage";
import useResize from "../../../hooks/useResize";
import useScanner from "../../../hooks/useScanner";
import useTranslateText from "../../../hooks/useTranslateText";
import {
  CSS_CONTAINER_BORDER_RADIUS,
  CSS_CONTAINER_PADDING,
  CSS_CONTAINER_BORDER,
} from "../../../style/shared";
import Button from "../Button/Button";
import HomeRoutesContainer from "../HomeRoute/HomeRoutesContainer";
import SpeechStateUI from "../SpeechToSpeech/SpeechStateUI";
import TranslateCamera from "./TranslateCamera";

const TranslateInput = () => {
  const history = useHistory();
  const [value, onChange, onSubmit] = useTranslateText();
  const [imageURI, onCaptureImage] = useScanner();
  const { param } = useParams();
  const [loading, text, onSetImage] = useGetTextFromImage();
  const [resize, onResize] = useResize();

  useEffect(() => {
    if (imageURI) onResize(imageURI);
  }, [imageURI]);
  return (
    <Holder>
      <form onSubmit={onSubmit}>
        <TranslateInputField
          placeholder="Start typing..."
          value={value}
          onChange={onChange}
          rows={10}
        />
        <ButtonHolder>
          <input
            accept="image/*"
            id="camera"
            type="file"
            capture="environment"
            onChange={(e) => onCaptureImage(e.target)}
            hidden
          />
          <label htmlFor="camera">
            <span>
              <Camera
                onClick={() => history.push(HOME_URL + HOME_ROUTE_SCAN)}
                color={COLOR_PRIMARY}
              />
            </span>
          </label>
          {/* <Camera
            onTakePhoto={(dataUri) => {
              handleTakePhoto(dataUri);
            }}
          /> */}
          <Mic
            onClick={() => history.push(HOME_URL + HOME_ROUTE_SPEECH)}
            color={COLOR_PRIMARY}
          />
          <Volume2 color={COLOR_PRIMARY} />
          <Button type="submit">Translate</Button>
        </ButtonHolder>
      </form>

      {resize && param === "scan" && (
        <TranslateCamera
          loading={loading}
          imageURI={resize}
          onSetImage={onSetImage}
        />
      )}
      {param === "speech" && (
        <HomeRoutesContainer>
          <SpeechStateUI />
        </HomeRoutesContainer>
      )}
    </Holder>
  );
};

export default TranslateInput;

const Holder = styled.div`
  position: relative;
`;

const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TranslateInputField = styled.textarea`
  resize: none;
  width: 100%;
  background-color: var(--color-white);
  font-size: 20px;
  border: none;
  outline: none;
  ${CSS_CONTAINER_BORDER_RADIUS};
  ${CSS_CONTAINER_PADDING};
  ${CSS_CONTAINER_BORDER};
  margin-bottom: 20px;
`;
