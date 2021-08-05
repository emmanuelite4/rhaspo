import MobileHeader from "../app/component/MobileHeader/MobileHeader";
import Rhapso from "../app/component/Rhapso/Rhapso";
import styled from "@emotion/styled";
import { CSS_CONTAINER_STYLE } from "../style/shared";
import RhapsoHeader from "../app/component/Rhapso/RhapsoHeader";
import useGetRhaspo from "../hooks/useGetRhaspo";
import RhapsoSelectLang from "../app/component/Rhapso/RhapsoSelectLang";

const RhapsoContainer = () => {
  const [data] = useGetRhaspo();

  const { title, bibleVerse, message, date, prayer } = data;
  return (
    <Holder>
      <RhapsoHeader text={title} date={date} />
      <Rhapso prayer={prayer} bibleVerse={bibleVerse} message={message} />
    </Holder>
  );
};

export default RhapsoContainer;

const Holder = styled.div`
  ${CSS_CONTAINER_STYLE};
  padding: 0px;
`;
