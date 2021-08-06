import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { HOME_URL, RHAPSO_CATEGORY_URL } from "../../../../constant/navigation";
import {
  COLOR_FADE_WHIHE,
  COLOR_PRIMARY,
  COLOR_WHITE,
} from "../../../../constant/styles";
import { TextBig } from "../../../Text/Text";
import Button from "../../Button/Button";
import BottomLine from "./BottomLine";

const DetailWrap = () => {
  const history = useHistory();
  return (
    <Holder>
      <TextBig color={COLOR_WHITE}>Welcome To Rhapso Translate</TextBig>;
      <Button
        bgColor={COLOR_WHITE}
        textColor={COLOR_PRIMARY}
        onClick={() => history.push(RHAPSO_CATEGORY_URL)}
      >
        Rhapsody Translator
      </Button>
      <br />
      <Button
        bgColor={COLOR_FADE_WHIHE}
        textColor={COLOR_WHITE}
        onClick={() => history.push(HOME_URL)}
      >
        Other Tranlations
      </Button>
      <BottomLine />
    </Holder>
  );
};

export default DetailWrap;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  background-color: var(--color-primary);
  padding: 40px 30px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
