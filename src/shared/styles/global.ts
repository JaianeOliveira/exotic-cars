import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html{
    font-size: 62.5%;
  }
  @font-face {
    font-family: 'Segoe UI Bold Italic';
    src: url('./fonts/Segoe UI Bold Italic.ttf') format('ttf'),
    }
      

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;

}
body {
  background: #FFFFFF;
 
}
`;
