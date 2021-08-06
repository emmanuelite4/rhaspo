import styled from "@emotion/styled";
import DailyVerse from "../app/component/DailyVerse/DailyVerse";
import DesktopHeader from "../app/component/HomeHeader/DesktopHeader";
import Header from "../app/component/HomeHeader/Header";
import RhapsoSelectLang from "../app/component/Rhapso/RhapsoSelectLang";
import useDailyVerse from "../hooks/useDailyVerse";
import { CSS_CONTAINER_STYLE } from "../style/shared";

const DailyVerseContainer = () => {
  return (
    <Holder>
      <DesktopHeader title="Rhapso Translate" />
      <Header title="Verse for the day" />
      <Body>
        <RhapsoSelectLang />
        <DailyVerse />
      </Body>
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
