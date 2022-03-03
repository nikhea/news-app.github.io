import styled from "styled-components";

interface Props {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  flexWrap?: string;
  wrapGrap?: string;
}
export const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-end")};
  align-content: ${({ alignContent }) =>
    alignContent ? alignContent : "flex-end"};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "nowrap")};
  grap: ${({ wrapGrap }) => (wrapGrap ? wrapGrap : 0)};
`;
