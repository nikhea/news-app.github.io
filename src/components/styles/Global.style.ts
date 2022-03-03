import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }
   html{
    font-size: 16px;
    overflow:hidden;

   }
   img{
       width: 100%;
       max-width: 100%;
   }
   ul{
       list-style-type: none;
   }
   a{
       text-decoration: none;
       color: #fff;
       
   }
   `;

export const theme = {
    media:{
     mobilescreen:'768px'
    }
};
