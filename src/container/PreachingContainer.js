import styled from "@emotion/styled";
import DesktopHeader from "../app/component/HomeHeader/DesktopHeader";
import Header from "../app/component/HomeHeader/Header";
import Preaching from "../app/component/Preaching/Preaching";
import CategoryContainer from "../app/component/Rhapso/CategoryContainer";

const PreachingContainer = () => {
  return (
    <div style={{ flex: 1 }}>
      <DesktopHeader title="Rhapso Translate" />
      <Header title="Pastor Chris' Preaching" />
      <CategoryContainer>
        <Body>
          <Preaching />
        </Body>
      </CategoryContainer>
    </div>
  );
};

export default PreachingContainer;

const Body = styled.div`
  padding: 20px;
`;

const TextHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  & > img {
    width: 320px;
  }
`;
