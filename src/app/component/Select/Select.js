import styled from "@emotion/styled";
import { ChevronDown } from "react-feather";
import { TextNorm } from "../../Text/Text";

const Select = ({ label }) => {
  return (
    <Holder>
      <TextNorm>{label}</TextNorm>
      <ChevronDown />
    </Holder>
  );
};

export default Select;

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;
