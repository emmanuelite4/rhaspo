import styled from "@emotion/styled";
import DetailWrap from "./component/DetailWrap";
import Logo from "./component/Logo";

const Landing = () => {
  return (
    <Wrapper>
      <Logo />
      <DetailWrap />
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
