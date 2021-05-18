import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --color-pink-lighter: #faf3dd;
    --color-primary: #ffc600;
    --color-background-darker: #2d2a32;
    --color-secondary: #fff599;
    --color-dark: #2a2e34;
    --color-white: #f8f9fa;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    background-color: var(--color-background-darker);
    color: var(--color-dark);
  }
`
