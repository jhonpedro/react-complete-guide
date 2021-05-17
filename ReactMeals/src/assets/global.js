import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --color-pink-lighter: #faf3dd;
    --color-primary: #aed9e0;
    --color-secondary: #b8f2e6;
    --color-dark: #5e6472;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
  }
`
