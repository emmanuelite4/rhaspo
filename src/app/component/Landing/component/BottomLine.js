import styled from "@emotion/styled";

const BottomLine = () => {
  return (
    <div>
      <DotHolder>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </DotHolder>
      <Line />
    </div>
  );
};

export default BottomLine;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--color-white);
`;
const Line = styled.div`
  width: 100%;
  height: 5px;
  background-color: var(--color-white);
`;

const DotHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
