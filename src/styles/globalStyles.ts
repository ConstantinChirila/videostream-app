import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,500&display=swap');

  html {
    font-size: 10px;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    color: ${theme.colors.dark};
    background-color: ${theme.colors.light};
    font-size: 1.6rem
  }
`;
