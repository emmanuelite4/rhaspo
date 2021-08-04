import styled from "@emotion/styled";

const HomeRoutesContainer = ({ children }) => {
  return <Holder>{children}</Holder>;
};

export default HomeRoutesContainer;

const Holder = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  padding: 20px;
`;
