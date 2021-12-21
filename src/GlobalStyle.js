import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  :root {
    --mobileWidth: 3785px;
    --breakWidth: 768px;
    --maxWidth: 1440px;
    --white: hsl(0, 0%, 100%);
    --lightGrey: #eee;
    --xxsmallFont: 11px;
    --xsmallFont: 12px;
    --smallFont: 14px;
    --mediumFont: 16px;
    --bigFont: 18px;
    --xbigFont: 24px;
    --xxbigFont: 32px;
    --xxxbigFont: 48px;
    --navbarBreak: 768px;
    --navbarHeight: 50px; 
    --color1: #F9F9F9;
    --color2: #FFE0AC;
    --color3: #FFACB7;
    --color4: #6886C5;
    --shade: #A0A0AD;
  }

  * {
    box-sizing: content-box;
    margin: 0;
    padding: 0;
    text-decoration: none; 
    font-family: 'Roboto', sans-serif;
  }

  #root{
    min-width:100vw;
    min-height:100vh;
    margin: 0;
    padding: 0;
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .App{
    width: 100%;
  }

`;

export default GlobalStyle;
