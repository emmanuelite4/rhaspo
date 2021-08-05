import styled from "@emotion/styled";
import DesktopHeader from "../app/component/HomeHeader/DesktopHeader";
import Header from "../app/component/HomeHeader/Header";
import MobileHeader from "../app/component/MobileHeader/MobileHeader";
import TranslatedText from "../app/component/Translator/TranslatedText";
import TranslateInput from "../app/component/Translator/TranslateInput";
import { CSS_CONTAINER_STYLE } from "../style/shared";

const HomeContainer = () => {
  return (
    <Holder>
      <DesktopHeader title="Rhapso Translate" />
      <Header title="Translate" />
      <Body>
        <MobileHeader />
        <TranslateBody>
          <TranslateInput />

          <TranslatedText />
        </TranslateBody>
      </Body>
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

const TranslateBody = styled.div`
  @media (max-width: 576px) {
    & > :first-child {
      margin-bottom: 20px;
    }
  }
  @media (min-width: 576px) {
    display: flex;
    width: 100%;
    & > :first-child {
      margin-right: 30px;
    }
    & > div {
      flex: 1;
    }
  }
`;
