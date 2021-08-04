import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import Header from "../app/component/HomeHeader/Header";
import HomeRoutes from "../app/component/HomeRoute/HomeRoutes";
import HomeRoutesContainer from "../app/component/HomeRoute/HomeRoutesContainer";
import MobileHeader from "../app/component/MobileHeader/MobileHeader";
import SpeechStateUI from "../app/component/SpeechToSpeech/component/SpeechStateUI";
import SpeechToSpeech from "../app/component/SpeechToSpeech/SpeechToSpeech";
import TranslateModes from "../app/component/TranslateModes/TranslateModes";
import TextTranslator from "../app/component/Translator/TextTranslator";
import TranslatedText from "../app/component/Translator/TranslatedText";
import TranslateInput from "../app/component/Translator/TranslateInput";
import useGetTextToSpeechURi from "../hooks/useGetTextToSpeechURi";
import { CSS_CONTAINER_STYLE } from "../style/shared";

const HomeContainer = () => {
  return (
    <Holder>
      <Header title="Translate" />
      <Body>
        <MobileHeader />
        {/* <TextTranslator /> */}
        <TranslateInput />

        <TranslatedText />
        {/* <TranslateModes /> */}
        <HomeRoutes />
      </Body>

      {/* <SpeechToSpeech /> */}
    </Holder>
  );
};

export default HomeContainer;

const Holder = styled.div`
  padding: 0px;
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  ${CSS_CONTAINER_STYLE};
`;
