import styled from "@emotion/styled";
import { Copy, Mic, Volume2 } from "react-feather";
import { COLOR_TEXT_PRIMARY } from "../../../constant/styles";
import useGetAudioURI from "../../../hooks/useGetAudioURI";
import useGetTranlatedText from "../../../hooks/useGetTranlatedText";
import {
  CSS_CONTAINER_BORDER,
  CSS_CONTAINER_PADDING,
} from "../../../style/shared";
import { TextMid, TextNorm } from "../../Text/Text";

const TranslatedText = () => {
  const [uri] = useGetAudioURI();
  const [text] = useGetTranlatedText();

  return (
    <Holder>
      {/* <video controls autoPlay name="media">
        <source
          src="https://translate.google.com/translate_tts?ie=UTF-8&amp;q=Hello%20world&amp;tl=en&amp;total=1&amp;idx=0&amp;textlen=11&amp;client=tw-ob&amp;prev=input&amp;ttsspeed=1"
          type="audio/mpeg"
        />
        <source
          src="https://translate.google.com/translate_tts?ie=UTF-8&amp;q=Hello%20world&amp;tl=en&amp;total=1&amp;idx=0&amp;textlen=11&amp;client=tw-ob&amp;prev=input&amp;ttsspeed=1"
          type="audio/ogg"
        />
      </video>
      {uri ? (
        <video controls="" autoplay="" name="media">
          <source
            src="https://translate.google.com/translate_tts?ie=UTF-8&amp;q=Hello%20world&amp;tl=en&amp;total=1&amp;idx=0&amp;textlen=11&amp;client=tw-ob&amp;prev=input&amp;ttsspeed=1"
            type="audio/mpeg"
          />
        </video>
      ) : null} */}
      <Header>
        <Volume2 color={COLOR_TEXT_PRIMARY} />
        <Copy color={COLOR_TEXT_PRIMARY} />
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
