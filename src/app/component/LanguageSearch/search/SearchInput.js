import styled from "@emotion/styled";
import { Search } from "react-feather";
import { COLOR_TEXT_PRIMARY } from "../../../../constant/styles";

const SearchInput = ({ value, onChange }) => {
  return (
    <Holder>
      <Search color={COLOR_TEXT_PRIMARY} />
      <Input onChange={onChange} value={value} placeholder="Search here..." />
    </Holder>
  );
};

export default SearchInput;

const Holder = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px 10px;
  border-bottom: 1px solid var(--color-line);
`;

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  flex: 1;
  margin-left: 20px;
  font-size: 18px;
`;
