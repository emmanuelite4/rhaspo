import styled from "@emotion/styled";
import AdvanceTranslate from "../app/component/AdvanceTranslate/AdvanceTranslate";
import DesktopHeader from "../app/component/HomeHeader/DesktopHeader";
import Header from "../app/component/HomeHeader/Header";
import MobileHeader from "../app/component/MobileHeader/MobileHeader";
import CategoryContainer from "../app/component/Rhapso/CategoryContainer";
import { CSS_CONTAINER_STYLE } from "../style/shared";

const AdvanceTranslateContainer = () => {
  return (
    <Holder>
      <DesktopHeader title="Rhapso Translate" />
      <Header title="Translate" />
      <CategoryContainer>
        <Body>
          <MobileHeader />
          <AdvanceTranslate />
        </Body>
      </CategoryContainer>
    </Holder>
  );
};

export default AdvanceTranslateContainer;

const Holder = styled.div`
  padding: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  ${CSS_CONTAINER_STYLE};
  height: 100%;
`;
