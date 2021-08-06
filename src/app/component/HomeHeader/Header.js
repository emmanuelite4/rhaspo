import styled from "@emotion/styled";
import { ArrowLeft } from "react-feather";
import { COLOR_WHITE } from "../../../constant/styles";
import useRpHistory from "../../../hooks/useRpHistory";
import { TextBig } from "../../Text/Text";

const Header = ({ title }) => {
  const [onGoBack] = useRpHistory();
  return (
    <Holder>
      <ArrowLeft color={COLOR_WHITE} onClick={onGoBack} />
      <TextBig color={COLOR_WHITE}>{title}</TextBig>
    </Holder>
  );
};

export default Header;

const Holder = styled.div`
  padding: 20px;
  background-color: var(--color-primary);
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  & > :first-child {
    margin-right: 20px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
