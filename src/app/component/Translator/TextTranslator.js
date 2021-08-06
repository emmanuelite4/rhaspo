import styled from "@emotion/styled";
import TranslatedText from "./TranslatedText";
import TranslateInput from "./TranslateInput";

const TextTranslator = () => {
  return (
    <Holder>
      <TranslateInput />
    </Holder>
  );
};

export default TextTranslator;

const Holder = styled.div`
  height: calc(100% - 100px);
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;
