import Rhapso from "../app/component/Rhapso/Rhapso";
import styled from "@emotion/styled";
import { CSS_CONTAINER_STYLE } from "../style/shared";
import RhapsoHeader from "../app/component/Rhapso/RhapsoHeader";
import useGetRhaspo from "../hooks/useGetRhaspo";
import DesktopHeader from "../app/component/HomeHeader/DesktopHeader";
import CategoryContainer from "../app/component/Rhapso/CategoryContainer";

const RhapsoContainer = () => {
  const [content, loading] = useGetRhaspo();

  console.log(loading);
  const { title, bibleVerse, message, date, prayer, prayerConclusionLabel } =
    content;
  return (
    <Holder>
      {/* <RhapsoCategory /> */}
      <DesktopHeader title="Rhapso Translate" />{" "}
      <Body>
        <CategoryContainer>
          <RhapsoHeader text={title} date={date} loading={loading} />
          <Rhapso
            prayer={prayer}
            bibleVerse={bibleVerse}
            message={message}
            prayerConclusionLabel={prayerConclusionLabel}
          />
        </CategoryContainer>
      </Body>
    </Holder>
  );
};

export default RhapsoContainer;

const Holder = styled.div`
  ${CSS_CONTAINER_STYLE};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const Body = styled.div`
  overflow: auto;
  flex: 1;
  & > div {
    height: 100%;
  }
`;
