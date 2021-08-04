import { css } from "@emotion/react";

export const CSS_CONTAINER_PADDING = css`
  padding: 20px;
`;
export const CSS_CONTAINER_BORDER = css`
  border-radius: 20px;
`;
export const CSS_CARD = css`
  ${CSS_CONTAINER_PADDING};
  ${CSS_CONTAINER_BORDER};
  background-color: var(--color-white);
  width: 100%;
`;

export const CSS_CONTAINER_STYLE = css`
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  background-color: var(--color-background);
  padding: 20px;
  overflow: auto;
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;
