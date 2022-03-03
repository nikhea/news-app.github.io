import Styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "./Global.style";
export const HeaderStyled = Styled.div`
   // margin: 1em 0;
   // background:red;
   a{ 
      padding:0 1em;
   }


`;
export const Logo = Styled.h1`
    color:#3e3e3e;
    font-size: 1.5rem;
    text-transform:uppercase;
    margin:1em 0;

`;

export const NavUnList = Styled.ul`
   list-style-item: none;
   text-transform:capitalize;
   margin:1em 0;
   @media(max-width:${theme.media.xs}) {
    display:none;
  }
  
`;

export const StyledLink = Styled(Link)`
color:#3e3e3e;    
`;
