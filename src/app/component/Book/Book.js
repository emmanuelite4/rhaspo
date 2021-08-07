import styled from "@emotion/styled";
import { Volume2 } from "react-feather";
import { COLOR_PRIMARY } from "../../../constant/styles";
import useFetchBook from "../../../hooks/useFetchBook";
import useGetTextFromStore from "../../../hooks/useGetTextFromStore";
import useTextToSpeech from "../../../hooks/useTextToSpeech";
import { TextBig, TextMid, TextSmall } from "../../Text/Text";
import IconButton from "../Button/IconButton";
import RhapsoSelectLang from "../Rhapso/RhapsoSelectLang";

const Book = () => {
  const [book, contents] = useFetchBook();
  const [voice, onGetVoice, onPlayEnd, onSetTextToSpeech] = useTextToSpeech();
  return (
    <Holder>
      <Header>
        <RhapsoSelectLang />
        <IconButton
          onClick={() => onSetTextToSpeech(book.name + contents[0].text)}
        >
          <Volume2 color={COLOR_PRIMARY} />
        </IconButton>
        {voice && <VideoWrapper voice={voice} onPlayEnd={onPlayEnd} />}
      </Header>
      <TextBig>Book Name: {book.name}</TextBig>
      <TextSmall>By: {book.by}</TextSmall>
      <Items>
        {contents.map((content) => (
          <ItemWrap key={content.documentID}>
            <TextMid>Chapter {content.chapter}</TextMid>
            <TextSmall>{content.text}</TextSmall>
          </ItemWrap>
        ))}
      </Items>
    </Holder>
  );
};

export default Book;

const Holder = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Items = styled.div`
  margin-top: 20px;
  border-top: 1px solid var(--color-line);
`;

const ItemWrap = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  & > :first-child {
    margin-bottom: 10px;
  }
`;
const VideoWrapper = ({ voice, onPlayEnd }) => {
  return (
    <video autoPlay controls hidden onEnded={onPlayEnd}>
      <source src={voice} />
    </video>
  );
};
