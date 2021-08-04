import styled from "@emotion/styled";
import { Menu, Repeat, Type } from "react-feather";
import useGetLanguage from "../../../hooks/useGetLanguage";
import useSearchToggle from "../../../hooks/useSearchToggle";
import { CSS_CONTAINER_BORDER } from "../../../style/shared";
import LanguageSearch from "../LanguageSearch/LanguageSearch";
import Select from "../Select/Select";

const MobileHeader = () => {
  const [currentLang, tranlagedLang] = useGetLanguage();
  const [open, type, onClose, onOpen] = useSearchToggle();
  return (
    <Holder>
      <MenuButtonHolder>
        <Menu />
      </MenuButtonHolder>
      <BorderLine />
      <SelectHolder onClick={onOpen("From")}>
        <Select label={currentLang.name} />
      </SelectHolder>
      <BorderLine />
      <TranlateHolder>
        <Repeat />
      </TranlateHolder>
      <BorderLine />
      <SelectHolder onClick={onOpen("To")}>
        <Select label={tranlagedLang.name} />
      </SelectHolder>
      {open && <LanguageSearch type={type} open={open} onClose={onClose} />}
    </Holder>
  );
};

export default MobileHeader;

const Holder = styled.div`
  background-color: var(--color-white);
  height: 50px;
  ${CSS_CONTAINER_BORDER}
  display: flex;
`;

const MenuButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 60px;
`;

const BorderLine = styled.div`
  height: 50px;
  background-color: var(--color-line);
  width: 2px;
`;

const TranlateHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 60px;
`;

const SelectHolder = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
