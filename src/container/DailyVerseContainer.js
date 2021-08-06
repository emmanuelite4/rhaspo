import styled from "@emotion/styled";
import DailyVerse from "../app/component/DailyVerse/DailyVerse";
import DesktopHeader from "../app/component/HomeHeader/DesktopHeader";
import Header from "../app/component/HomeHeader/Header";
import CategoryContainer from "../app/component/Rhapso/CategoryContainer";
import RhapsoSelectLang from "../app/component/Rhapso/RhapsoSelectLang";
import { CSS_CONTAINER_STYLE } from "../style/shared";

const DailyVerseContainer = () => {
  return (
    <Holder>
      <DesktopHeader title="Rhapso Translate" />
      <Header title="Verse for the day" />
      <CategoryContainer>
        <Body>
          <RhapsoSelectLang />
          <DailyVerse />
        </Body>
      </CategoryContainer>
    </Holder>
  );
};

export default DailyVerseContainer;

const Holder = styled.div`
  padding: 0px;
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  ${CSS_CONTAINER_STYLE};
`;
