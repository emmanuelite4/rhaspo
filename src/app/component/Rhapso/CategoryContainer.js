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
  height: 100%;
`;

const ChildrenWrap = styled.div`
  height: 100%;
  flex: 1;
  overflow: auto;
  padding-bottom: 40px;
  @media (min-width: 768px) {
    height: calc(100% - 100px);
  }
`;
