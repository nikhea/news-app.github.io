import styled from "styled-components";
interface Props {
  width?: string;
}
export const Container = styled.div<Props>`
  width: ${({ width }) => (width ? width : "1000px")};
  // width: 80%;
  max-width: 100%;
  margin: 0 auto;
`;
