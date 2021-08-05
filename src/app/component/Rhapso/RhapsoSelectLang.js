import styled from "@emotion/styled";
import useGetLanguage from "../../../hooks/useGetLanguage";
import useSearchToggle from "../../../hooks/useSearchToggle";
import { CSS_CONTAINER_BORDER_RADIUS } from "../../../style/shared";
import LanguageSearch from "../LanguageSearch/LanguageSearch";
import Select from "../Select/Select";

const RhapsoSelectLang = () => {
  const [currentLang, tranlatedLang] = useGetLanguage();
  const [open, type, onClose, onOpen] = useSearchToggle();

  return (
    <Holder>
      <SelectHolder onClick={onOpen("To")}>
        <Select label={tranlatedLang.name} />
      </SelectHolder>
      {open && <LanguageSearch type="To" open={open} onClose={onClose} />}
    </Holder>
  );
};

export default RhapsoSelectLang;

const Holder = styled.div`
  background-color: var(--color-background);
  height: 50px;
  width: 250px;
  margin: auto;
  ${CSS_CONTAINER_BORDER_RADIUS}
  display: flex;
`;

const SelectHolder = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
