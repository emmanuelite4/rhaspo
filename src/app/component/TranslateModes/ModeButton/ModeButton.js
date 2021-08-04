import styled from "@emotion/styled";
import { COLOR_WHITE } from "../../../../constant/styles";
import { CSS_CONTAINER_BORDER } from "../../../../style/shared";
import { TextNorm } from "../../../Text/Text";

const ModeButton = ({ icon: Icon, label }) => {
  return (
    <Holder role="button">
      <IconHolder>
        <Icon color={COLOR_WHITE} size={20} />
      </IconHolder>
      <TextNorm>{label}</TextNorm>
    </Holder>
  );
};

export default ModeButton;

const Holder = styled.div`
  ${CSS_CONTAINER_BORDER};
  padding: 0px 20px;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  height: 50px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
`;

const IconHolder = styled.div`
  height: 30px;
  width: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  border-radius: 50%;
  margin-right: 20px;
`;
