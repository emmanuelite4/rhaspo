import styled from "@emotion/styled";
import { Book, BookOpen, MessageSquare, ShoppingBag } from "react-feather";
import { useHistory } from "react-router-dom";
import {
  BOOK_LIST_URL,
  DAILY_VERSE_URI,
  PREACHING_URL,
  RHAPSODY_URL,
} from "../../../constant/navigation";
import { COLOR_TEXT_PRIMARY, COLOR_WHITE } from "../../../constant/styles";
import { TextBig, TextNorm, TextSmall } from "../../Text/Text";

const DesktopSideBar = () => {
  const history = useHistory();
  return (
    <Holder>
      <CoverPhotoWrap>
        <div>
          <TextBig color={COLOR_WHITE}>Rhapso Translate</TextBig>
          <TextSmall color={COLOR_WHITE}>
            Get to know christ in your language
          </TextSmall>
        </div>
      </CoverPhotoWrap>
      <Item
        onClick={() => history.push(DAILY_VERSE_URI)}
        icon={BookOpen}
        label="Today's Bible Verse"
      />
      <Item
        icon={Book}
        label="Rhapsody of Realities"
        onClick={() => history.push(RHAPSODY_URL)}
      />
      <Item
        icon={ShoppingBag}
        label="BookShop"
        onClick={() => history.push(BOOK_LIST_URL)}
      />
      <Item
        icon={MessageSquare}
        label="Pastor Chris' Teachings"
        onClick={() => history.push(PREACHING_URL)}
      />
    </Holder>
  );
};
export default DesktopSideBar;

const Holder = styled.div`
  width: 320px;
  box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.1);

  height: calc(100% - 100px);
  background-color: var(--color-white);
  z-index: 1;
  position: sticky;
  top: 90px;
`;

const CoverPhotoWrap = styled.div`
  width: 100%;
  height: 200px;
  background: url(/img/rhapso.jpeg) no-repeat center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  & > div {
    position: relative;
    z-index: 1;
  }
  &::before {
    content: " ";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  margin-bottom: 20px;
`;

const ItemWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0px 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  & > :first-child {
    margin-right: 20px;
  }
`;

const Item = ({ icon: Icon, label, onClick }) => {
  return (
    <ItemWrapper onClick={onClick}>
      <Icon color={COLOR_TEXT_PRIMARY} />
      <TextNorm color={COLOR_TEXT_PRIMARY}>{label}</TextNorm>
    </ItemWrapper>
  );
};
