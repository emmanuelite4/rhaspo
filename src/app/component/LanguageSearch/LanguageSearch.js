import styled from "@emotion/styled";
import useLanguageSearch from "../../../hooks/useLanguageSearch";
import { TextNorm } from "../../Text/Text";
import SearchInput from "./search/SearchInput";
import SearchList from "./search/SearchList";
import TranslateType from "./search/TranslateType";

const LanguageSearch = ({ type, onClose }) => {
  const [searchResult, value, onSearch, onSelect] = useLanguageSearch();
  return (
    <Holder>
      <HeadHolder>
        <TranslateType type={type} onCancel={onClose} />
        <SearchInput onChange={onSearch} value={value} />
      </HeadHolder>
      <TextWrap>
        <TextNorm fontWeight="500">All Languages</TextNorm>
      </TextWrap>
      <SearchList
        data={searchResult}
        type={type}
        onSelect={onSelect}
        onClose={onClose}
      />
    </Holder>
  );
};

export default LanguageSearch;

const Holder = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: var(--color-white);
  padding: 0px 0px 10px;
  overflow: auto;
  z-index: 100;
`;

const HeadHolder = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--color-white);
`;
const TextWrap = styled.div`
  padding: 20px 10px;
`;
