import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { HOME_URL, RHAPSODY_URL } from "../../../constant/navigation";
import { COLOR_PRIMARY, COLOR_WHITE } from "../../../constant/styles";
// import useRpHistory from "../../../hooks/useRpHistory";
import { TextBig } from "../../Text/Text";
import Button from "../Button/Button";

const DesktopHeader = ({ title }) => {
  //   const [onPush] = useRpHistory();
  const history = useHistory();
  return (
    <Holder>
      <Logo src="/img/logo.svg" alt="Logo" />
      <TextBig>{title}</TextBig>
      <Button onClick={() => history.push(RHAPSODY_URL)}>
        Today's Rhapsody
      </Button>
      <Button
        onClick={() => history.push(HOME_URL)}
        bgColor={COLOR_WHITE}
        textColor={COLOR_PRIMARY}
      >
        Other Translation
      </Button>
    </Holder>
  );
};

export default DesktopHeader;

const Holder = styled.div`
  height: 100px;
  box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  padding: 20px 30px;

  @media (max-width: 576px) {
    display: none;
  }
  & > :nth-child(2) {
    flex: 1;
  }
`;

const Logo = styled.img`
  width: 50px;
  margin-right: 30px;
`;
