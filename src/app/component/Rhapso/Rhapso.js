import styled from "@emotion/styled";
import { CSS_CARD } from "../../../style/shared";
import { TextNorm } from "../../Text/Text";

const Rhapso = ({ bibleVerse, message, prayer, prayerConclusionLabel }) => {
  return (
    <Holder>
      {/* <TextBig>{title}</TextBig> */}

      <TextNorm fontWeight="500" fontStyle="italic">
        {bibleVerse}
      </TextNorm>
      <ContentHolder>
        <TextNorm>{message}</TextNorm>
      </ContentHolder>
      <PrayerLabelWrap>
        <TextNorm fontWeight="500">{prayerConclusionLabel}</TextNorm>
      </PrayerLabelWrap>
      <TextNorm>{prayer}</TextNorm>
    </Holder>
  );
};
export default Rhapso;

const Holder = styled.div`
  ${CSS_CARD};

  @media (min-width: 567px) {
    width: 60%;
    margin: auto;
  }
`;

const ContentHolder = styled.div`
  margin: 20px 0px;
`;

const PrayerLabelWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
