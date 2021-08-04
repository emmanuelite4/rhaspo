import styled from "@emotion/styled";
import { CSS_CARD } from "../../../style/shared";
import { TextNorm } from "../../Text/Text";

const Rhapso = ({ bibleVerse, message, prayer }) => {
  return (
    <Holder>
      {/* <TextBig>{title}</TextBig> */}

      <TextNorm fontWeight="500" fontStyle="italic">
        {bibleVerse}
      </TextNorm>
      <ContentHolder>
        <TextNorm>{message}</TextNorm>
      </ContentHolder>
      <TextNorm fontWeight="500">PRAYER / CONFESSION</TextNorm>
      <TextNorm>{prayer}</TextNorm>
    </Holder>
  );
};
export default Rhapso;

const Holder = styled.div`
  ${CSS_CARD};
`;

const ContentHolder = styled.div`
  margin: 20px 0px;
`;
