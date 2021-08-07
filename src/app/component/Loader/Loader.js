import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Loader as LoaderIcon } from "react-feather";
import { COLOR_TEXT_PRIMARY } from "../../../constant/styles";

const Loader = ({ color, size }) => {
  return (
    <Holder>
      <LoaderIcon size={size || 40} color={color || COLOR_TEXT_PRIMARY} />
    </Holder>
  );
};

export default Loader;

const rotation = keyframes`
    from {
        transform:rotate(0deg);
    } to {
        transform: rotate(360deg)
    }
`;

const Holder = styled.div`
  animation: ${rotation} 0.8s ease infinite;
`;
