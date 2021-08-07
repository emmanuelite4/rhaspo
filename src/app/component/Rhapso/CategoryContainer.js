import styled from "@emotion/styled";
import MediaQuery from "react-responsive";
import DesktopSideBar from "../DesktopSideBar/DesktopSideBar";

const CategoryContainer = ({ children }) => {
  return (
    <>
      <Holder>
        <MediaQuery minWidth={768}>
          <DesktopSideBar />
        </MediaQuery>
        <ChildrenWrap>{children}</ChildrenWrap>
      </Holder>
    </>
  );
};

export default CategoryContainer;

const Holder = styled.div`
  display: flex;
  flex: 1;
`;

const ChildrenWrap = styled.div`
  height: 100%;
  flex: 1;
  overflow: auto;
`;
