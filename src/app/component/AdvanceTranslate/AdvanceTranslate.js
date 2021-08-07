import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Book, Copy } from "react-feather";
import { COLOR_SECONDARY, COLOR_WHITE } from "../../../constant/styles";
import useAdvanTranslate from "../../../hooks/useAdvanTranslate";
import useGetAdvanTranslatedText from "../../../hooks/useGetAdvanTranslatedText";
import useGetDocxText from "../../../hooks/useGetDocxText";
import {
  CSS_CONTAINER_BORDER,
  CSS_CONTAINER_BORDER_RADIUS,
  CSS_CONTAINER_PADDING,
} from "../../../style/shared";
import { TextMid, TextNorm, TextSmall } from "../../Text/Text";
import Button from "../Button/Button";

const AdvanceTranslate = () => {
  const [text, loading, onChange, onSubmit] = useAdvanTranslate();
  const [translated] = useGetAdvanTranslatedText();
  const [onLoadDocx] = useGetDocxText();
  const [copied, setCopied] = useState(false);
  return (
    <Holder>
      <TextMid>Translate Large Text/File</TextMid>
      <CategoryWrap>
        <ItemWrapper>
          <ItemLogoWrap>
            <Copy color={COLOR_WHITE} size={30} />
          </ItemLogoWrap>
          <TextSmall>Type or Paste</TextSmall>
        </ItemWrapper>
        <ItemWrapper>
          <input type="file" onChange={onLoadDocx} id="docx-upload" hidden />
          <label htmlFor="docx-upload">
            <ItemLogoWrap>
              <Book color={COLOR_WHITE} size={30} />
            </ItemLogoWrap>
            <TextSmall>Docx</TextSmall>
          </label>
        </ItemWrapper>
      </CategoryWrap>
      <form onSubmit={onSubmit}>
        <TextArea
          placeholder="Start typing here..."
          onChange={onChange}
          value={text}
        />
        <ButtonWrap>
          <Button loading={loading}>Translate</Button>
        </ButtonWrap>
      </form>
      <Divider />
      {translated && (
        <ButtonWrap>
          <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
            <Button bgColor={COLOR_SECONDARY}>
              {copied ? "Copied" : "Copy translated text"}
            </Button>
          </CopyToClipboard>
        </ButtonWrap>
      )}
      <TranslatedTextWrap>
        <TextNorm>{translated}</TextNorm>
      </TranslatedTextWrap>
    </Holder>
  );
};

export default AdvanceTranslate;

const Holder = styled.div`
  padding: 20px;
`;
const CategoryWrap = styled.div`
  margin: 20px 0px;
  display: flex;
  align-item: center;
  & > :not(:last-child) {
    margin-right: 20px;
  }
`;
const ItemWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const ItemLogoWrap = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "var(--color-primary)"};
  border: 1px solid var(--color-primary);
`;

const COMPONENT_STYLE = css`
  width: 100%;
  ${CSS_CONTAINER_BORDER};
  ${CSS_CONTAINER_BORDER_RADIUS};
  ${CSS_CONTAINER_PADDING};
`;

const TextArea = styled.textarea`
  ${COMPONENT_STYLE};
  min-height: 300px;
  outline: none;
`;

const ButtonWrap = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const TranslatedTextWrap = styled.div`
  ${COMPONENT_STYLE};
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: var(--color-line);
  margin-bottom: 20px;
`;
