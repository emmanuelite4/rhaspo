import styled from "@emotion/styled";
import { Camera, FileText, Mic } from "react-feather";
import ModeButton from "./ModeButton/ModeButton";

const TranslateModes = () => {
  return (
    <Holder>
      <ModeButton icon={Mic} label="Speech to speech" />
      <ModeButton icon={Mic} label="Speech to Text" />
      <ModeButton icon={FileText} label="Text to Text" />
      <ModeButton icon={FileText} label="Text to speech" />
      <ModeButton icon={Camera} label="Scan to Text" />
    </Holder>
  );
};

export default TranslateModes;

const Holder = styled.div`
  display: grid;
  gap: 15px;
`;
