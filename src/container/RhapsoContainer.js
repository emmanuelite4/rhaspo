import Rhapso from "../app/component/Rhapso/Rhapso";
import styled from "@emotion/styled";
import { CSS_CONTAINER_STYLE } from "../style/shared";
import RhapsoHeader from "../app/component/Rhapso/RhapsoHeader";
import useGetRhaspo from "../hooks/useGetRhaspo";
import DesktopHeader from "../app/component/HomeHeader/DesktopHeader";
import RhapsoCategory from "../app/component/Rhapso/RhapsoCategory";

const RhapsoContainer = () => {
  const [content, loading] = useGetRhaspo();

  console.log(loading);
  const { title, bibleVerse, message, date, prayer, prayerConclusionLabel } =
    content;
  return (
    <Holder>
      {/* <RhapsoCategory /> */}
      <DesktopHeader title="Rhapso Translate" />
      <Body>
        <RhapsoHeader text={title} date={date} loading={loading} />
        <Rhapso
          prayer={prayer}
          bibleVerse={bibleVerse}
          message={message}
          prayerConclusionLabel={prayerConclusionLabel}
        />
      </Body>
    </Holder>
  );
};

export default RhapsoContainer;

const Holder = styled.div`
  ${CSS_CONTAINER_STYLE};
  padding: 0px;
`;

const Body = styled.div`
  @media (min-width: 567px) {
    // display: grid;
    // grid-template-columns: 2fr 3fr;
    margin-top: -20px;
    padding: 0px 40px;
  }
`;
