import { createGlobalStyle } from 'styled-components';
import bgImg from '../assets/pattern-background-desktop.svg';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background-card: #ffffff;
    --background-body: #E1E9FF;
    --button: #382AE3;
    --gray-link: #74858F;
    --gray-text: #A6A7AC;
    --gray-title: #404A4F;
  } 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    height: 100vh;
    background: var(--background-body) url(${bgImg}) no-repeat;
    background-position: 0 -25%;
    background-size: 100%;
    -webkit-font-smoothing: antialiesed;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;