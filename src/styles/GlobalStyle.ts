import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'fs-gravity';
    src: url('/fs-gravity.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'fs-gravity', sans-serif;
    background-color: #fff;
  }
`;
