import styled from "@emotion/styled";

export const TextBig = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: ${(props) => props.color || "var(--color-text-primary)"};
`;

export const TextMid = styled.h4`
  font-size: 20px;
  font-weight: ${(props) => props.weight || "bold"};
  color: ${(props) => props.color || "var(--color-text-primary)"};
`;

export const TextNorm = styled.p`
  font-size: 16px;
  color: ${(props) => props.color || "var(--color-text-primary)"};
  font-style: ${(props) => props.fontStyle || "normal"};
  font-weight: ${(props) => props.fontWeight || "400"};
`;

export const TextSmall = styled.small`
  font-size: 14px;
  color: ${(props) => props.color || "var(--color-text-primary)"};
  font-style: ${(props) => props.fontStyle || "normal"};
  font-weight: ${(props) => props.fontWeight || "400"};
`;
