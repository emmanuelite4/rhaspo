import styled from "@emotion/styled";

const Logo = () => {
  return (
    <Wrapper>
      <img src="/img/logo.svg" alt="Rhapso" />
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
