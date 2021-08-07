import styled from "@emotion/styled";
import { COLOR_WHITE } from "../../../constant/styles";
import { TextMid } from "../../Text/Text";
import Loader from "../Loader/Loader";

const Button = ({
  children,
  bgColor,
  textColor,
  loading,
  iconRight,
  loaderColor,
  ...others
}) => {
  return (
    <ButtonWrapper bgColor={bgColor} {...others}>
      <TextMid color={textColor || COLOR_WHITE}>{children}</TextMid>
      {iconRight}
      {loading && <Loader color={loaderColor || COLOR_WHITE} />}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  background-color: ${(props) => props.bgColor || "var(--color-primary)"};
  color: var(--color-white);
  border-radius: 20px;
  padding: 0 20px;
  height: 50px;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  width: ${(props) => props.width || "auto"};
  justify-content: center;
  & > :not(:first-child) {
    margin-left: 10px;
  }
  &:disabled {
    opacity: 0.4;
  }

  @media (min-width: 576px) {
    border-radius: 10px;
    cursor: pointer;
  }
`;
