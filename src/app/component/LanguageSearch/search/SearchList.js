import styled from "@emotion/styled";
import { CSS_CONTAINER_PADDING } from "../../../../style/shared";

const SearchList = ({ data, type, onSelect, onClose }) => {
  return (
    <Holder>
      {data.map((lang) => (
        <Item
          role="button"
          key={lang.code}
          onClick={() => {
            console.log(lang);
            onSelect(lang, type);
            onClose();
          }}
        >
          {lang.name}
        </Item>
      ))}
    </Holder>
  );
};

export default SearchList;

const Holder = styled.div``;

const Item = styled.div`
  ${CSS_CONTAINER_PADDING};
  cursor: pointer;
`;
