import styled from "styled-components";
import { theme } from "./Global.style";

export const Grid = styled.div`
  display: grid;
  // grid-template-area: "card card latest";
  //                     "card card latest";
  //                     "card card latest";
  //                     "card card latest";
  grid-template-columns: repeat(12, 1fr);
  @media (max-width: ${theme.media.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Card = styled.div`
  width: 310px;
  // flex: 33.33%;
  margin: 1em 10px;
  background: #ffffff;
  max-width: 400px;
  // height:550px;
  margin: 100px auto;
  border-radius: 12px;
  padding: (24px * 2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  //  background:red;
  a {
    color: #000;
  }
  @media (max-width: ${theme.media.xs}) {
  width:100%;
  max-width:100%;
  display:block;
  }
`;
export const CardImage = styled.img``;
export const CardTitle = styled.h1`
  font-size: 1.1rem;
  margin: 1em;
  margin-bottom: 0;
`;
export const CardDesc = styled.p`
  font-size: 1.1rem;
  margin: 1em;
`;
export const CardDate = styled.p`
  font-size: 1.1rem;
  margin: 1em;
`;

export const Col1 = styled.div`
  grid-area: "latest";
  grid-column: 13;
  @media (max-width: ${theme.media.tabletScreen}) {
    grid-column:1;
  }
  @media (max-width: ${theme.media.xs}) {
    grid-column:1;
  }
`;

export const Col2 = styled.div`
  grid-area: "card";
  grid-column: 1/12;
  @media (max-width: ${theme.media.tabletScreen}) {
    grid-column:;
  }
  @media (max-width: ${theme.media.xs}) {
    grid-column: 1/13;
  }
  
`;
