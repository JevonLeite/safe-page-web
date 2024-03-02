import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    };

    @media (max-width: 720px) {
      font-size: 87.5%;
    };
  }

  body, #root {
    ${({ theme }) => css`
      display: flex;
      flex-direction: column;

      position: relative;

      min-height: 100vh;
      height: 100%;

      background-color: ${theme.colors.background};
    `}
  }

  body, input, textarea, button {
    font: 400 1rem 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.48;

    /* input[type='date']::-webkit-inner-spin-button,
    input[type='date']::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
    } */
  }

  a, button, select {
    text-decoration: none;
    background: none;
    border: 0;
    outline: none;
    transition: 180ms ease-in-out;
    cursor: pointer;
  }

  textarea {
    resize: none;
  }

  :focus {
    outline: none;
  }
`
