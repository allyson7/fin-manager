import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #0D0D0F;
    --red: #E52E4D;
    --green: #33CC95;
    --yellow-gradient: linear-gradient(270deg, #F7DC01 0.99%, #FECF01 99.98%);
    --brown: #9A7557;

    --brown-light: #E0B485;

    --text-body: #F0F2F5;
    --text-title: #363F5F;

    --shape: #FFFFFF;
    --gray-dark: #1c1c1e;
    --gray-light: #2C2C2E;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }
  
  // REM = 1rem = 16px
  
  body {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
    color: var(--shape);
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button: {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`