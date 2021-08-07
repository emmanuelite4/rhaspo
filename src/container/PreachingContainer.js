import styled from "@emotion/styled";
import DesktopHeader from "../app/component/HomeHeader/DesktopHeader";
import Header from "../app/component/HomeHeader/Header";
import CategoryContainer from "../app/component/Rhapso/CategoryContainer";

const PreachingContainer = () => {
  return (
    <div style={{ height: "100%" }}>
      <DesktopHeader title="Rhapso Translate" />
      <Header title="Pastor Chris' Preaching" />
      <CategoryContainer>
        <TextHolder>
          <img src="/img/coming-soon.gif" alt="Coming Soon" />
        </TextHolder>
      </CategoryContainer>
    </div>
  );
};

export default PreachingContainer;

const TextHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  & > img {
    width: 320px;
  }
`;
