import  { createGlobalStyle } from "styled-components";
export const Global = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    scroll-behavior: smooth;
  }
    body {
        color: ${({ theme }) => theme.colors.textColor};
  position: relative;
  font-family: ${({ theme }) => theme.fontStyles.bodyFont};
  background-color: ${({ theme }) => theme.colors.bodyColor};
    }
    h1,
    h2,
    h3,
    h4 {
      color: ${({ theme }) => theme.colors.titleColor};
      font-weight: ${({ theme }) => theme.fontStyles.normalFontSize};
    }
    ul {
        list-style: none;
      }
      
      a {
        text-decoration: none;
      }
      
      img {
        max-width: 100%;
        height: auto;
      }


`;
