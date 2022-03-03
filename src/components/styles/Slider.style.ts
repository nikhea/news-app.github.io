import Styled from "styled-components";
import { theme } from "./Global.style";

export const ImageWarapper = Styled.div`
   background:black;
   overflow:hidden;
   
`;
export const Image = Styled.img`

height:530px;
max-height: 530%;
// object-fit:scale-down;
// opacity:0.4;

@media(max-width:${theme.media.xs}) {
    height:300px;
    max-height: 330%;
}

`;
