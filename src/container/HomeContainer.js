import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import Button from "../app/component/Button/Button";
import DesktopHeader from "../app/component/HomeHeader/DesktopHeader";
import Header from "../app/component/HomeHeader/Header";
import MobileHeader from "../app/component/MobileHeader/MobileHeader";
import CategoryContainer from "../app/component/Rhapso/CategoryContainer";
import TranslatedText from "../app/component/Translator/TranslatedText";
import TranslateInput from "../app/component/Translator/TranslateInput";
import { ADVANCE_TRANSLATE_URL } from "../constant/navigation";
import { COLOR_SECONDARY } from "../constant/styles";
import { CSS_CONTAINER_STYLE } from "../style/shared";

const HomeContainer = () => {
  const history = useHistory();
  return (
    <Holder>
      <DesktopHeader title="Rhapso Translate" />
      <Header title="Translate" />
      <CategoryContainer>
        <Body>
          <MobileHeader />
          <TranslateBody>
            <TranslateInput />

            <TranslatedText />
          </TranslateBody>
          <ButtonHolder>
            <Button
              onClick={() => history.push(ADVANCE_TRANSLATE_URL)}
              bgColor={COLOR_SECONDARY}
            >
              Translate Manuscript
            </Button>
          </ButtonHolder>
        </Body>
      </CategoryContainer>
    </Holder>
  );
};

export default HomeContainer;

const Holder = styled.div`
  padding: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  ${CSS_CONTAINER_STYLE};
`;

const TranslateBody = styled.div`
  @media (max-width: 992px) {
    margin-top: 20px;
    & > :not(:last-child) {
      margin-bottom: 20px;
    }
  }
  @media (min-width: 992px) {
    display: flex;
    margin-top: 20px;
    width: 100%;
    & > :first-child {
      margin-right: 30px;
    }
    & > div {
      flex: 1;
    }
  }
`;

const ButtonHolder = styled.div`
  flex: 1;
  text-align: center;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--color-line);
  padding-top: 20px;
`;
