import styled from "@emotion/styled";
import React from "react";
import { Book, BookOpen, MessageSquare, ShoppingBag } from "react-feather";
import { useHistory } from "react-router-dom";
import {
  BOOK_LIST_URL,
  DAILY_VERSE_URI,
  RHAPSODY_URL,
} from "../../../constant/navigation";
import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_WHITE,
} from "../../../constant/styles";
import { TextBig, TextNorm, TextSmall } from "../../Text/Text";

const RhapsoCategory = () => {
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
      <ButtonsWrap>
        <CategoryButton
          onClick={() => history.push(DAILY_VERSE_URI)}
          icon={BookOpen}
          label="Today's Bible Verse"
        />
        <CategoryButton
          icon={Book}
          label="Rhapsody of Realities"
          onClick={() => history.push(RHAPSODY_URL)}
        />
        <CategoryButton icon={MessageSquare} label="Pastor Chris' Teachings" />
        <CategoryButton
          icon={ShoppingBag}
          label="BookShop"
          onClick={() => history.push(BOOK_LIST_URL)}
        />
      </ButtonsWrap>
    </Holder>
  );
};

export default RhapsoCategory;

const Holder = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CoverPhotoWrap = styled.div`
  width: 100%;
  height: 400px;
  background: url(/img/jesus-earth.png) no-repeat center;
  background-size: cover;
  position: relative;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
`;
const CategoryButton = ({ icon: Icon, label, onClick }) => {
  return (
    <RhapsoButtonHolder role="button" onClick={onClick}>
      <RhapsoIconWrap>
        <Icon size={40} color={COLOR_PRIMARY} />
      </RhapsoIconWrap>
      <TextNorm color={COLOR_SECONDARY}>{label}</TextNorm>
    </RhapsoButtonHolder>
  );
};

const ButtonsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  //   & > :nth-child(odd) {
  //     border-right: 1px solid var(--color-line);
  //   }
`;

export const RhapsoButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 20px 10px;
  text-align: center;
`;

export const RhapsoIconWrap = styled.div`
  padding: 30px;
`;
