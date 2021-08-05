import styled from "@emotion/styled";
import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router-dom";
import { COLOR_WHITE } from "../../../constant/styles";
import { TextMid, TextSmall } from "../../Text/Text";
import RhapsoSelectLang from "./RhapsoSelectLang";

const RhapsoHeader = ({ text, date }) => {
  const history = useHistory();
  return (
    <Holder>
      <BackButton onClick={() => history.goBack()}>
        <ArrowLeft color={COLOR_WHITE} />
      </BackButton>

      <SelectorHolder>
        <RhapsoSelectLang />
      </SelectorHolder>
      <TitleWrap>
        <TextMid color={COLOR_WHITE}>{text}</TextMid>
        <TextSmall color={COLOR_WHITE}>{date}</TextSmall>
      </TitleWrap>
    </Holder>
  );
};

export default RhapsoHeader;

const Holder = styled.div`
  background: url(/img/bible.jpeg) no-repeat center;
  height: 250px;
  background-size: cover;
  position: relative;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: flex-end;
  padding: 20px;
  &::before {
    content: " ";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;

const TitleWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  & > :first-child {
    margin-bottom: 10px;
  }
`;

const BackButton = styled.div`
  padding: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const SelectorHolder = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
