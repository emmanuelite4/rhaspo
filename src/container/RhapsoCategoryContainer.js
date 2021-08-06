import styled from "@emotion/styled";
import { CSS_CONTAINER_STYLE } from "../style/shared";
import DesktopHeader from "../app/component/HomeHeader/DesktopHeader";
import RhapsoCategory from "../app/component/Rhapso/RhapsoCategory";

const RhapsoCategoryContainer = () => {
  return (
    <Holder>
      <DesktopHeader title="Rhapso Translate" />
      <RhapsoCategory />
    </Holder>
  );
};

export default RhapsoCategoryContainer;

const Holder = styled.div`
  ${CSS_CONTAINER_STYLE};
  padding: 0px;
`;
